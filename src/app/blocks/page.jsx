'use client'
import Image from "next/image";
import Link from "next/link";
import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Blocks() {
    const lenisRef = useRef()

    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000)
        }

        gsap.ticker.add(update)
        gsap.ticker.lagSmoothing(0)

        return () => gsap.ticker.remove(update)
    }, []);


    useGSAP(() => {
        gsap.utils.toArray(".work-item").forEach((item) => {
            const img = item.querySelector('.work-item-img');
            const nameH1 = item.querySelector('h1');

            const split = SplitText.create(nameH1, { type: 'chars', mask: 'chars' })

            gsap.set(split.chars, {
                y: "125%",
            })

            split.chars.forEach((char, index) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: `top+=${index * 25 - 250} top`,
                    end: `top+=${index * 25 - 150} top`,
                    scrub: 1,
                    animation: gsap.fromTo(char, { y: "125%" }, { y: "0%", ease: 'none' }),

                    onUpdate: (self) => {
                        console.log(self.progress)
                    }
                })
            });

            ScrollTrigger.create({
                trigger: item,
                start: "top bottom",
                end: "top top",
                scrub: 0.5,
                animation: gsap.fromTo(img, {
                    clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
                },
                    {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        ease: "none",
                    },
                )
            });

            ScrollTrigger.create({
                trigger: item,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 0.5,
                animation: gsap.fromTo(img, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                },
                    {
                        clipPath: "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)",
                        ease: "none",
                    },
                )
            })
        })
    });
    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} >
            <div className="w-full min-h-screen flex flex-col items-center justify-center">
                <section className="relative flex flex-col w-full min-h-screen items-center justify-center">
                    <h1 className="font-mono text-9xl font-bold uppercase">
                        We can do this!
                    </h1>
                    <Link href='/' className="pt-7">
                        <h3 className="text-white font-serif text-2xl p-4 bg-[#222]">
                            Button Click
                        </h3>
                    </Link>
                </section>

                <section className="relative w-full overflow-hidden h-[130svh] work-item">
                    <div className="absolute w-full h-screen clip-path-mypolygon will-change-[clip-path] work-item-img">
                        <Image
                            src="/works/work-1.jpg"
                            alt="Work 1"
                            width={400}
                            height={400}
                            className="w-full h-screen object-cover"
                        />
                    </div>
                    <h1 className="text-white font-mono text-5xl font-bold uppercase absolute top-1/3 left-1/3 transform-[translate(-50%, -50%)] w-full">
                        Item 1
                    </h1>
                </section>
                <section className="relative w-full overflow-hidden h-[130svh] work-item">
                    <div className="absolute w-full h-screen clip-path-mypolygon will-change-[clip-path] work-item-img">
                        <Image
                            src="/works/work-2.jpg"
                            alt="Work 2"
                            width={400}
                            height={400}
                            className="w-full h-screen object-cover"
                        />
                    </div>
                    <h1 className="text-white font-mono text-5xl font-bold uppercase absolute top-1/3 left-1/3 transform-[translate(-50%, -50%)] w-full">
                        Item 2
                    </h1>
                </section>
                <section className="relative w-full overflow-hidden h-[130svh] work-item">
                    <div className="absolute w-full h-screen clip-path-mypolygon will-change-[clip-path] work-item-img">
                        <Image
                            src="/works/work-3.jpg"
                            alt="Work 3"
                            width={400}
                            height={400}
                            className="w-full h-screen object-cover"
                        />
                    </div>
                    <h1 className="text-white font-mono text-5xl font-bold uppercase absolute top-1/3 left-1/3 transform-[translate(-50%, -50%)] w-full">
                        Item 3
                    </h1>
                </section>
                <section className="relative w-full overflow-hidden h-[130svh] work-item">
                    <div className="absolute w-full h-screen clip-path-mypolygon will-change-[clip-path] work-item-img">
                        <Image
                            src="/works/work-4.jpg"
                            alt="Work 4"
                            width={400}
                            height={400}
                            className="w-full h-screen object-cover"
                        />
                    </div>
                    <h1 className="text-white font-mono text-5xl font-bold uppercase absolute top-1/3 left-1/3 transform-[translate(-50%, -50%)] w-full">
                        Item 4
                    </h1>
                </section>

                <section className="relative w-full overflow-hidden flex flex-col min-h-screen items-center justify-center">
                    <h1 className="font-mono text-9xl font-bold uppercase">
                        Get In Touch!
                    </h1>
                </section>
            </div>
        </ReactLenis>
    );
}

