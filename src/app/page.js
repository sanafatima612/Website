import { MaskedTextReveal } from '@/app/components/ui/masked-text-reveal'

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col gap-8 items-center justify-center">
        <div className="flex min-h-screen w-full items-center justify-center">
          <h1 className="font-mono text-center text-5xl md:text-6xl lg:text-9xl font-bold uppercase">
            Hello, world!
          </h1>
        </div>

        <MaskedTextReveal
          text="We’re using GSAP’s SplitText to break this content into lines, words, and characters."
          initialMode="words"
          className="font-serif"
          containerClassName=""
          triggerOnce={true}
        />
      </div>
    </>
  );
}
