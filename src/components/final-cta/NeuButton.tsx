"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const SPRING_OPTIONS = {
    mass: 1.5,
    stiffness: 500,
    damping: 100,
};

const NeuFollowButton: React.FC = () => {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, SPRING_OPTIONS);
    const ySpring = useSpring(y, SPRING_OPTIONS);

    const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

    const handleMove = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (!ref.current) return;

        const { height, width } = ref.current.getBoundingClientRect();
        const { offsetX, offsetY } = e.nativeEvent;

        const xPct = offsetX / width;
        const yPct = 1 - offsetY / height;

        const newY = 12 + yPct * 12;
        const newX = 12 + xPct * 12;

        x.set(newX);
        y.set(-newY);
    };

    const handleReset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="">
            <div className="mx-auto h-20 w-full max-w-72 bg-[#7c1616]">
                <motion.button
                    ref={ref}
                    style={{ transform }}
                    onMouseMove={handleMove}
                    onMouseLeave={handleReset}
                    onMouseDown={handleReset}
                    className="group flex h-full w-full items-center justify-between border-2 border-black bg-[#FF6154] hover:bg-white px-8 text-xl font-semibold"
                >
                    <Copy>HOVER ME!</Copy>
                    <Arrow />
                </motion.button>
            </div>
        </section>
    );
};

interface CopyProps {
    children: React.ReactNode;
}

const Copy: React.FC<CopyProps> = ({ children }) => {
    return (
        <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full text-slate-950">
                {children}
            </span>
            <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                {children}
            </span>
        </span>
    );
};

const Arrow: React.FC = () => (
    <div className="pointer-events-none flex h-6 w-6 overflow-hidden text-2xl">
        <FiArrowRight className="shrink-0 -translate-x-full text-[#FF6154] transition-transform duration-300 group-hover:translate-x-0" />
        <FiArrowRight className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
    </div>
);

export default NeuFollowButton;
