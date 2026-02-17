import { useRef, useState, useEffect } from "react";
import MyButton from "./MyButton/MyButton";
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion";
import { fadeIn } from "../utils/framer-motion";

const HoverPreviewCard = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [imgPos, setImgPos] = useState({ x: 0, y: 0 });

    const imgRef = useRef();

    // Track mouse position within the component
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // Smooth following using requestAnimationFrame
    useEffect(() => {
        if (!isHovered) return;

        let animationFrame;

        const smoothFollow = () => {
            setImgPos((prev) => {
                const dx = mousePos.x - prev.x;
                const dy = mousePos.y - prev.y;

                return {
                    x: prev.x + dx * 0.1,
                    y: prev.y + dy * 0.1,
                };
            });

            animationFrame = requestAnimationFrame(smoothFollow);
        };

        animationFrame = requestAnimationFrame(smoothFollow);

        return () => cancelAnimationFrame(animationFrame);
    }, [isHovered, mousePos]);


    return (
        <motion.article
            variants={fadeIn("right", "tween", 0.2, 0.8)} // ✅ Add animation variants
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative group flex flex-col md:flex-row justify-between items-start gap-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Floating Image */}
            <figure
                ref={imgRef}
                className={`pointer-events-none absolute z-0 w-50 h-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out`}
                style={{
                    transform: `translate(${imgPos.x - 120}px, ${imgPos.y - 120}px)`, // 120 = half of w-60 (15rem)
                }}
            >
                <img
                    src={data.img}
                    alt={data.title}
                    className="w-full h-full object-cover shadow-lg"
                />
            </figure>

            {/* Title */}
            <header className="w-full md:max-w-[375px] z-10">
                <h2 className="text-4xl uppercase text-light font-bold">{data.title}</h2>
            </header>

            {/* Description & List */}
            <section className="w-full md:max-w-[375px] z-10">
                <p className="text-lg mb-5 text-light">
                    <strong>{data.description}</strong>
                </p>
                <ul className="space-y-2 text-gray">
                    {data.list?.map((l, idx) => (
                        <li key={idx} className="flex items-start">
                            <strong>
                                <span className="mr-2">+</span>
                                <span className="capitalize">{l.item}</span>
                            </strong>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Button */}
            <div className="w-full md:flex-1 md:flex md:justify-end z-10">
                <MyButton size="120px" url={data.url}>
                    <span className="relative z-10 text-[16px] text-gray mix-blend-difference pointer-events-none center-center gap-2 px-3">
                        <span>Details</span>
                        <ArrowUpRight />
                    </span>
                </MyButton>
            </div>
        </motion.article>
    );
}

export default HoverPreviewCard
