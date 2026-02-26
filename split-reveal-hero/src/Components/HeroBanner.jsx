import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroBanner = () => {
    const container = useRef()
    const leftPanel = useRef()
    const rightPanel = useRef()
    const lineRef = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "+=80%",
                scrub: 1,
                pin: true,
            },
        });

        tl.to(lineRef.current, {
            opacity: 0,
            duration: 0.1,
            ease: "none",
        }, 0)

            .to(leftPanel.current, {
                xPercent: -110,
                ease: "power3.inOut",
            }, 0)

            .to(rightPanel.current, {
                xPercent: 110,
                ease: "power3.inOut",
            }, 0);

    }, { scope: container });

    return (
        <section ref={container} className="relative h-screen overflow-hidden">

            {/* Revealed Section Behind */}
             <article className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-0 bg-[#F8F9FA]">
                <h2 className="text-5xl md:text-8xl font-black text-[#0B1220] tracking-tighter mb-6">
                    UNLIMITED <span className="text-red-600">POTENTIAL.</span>
                </h2>

                <p className="max-w-3xl text-gray-500 text-lg md:text-2xl font-medium leading-tight mb-10">
                    Scalable solutions designed to grow alongside your vision. 
                    From first steps to global impact, we build for the long run.
                </p>

                <div className="flex flex-col md:flex-row gap-5">
                    <button className="bg-[#0B1220] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                        Get Started Now
                    </button>
                    <button className="border-2 border-[#0B1220] text-[#0B1220] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0B1220] hover:text-white transition-all">
                        View Case Studies
                    </button>
                </div>
            </article>

            {/* LEFT PANEL */}
            <article
                ref={leftPanel}
                className="absolute inset-y-0 left-0 w-1/2 bg-[#0B1220] overflow-hidden flex items-center justify-end px-8 md:px-16 z-10"
            >
                {/* Softer Decorative Glow */}
                <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-white/10 rounded-full blur-[150px]" />

                <div className="relative text-right max-w-md">
                    <p className="text-[10px] tracking-tight md:tracking-[0.4em] text-gray-500 uppercase mb-6">
                        New Collection
                    </p>

                    <h1 className="text-white font-semibold leading-tight">
                        <span className="block text-left md:text-right text-3xl font-bold md:text-8xl md:font-extrabold tracking-tight">
                            Crafted
                        </span>

                        <span className="block text-left text-sm md:text-xl text-gray-400 mt-2 md:mt-4 font-light">
                            Designed for confidence and everyday elegance.
                        </span>
                    </h1>
                </div>
            </article>



            {/* RIGHT PANEL */}
            <article
                ref={rightPanel}
                className="absolute inset-y-0 right-0 w-1/2 bg-[#0B1220] overflow-hidden flex items-center justify-start px-8 md:px-16 z-10"
            >
                {/* Softer Decorative Glow */}
                <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-[var(--accent)]/10 rounded-full blur-[150px]" />

                <div className="relative text-left max-w-md">
                    <p className="text-[10px] tracking-tight md:tracking-[0.4em] text-gray-500 uppercase mb-6">
                        Premium Essentials
                    </p>

                    <h1 className="text-white font-semibold leading-tight">
                        <span className="block text-3xl font-bold md:text-8xl md:font-extrabold tracking-tight">
                            Designed
                        </span>

                        <span className="block text-sm md:text-xl text-gray-400 mt-2 md:mt-4 font-light">
                            To help you stand out without trying too hard.
                        </span>
                    </h1>
                </div>
            </article>


            {/* CENTER LINE */}
            <div
                ref={lineRef}
                className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] z-20 blur-[1px]"
                style={{
                    zIndex: 11,
                    background:
                        "linear-gradient(transparent 0%, rgba(100, 160, 255, 0.4) 30%, rgba(150, 200, 255, 0.7) 50%, rgba(100, 160, 255, 0.4) 70%, transparent 100%)",
                    boxShadow: "rgba(100, 160, 255, 0.35) 0px 0px 12px",
                    opacity: 1,
                }}
            />

        </section>
    );
};

export default HeroBanner;