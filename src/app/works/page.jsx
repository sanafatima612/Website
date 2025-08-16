// 'use client';
// import Image from "next/image";
// import Link from "next/link";
// import gsap from 'gsap';
// import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/SplitText";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger, SplitText);

// // Constants for animation values
// const ANIMATION_CONFIG = {
//     chars: {
//         yStart: "125%",
//         yEnd: "0%",
//         stagger: 25,
//         offset: 250,
//         duration: 150
//     },
//     clipPaths: {
//         start: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
//         middle: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         end: "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)"
//     },
//     scrub: {
//         reveal: 0.5,
//         hide: 0.5
//     }
// };

// // Work item data
// const WORK_ITEMS = [
//     { id: 1, src: "/works/work-1.jpg", alt: "Work 1", title: "Item 1" },
//     { id: 2, src: "/works/work-2.jpg", alt: "Work 2", title: "Item 2" },
//     { id: 3, src: "/works/work-3.jpg", alt: "Work 3", title: "Item 3" },
//     { id: 4, src: "/works/work-4.jpg", alt: "Work 4", title: "Item 4" }
// ];

// // Reusable WorkItem component
// const WorkItem = ({ item }) => (
//     <section className="relative w-full overflow-hidden h-[130svh] work-item">
//         <div className="absolute w-full h-screen clip-path-mypolygon will-change-[clip-path] work-item-img">
//             <Image
//                 src={item.src}
//                 alt={item.alt}
//                 width={400}
//                 height={400}
//                 className="w-full h-screen object-cover"
//             />
//         </div>
//         <h1 className="text-white font-mono text-5xl font-bold uppercase absolute top-1/3 left-1/3 transform-[translate(-50%, -50%)] w-full">
//             {item.title}
//         </h1>
//     </section>
// );

// // Hero section component
// const HeroSection = () => (
//     <section className="relative flex flex-col w-full min-h-screen items-center justify-center">
//         <h1 className="font-mono text-9xl font-bold uppercase">
//             We can do this!
//         </h1>
//         <Link href='/' className="pt-7">
//             <h3 className="text-white font-serif text-2xl p-4 bg-[#222]">
//                 Button Click
//             </h3>
//         </Link>
//     </section>
// );

// // Footer section component
// const FooterSection = () => (
//     <section className="relative w-full overflow-hidden flex flex-col min-h-screen items-center justify-center">
//         <h1 className="font-mono text-9xl font-bold uppercase">
//             Get In Touch!
//         </h1>
//     </section>
// );

// // Animation setup hook
// const useScrollAnimations = () => {
//     useGSAP(() => {
//         const workItems = gsap.utils.toArray(".work-item");

//         workItems.forEach((item) => {
//             const img = item.querySelector('.work-item-img');
//             const nameH1 = item.querySelector('h1');

//             // Setup text animation
//             const split = SplitText.create(nameH1, { type: 'chars', mask: 'chars' });
//             gsap.set(split.chars, { y: ANIMATION_CONFIG.chars.yStart });

//             // Character reveal animation
//             split.chars.forEach((char, index) => {
//                 const startOffset = index * ANIMATION_CONFIG.chars.stagger - ANIMATION_CONFIG.chars.offset;
//                 const endOffset = startOffset + ANIMATION_CONFIG.chars.duration;

//                 ScrollTrigger.create({
//                     trigger: item,
//                     start: `top+=${startOffset} top`,
//                     end: `top+=${endOffset} top`,
//                     scrub: 1,
//                     animation: gsap.fromTo(
//                         char,
//                         { y: ANIMATION_CONFIG.chars.yStart },
//                         { y: ANIMATION_CONFIG.chars.yEnd, ease: 'none' }
//                     )
//                 });
//             });

//             // Image reveal animation
//             ScrollTrigger.create({
//                 trigger: item,
//                 start: "top bottom",
//                 end: "top top",
//                 scrub: ANIMATION_CONFIG.scrub.reveal,
//                 animation: gsap.fromTo(img, {
//                     clipPath: ANIMATION_CONFIG.clipPaths.start
//                 }, {
//                     clipPath: ANIMATION_CONFIG.clipPaths.middle,
//                     ease: "none"
//                 })
//             });

//             // Image hide animation
//             ScrollTrigger.create({
//                 trigger: item,
//                 start: "bottom bottom",
//                 end: "bottom top",
//                 scrub: ANIMATION_CONFIG.scrub.hide,
//                 animation: gsap.fromTo(img, {
//                     clipPath: ANIMATION_CONFIG.clipPaths.middle
//                 }, {
//                     clipPath: ANIMATION_CONFIG.clipPaths.end,
//                     ease: "none"
//                 })
//             });
//         });

//         // Cleanup function
//         return () => {
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     });
// };

// export default function Works() {
//     useScrollAnimations();

//     return (
//         <div className="w-full min-h-screen flex flex-col items-center justify-center">
//             <HeroSection />
//             {WORK_ITEMS.map(item => (
//                 <WorkItem key={item.id} item={item} />
//             ))}
//             <FooterSection />
//         </div>
//     );
// }

'use client';
import Image from "next/image";
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Default configuration - customize as needed
const DEFAULT_ANIMATION_CONFIG = {
    chars: {
        yStart: "125%",
        yEnd: "0%",
        stagger: 25,
        offset: 250,
        duration: 150
    },
    clipPaths: {
        start: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
        middle: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        end: "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)"
    },
    scrub: {
        reveal: 0.5,
        hide: 0.5
    }
};

// Default work items - replace with your own data
const DEFAULT_WORK_ITEMS = [
    { id: 1, src: "/works/work-1.jpg", alt: "Work 1", title: "Item 1" },
    { id: 2, src: "/works/work-2.jpg", alt: "Work 2", title: "Item 2" },
    { id: 3, src: "/works/work-3.jpg", alt: "Work 3", title: "Item 3" },
    { id: 4, src: "/works/work-4.jpg", alt: "Work 4", title: "Item 4" }
];

// Reusable WorkItem component
const WorkItem = ({ item, className = "" }) => (
    <section className={`relative w-full overflow-hidden h-[130svh] work-item ${className}`}>
        <div className="absolute w-full h-screen clip-path-mypolygon will-change-[clip-path] work-item-img">
            <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={400}
                className="w-full h-screen object-cover"
            />
        </div>
        <h1 className="text-white font-mono text-5xl font-bold uppercase absolute top-1/3 left-1/3 transform-[translate(-50%, -50%)] w-full">
            {item.title}
        </h1>
    </section>
);

// Hero section component
const HeroSection = ({
    title = "We can do this!",
    buttonText = "Button Click",
    buttonHref = "/",
    className = ""
}) => (
    <section className={`relative flex flex-col w-full min-h-screen items-center justify-center ${className}`}>
        <h1 className="font-mono text-9xl font-bold uppercase">
            {title}
        </h1>
        <Link href={buttonHref} className="pt-7">
            <h3 className="text-white font-serif text-2xl p-4 bg-[#222]">
                {buttonText}
            </h3>
        </Link>
    </section>
);

// Footer section component
const FooterSection = ({
    title = "Get In Touch!",
    className = ""
}) => (
    <section className={`relative w-full overflow-hidden flex flex-col min-h-screen items-center justify-center ${className}`}>
        <h1 className="font-mono text-9xl font-bold uppercase">
            {title}
        </h1>
    </section>
);

// Animation setup hook
const useScrollAnimations = (animationConfig = DEFAULT_ANIMATION_CONFIG) => {
    useGSAP(() => {
        const workItems = gsap.utils.toArray(".work-item");

        workItems.forEach((item) => {
            const img = item.querySelector('.work-item-img');
            const nameH1 = item.querySelector('h1');

            // Setup text animation
            const split = SplitText.create(nameH1, { type: 'chars', mask: 'chars' });
            gsap.set(split.chars, { y: animationConfig.chars.yStart });

            // Character reveal animation
            split.chars.forEach((char, index) => {
                const startOffset = index * animationConfig.chars.stagger - animationConfig.chars.offset;
                const endOffset = startOffset + animationConfig.chars.duration;

                ScrollTrigger.create({
                    trigger: item,
                    start: `top+=${startOffset} top`,
                    end: `top+=${endOffset} top`,
                    scrub: 1,
                    animation: gsap.fromTo(
                        char,
                        { y: animationConfig.chars.yStart },
                        { y: animationConfig.chars.yEnd, ease: 'none' }
                    )
                });
            });

            // Image reveal animation
            ScrollTrigger.create({
                trigger: item,
                start: "top bottom",
                end: "top top",
                scrub: animationConfig.scrub.reveal,
                animation: gsap.fromTo(img, {
                    clipPath: animationConfig.clipPaths.start
                }, {
                    clipPath: animationConfig.clipPaths.middle,
                    ease: "none"
                })
            });

            // Image hide animation
            ScrollTrigger.create({
                trigger: item,
                start: "bottom bottom",
                end: "bottom top",
                scrub: animationConfig.scrub.hide,
                animation: gsap.fromTo(img, {
                    clipPath: animationConfig.clipPaths.middle
                }, {
                    clipPath: animationConfig.clipPaths.end,
                    ease: "none"
                })
            });
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });
};

// Main WorksSection component
export default function WorksSection({
    workItems = DEFAULT_WORK_ITEMS,
    animationConfig = DEFAULT_ANIMATION_CONFIG,
    heroProps = {},
    footerProps = {},
    className = ""
}) {
    useScrollAnimations(animationConfig);

    return (
        <div className={`w-full min-h-screen flex flex-col items-center justify-center ${className}`}>
            <HeroSection {...heroProps} />
            {workItems.map(item => (
                <WorkItem key={item.id} item={item} />
            ))}
            <FooterSection {...footerProps} />
        </div>
    );
}

// Export individual components for more flexibility
export { WorkItem, HeroSection, FooterSection, useScrollAnimations };