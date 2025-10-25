'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.eager').forEach(el => observer.observe(el));

    const scrollToSection = (e) => {
      e.preventDefault();
      const target = e.currentTarget.getAttribute('href');
      if (target.startsWith('#')) {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', scrollToSection);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6">Home | MIUX</h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-light">
            A studio crafting captivating digital experiences.
          </p>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            A bespoke UX-driven design studio blending elegance and functionality
          </p>

          <div className="pt-8">
            <a
              href="mailto:info@madeinuxstudio.com"
              className="text-lg md:text-xl underline hover:opacity-70 transition-opacity"
            >
              info@madeinuxstudio.com
            </a>
          </div>

          <div className="relative w-full max-w-3xl mx-auto mt-12 aspect-video rounded-lg overflow-hidden bg-accent/10">
            <Image
              src="/works/work-1.jpg"
              alt="MIUX Studio elegant abstract design"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-sm pt-8 text-foreground/60">Made in UX Studio ©</p>

          <div className="pt-12">
            <a
              href="#mission"
              className="inline-block text-sm uppercase tracking-wider border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              Scroll for more ↓
            </a>
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 eager">Our mission</h2>

          <p className="text-xl md:text-2xl max-w-3xl mb-8 eager">
            Redefine the digital landscape by crafting elegant, human-centered experiences that seamlessly blend beauty and functionality
          </p>

          <p className="text-base md:text-lg text-foreground/70 mb-16 eager">
            MiUX's work has been recognized globally with multiple awards, including FWA, CSS Design Awards, Awwwards and UX Design Award Berlin...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="eager hover-scale space-y-4">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-accent/10">
                <Image
                  src="/works/work-2.jpg"
                  alt="UX/UI Design services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif">1 UX/UI Design</h3>
              <p className="text-sm text-foreground/70">
                Transform complex data into intuitive interfaces that users love
              </p>
              <a href="/works?category=UX/UI" className="text-sm underline inline-block">
                Learn more →
              </a>
            </div>

            <div className="eager hover-scale space-y-4">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-accent/10">
                <Image
                  src="/works/work-3.jpg"
                  alt="Dashboard Design services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif">2 Dashboard Design</h3>
              <p className="text-sm text-foreground/70">
                Built to decode complexity and present insights with clarity
              </p>
              <a href="/works?category=Dashboard" className="text-sm underline inline-block">
                Learn more →
              </a>
            </div>

            <div className="eager hover-scale space-y-4">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-accent/10">
                <Image
                  src="/works/work-4.jpg"
                  alt="Web & App Design services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif">3 Web & App Design</h3>
              <p className="text-sm text-foreground/70">
                Crafted for clarity and growth across all platforms
              </p>
              <a href="/works?category=Web" className="text-sm underline inline-block">
                Learn more →
              </a>
            </div>

            <div className="eager hover-scale space-y-4">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-accent/10">
                <Image
                  src="/works/work-1.jpg"
                  alt="Branding Identity services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif">4 Branding Identity</h3>
              <p className="text-sm text-foreground/70">
                From strategy and messaging to visual systems that resonate
              </p>
              <a href="/works?category=Branding" className="text-sm underline inline-block">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="py-20 px-6 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 eager">Featured Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <a href="/works/brownvase" className="eager hover-scale group">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/works/work-2.jpg"
                  alt="Brownvase project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-serif mt-4">Brownvase</h3>
            </a>

            <a href="/works/watt-property" className="eager hover-scale group">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/works/work-3.jpg"
                  alt="Watt Property project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-serif mt-4">Watt Property</h3>
            </a>

            <a href="/works/the-place" className="eager hover-scale group">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/works/work-4.jpg"
                  alt="The Place project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-serif mt-4">The Place</h3>
            </a>

            <a href="/works/sparkcards" className="eager hover-scale group">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/works/work-1.jpg"
                  alt="Sparkcards project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-serif mt-4">Sparkcards</h3>
            </a>
          </div>

          <div className="eager bg-background rounded-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/works/work-1.jpg"
                alt="Sparkcards detailed view"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-serif">Sparkcards</h3>
              <a href="/works/sparkcards" className="inline-block text-sm uppercase tracking-wider border-b border-foreground pb-1">
                View Project →
              </a>

              <ul className="space-y-3 list-none counter-reset-list">
                <li className="flex items-start space-x-3">
                  <span className="font-serif text-lg">1</span>
                  <span>UX-Driven Led by Strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-serif text-lg">2</span>
                  <span>Elegance Meets Innovation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-serif text-lg">3</span>
                  <span>Tailored Solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-serif text-lg">4</span>
                  <span>Designed to Grow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 eager">From idea to impact</h2>
          <p className="text-xl md:text-2xl mb-16 eager">Designing Experiences That Resonate and Scale</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="eager space-y-6">
              <p className="text-lg text-foreground/80">
                Every detail we design is purposeful, user-centered, and built to perform seamlessly across platforms.
              </p>
              <p className="text-lg text-foreground/80">
                From initial research and strategy through wireframing, prototyping, and final delivery, we ensure every touchpoint delivers value and delight.
              </p>
              <a href="/about" className="inline-block text-sm uppercase tracking-wider border-b border-foreground pb-1 mt-4">
                View Our Process →
              </a>
            </div>

            <div className="eager grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="/works/work-2.jpg"
                  alt="Process illustration left"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden mt-8">
                <Image
                  src="/works/work-3.jpg"
                  alt="Process illustration right"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 eager">Client Feedback</h2>

          <div className="space-y-8">
            <div className="eager slide-in bg-background rounded-lg p-8 md:p-12 space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-accent/20">
                  <Image
                    src="/works/work-1.jpg"
                    alt="Jina Huang"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Jina Huang</h4>
                  <p className="text-sm text-foreground/70">CEO of Watt Property Management</p>
                </div>
              </div>
              <p className="text-lg italic">
                "MIUX transformed our Watt Property Management website into a sophisticated platform that perfectly balances aesthetics with functionality. Their attention to detail and user experience expertise exceeded our expectations."
              </p>
            </div>

            <div className="eager slide-in bg-background rounded-lg p-8 md:p-12 space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-accent/20">
                  <Image
                    src="/works/work-2.jpg"
                    alt="Ana Ezpinoza"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Ana Ezpinoza</h4>
                  <p className="text-sm text-foreground/70">Brownvase</p>
                </div>
              </div>
              <p className="text-lg italic">
                "Nara @ MIUX has been an exceptional designer to work with. Her ability to understand our vision and translate it into elegant, functional designs has been invaluable to our brand's growth."
              </p>
            </div>

            <div className="eager slide-in bg-background rounded-lg p-8 md:p-12 space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-accent/20">
                  <Image
                    src="/works/work-4.jpg"
                    alt="Hussein Saab"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Hussein Saab</h4>
                  <p className="text-sm text-foreground/70">Sparkcards</p>
                </div>
              </div>
              <p className="text-lg italic">
                "Nara @ MIUX is an amazing Designer! The Sparkcards platform came to life through her thoughtful approach to UX and stunning visual design. Highly recommend for any serious digital project."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 eager">About MIUX</h2>
          <p className="text-xl md:text-2xl mb-12 eager">Made for Users, Made in UX</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="eager space-y-6">
              <p className="text-lg text-foreground/80">
                Our mission is simple yet bold: "Putting the beauty in user experience."
              </p>
              <p className="text-lg text-foreground/80">
                We believe exceptional design goes beyond aesthetics—it creates meaningful connections, solves real problems, and elevates every interaction. Our team brings together expertise in UX research, interface design, and digital strategy to deliver solutions that are as functional as they are beautiful.
              </p>
              <a href="/about" className="inline-block text-sm uppercase tracking-wider border-b border-foreground pb-1 mt-4">
                More About Us →
              </a>
            </div>

            <div className="eager aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/works/work-1.jpg"
                alt="About MIUX Studio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl md:text-4xl font-serif eager">
            Let's bring your vision to life.
          </h3>

          <p className="text-lg md:text-xl text-foreground/80 eager">
            Contact us today to discuss your project and receive a personalized quote.
          </p>

          <div className="eager pt-4">
            <a
              href="/contact"
              className="inline-block text-base md:text-lg uppercase tracking-wider border-2 border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Inquire →
            </a>
          </div>

          <p className="text-sm text-foreground/60 pt-12 eager">Coming Soon</p>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-foreground/60">Made in UX Studio © 2025</p>
        </div>
      </footer>
    </>
  );
}
