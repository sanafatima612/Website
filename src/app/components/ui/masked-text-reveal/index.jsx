"use client"

import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import SplitText from "gsap/SplitText"
import CustomEase from "gsap/CustomEase"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger)
CustomEase.create("w-ease", "0.625, 0.05, 0, 1")

// interface MaskedTextRevealProps {
//   text: string
//   initialMode?: "lines" | "words" | "letters"
//   className?: string
//   containerClassName?: string
//   triggerOnce?: boolean
//   delay?: number
// }

export function MaskedTextReveal({
  text,
  initialMode = "lines",
  className = "",
  containerClassName = "",
  triggerOnce = true,
  delay = 0,
}) {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const [currentTween, setCurrentTween] = useState(null)
  const [currentTargets, setCurrentTargets] = useState(null)

  const config = {
    lines: { duration: 1, stagger: 0.1 },
    words: { duration: 0.8, stagger: 0.08 },
    letters: { duration: 0.6, stagger: 0.006 },
  }

  useGSAP(
    () => {
      if (!headingRef.current) return

      // Split text into lines, words, and letters
      SplitText.create(headingRef.current, {
        type: "lines, words, chars",
        mask: "lines",
        linesClass: "line",
        wordsClass: "word",
        charsClass: "letter",
      })

      animate(initialMode)
    },
    { scope: containerRef }
  )

  function animate(type) {
    if (!headingRef.current) return
    if (currentTween) {
      currentTween.kill()
      currentTargets && gsap.set(currentTargets, { yPercent: 0 })
    }

    const { duration, stagger } = config[type]
    const className =
      type === "lines" ? "line" : type === "words" ? "word" : "letter"

    const targets = headingRef.current.querySelectorAll(`.${className}`)
    setCurrentTargets(targets)

    const tween = gsap.fromTo(
      targets,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration,
        stagger,
        delay,
        ease: "w-ease",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // trigger when top enters 80% viewport height
          toggleActions: triggerOnce ? "play none none none" : "play none none reset",
        },
      }
    )

    setCurrentTween(tween)
  }

  return (
    <section
      ref={containerRef}
      className={`flex min-h-screen items-center justify-center ${containerClassName}`}
    >
      <h1
        ref={headingRef}
        className={`text-center text-[3.75vw] font-medium leading-[1.15] ${className}`}
      >
        {text}
      </h1>
    </section>
  )
}
