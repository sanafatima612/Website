"use client"
import Logo from "./Logo"
import { useEffect, useRef, useState, useCallback } from "react"
import { useRouter, usePathname } from "next/navigation"
import { gsap } from "gsap"
import { cn } from "@/utils/utils"

/**
 * PageTransition
 *
 * Smooth page transition with vertical block animations and optional logo animation.
 * 
 * Features:
 * - Block-based cover and reveal animations using GSAP.
 * - Optional logo animation (path stroke + fill) during transition.
 * - Ability to exclude certain routes from triggering transitions.
 * - Configurable animation parameters via `config` prop.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content to render.
 * @param {React.ComponentType|false} [props.logo=Logo] - Logo component (must support forwardRef). Pass `false` to disable.
 * @param {Object} [props.config] - Animation configuration.
 * @param {number} [props.config.blockCount=20] - Number of vertical blocks.
 * @param {string} [props.config.backgroundColor="#222"] - Tailwind bg class or hex/RGB color.
 * @param {number} [props.config.duration=0.3] - Duration of each block animation.
 * @param {number} [props.config.stagger=0.02] - Delay between block animations.
 * @param {string} [props.config.ease="power2.out"] - GSAP easing for blocks.
 * @param {Object} [props.config.logoAnimation] - Logo stroke animation settings.
 * @param {string[]} [props.config.excludeRoutes=[]] - Routes to skip transitions.
 * @param {boolean} [props.config.disabled=false] - If true, disables all transitions.
 * @param {Function} [props.onTransitionStart] - Callback when transition starts.
 * @param {Function} [props.onTransitionEnd] - Callback when transition ends.
 */

export default function PageTransition({
    children,
    logo: CustomLogo = Logo, // Pass `false` to disable logo
    config = {},
    onTransitionStart,
    onTransitionEnd,
}) {
    const router = useRouter()
    const pathname = usePathname()

    // DOM refs
    const overlayRef = useRef(null)
    const logoOverlayRef = useRef(null)
    const logoRef = useRef(null)
    const blocksRef = useRef([])

    // Transition control
    const isTransitioning = useRef(false)
    const [transitioning, setTransitioning] = useState(false)

    // Config destructure with defaults
    const {
        blockCount = 20,
        backgroundColor = "#222",
        duration = 0.3,
        stagger = 0.02,
        ease = "power2.out",
        logoAnimation = { duration: 2, delay: 0.2, easing: "power2.inOut" },
        excludeRoutes = [],
        disabled = false,
    } = config

    /**
   * Reset the logo's stroke state so it can be re-animated.
   */
    const resetLogoStroke = useCallback(() => {
        if (!CustomLogo || !logoRef.current) return
        const path = logoRef.current.querySelector("path")
        if (!path) return
        const length = path.getTotalLength()
        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            fill: "transparent",
        })
    }, [CustomLogo])


    /**
   * Create vertical block elements for the transition overlay.
   */
    const createBlocks = useCallback(() => {
        if (!overlayRef.current) return
        overlayRef.current.innerHTML = ""
        blocksRef.current = []

        for (let i = 0; i < blockCount; i++) {
            const block = document.createElement("div")
            block.className = `flex-1 min-h-screen ${backgroundColor.startsWith("bg-") ? backgroundColor : ""
                } scale-x-0`
            if (!backgroundColor.startsWith("bg-"))
                block.style.backgroundColor = backgroundColor
            overlayRef.current.appendChild(block)
            blocksRef.current.push(block)
        }
    }, [backgroundColor, blockCount])

    /**
   * Cover animation (blocks + optional logo), then navigate.
   */
    const coverPage = useCallback(
        (url) => {
            const tl = gsap.timeline({
                onComplete: () => {
                    router.push(url) // ✅ only navigate AFTER cover animation
                },
            })

            gsap.set(overlayRef.current, { display: "flex", opacity: 1 })

            if (CustomLogo && logoRef.current) {
                resetLogoStroke()
                const path = logoRef.current.querySelector("path")
                tl.to(blocksRef.current, {
                    scaleX: 1,
                    stagger,
                    duration,
                    ease,
                    transformOrigin: "left",
                })
                    .set(logoOverlayRef.current, { opacity: 1 }, `-=${duration * 0.2}`)
                    .to(
                        path,
                        {
                            opacity: 1,
                            strokeDashoffset: path.getTotalLength(),
                        },
                        "-=0.25"
                    )
                    .to(
                        path,
                        {
                            strokeDashoffset: 0,
                            duration: logoAnimation.duration,
                            ease: logoAnimation.easing,
                        },
                        `-=${logoAnimation.delay}`
                    )
                    .to(
                        path,
                        {
                            fill: "#e3e4d8",
                            duration: 0.5,
                            ease: "power2.out",
                        },
                        "-=0.5"
                    )
                    .to(path, {
                        opacity: 0,
                        duration: 0.2,
                        ease: "power2.out",
                    })
                    .to(logoOverlayRef.current, {
                        opacity: 0,
                        duration: 0.25,
                        ease: "power2.out",
                    })
            } else {
                tl.to(blocksRef.current, {
                    scaleX: 1,
                    stagger,
                    duration,
                    ease,
                    transformOrigin: "left",
                })
            }
        },
        [CustomLogo, duration, stagger, ease, logoAnimation, resetLogoStroke, router]
    )

    /**
    * Reveal animation (blocks slide out).
    */
    const revealPage = useCallback(() => {
        gsap.set(blocksRef.current, { transformOrigin: "right", scaleX: 1 })
        gsap.to(blocksRef.current, {
            scaleX: 0,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "right",
            onComplete: () => {
                isTransitioning.current = false
                setTransitioning(false)
                onTransitionEnd?.()
            },
        })
    }, [onTransitionEnd])

    /**
    * Setup blocks and attach link click handlers.
    */
    useEffect(() => {
        if (disabled) return;

        createBlocks();
        resetLogoStroke();

        requestAnimationFrame(() => {
            revealPage();
        });

        const handleClick = (e) => {
            const link = e.target.closest("a");
            if (!link) return;

            const url = new URL(link.href, window.location.origin).pathname;

            if (url === pathname) return;

            if (
                excludeRoutes?.some(
                    (route) => url.startsWith(route) || url.includes(route)
                )
            ) return;

            e.preventDefault();

            if (!isTransitioning.current) {
                isTransitioning.current = true;
                setTransitioning(true);
                onTransitionStart?.();
                coverPage(url);
            }
        };

        document.body.addEventListener("click", handleClick);
        return () => document.body.removeEventListener("click", handleClick);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, createBlocks, resetLogoStroke, revealPage, disabled, onTransitionStart]);

    return (
        <>
            {/* Block overlay */}
            <div
                ref={overlayRef}
                className="fixed top-0 left-0 w-full min-h-screen flex pointer-events-none z-10"
            ></div>

            {/* Logo overlay */}
            <div
                ref={logoOverlayRef}
                className="fixed top-0 left-0 w-full min-h-screen flex pointer-events-none z-10 justify-center items-center bg-[#222] opacity-0"
            ></div>

            {/* Logo container */}
            <div
                className={cn("absolute inset-0 flex items-center justify-center", {
                    "z-20": !transitioning,
                    "z-10": transitioning,
                })}
            >
                <Logo ref={logoRef} />
            </div>

            {/* Page content */}
            <div
                className={cn("relative", {
                    "z-30": !transitioning,
                    "z-5": transitioning,
                })}
            >
                {children}
            </div>
        </>
    )
}
