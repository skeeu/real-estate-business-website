import { HTMLAttributes, ReactNode, useState } from "react";
import clsx from "clsx";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
    items: ReactNode[];
    action?: ReactNode;
}

export function Gallery({ items, action, className, ...rest }: GalleryProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // 1 - right
    // -1 - left
    const [direction, setDirection] = useState<number>(1);

    const onNext = () => {
        setDirection(1);
        setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
    };

    const onPrev = () => {
        setDirection(-1);
        setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction * 80,
        }),
        center: {
            x: 0,
        },
        exit: (direction: number) => ({
            x: -direction * 80,
            opacity: 0,
        }),
    };

    return (
        <div className={clsx("flex flex-col gap-8", className)} {...rest}>
            <AnimatePresence mode="wait">
                {items.map(
                    (item, i) =>
                        i === activeIndex && (
                            <motion.div
                                key={i}
                                custom={direction}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={variants}
                                transition={{
                                    duration: 0.3,
                                }}
                            >
                                {item}
                            </motion.div>
                        )
                )}
            </AnimatePresence>

            <div className="flex pt-4 border-t border-grey-15">
                {action && <div className="mr-auto">{action}</div>}
                <div className="ml-auto flex items-center gap-2.5">
                    <button
                        className="flex rounded-full items-center justify-center p-2.5 border border-grey-15 bg-grey-10"
                        onClick={onPrev}
                    >
                        <FiArrowLeft size={24} />
                    </button>
                    <p>
                        {activeIndex + 1}{" "}
                        <span className="text-grey-60">of {items.length}</span>
                    </p>
                    <button
                        className="flex rounded-full items-center justify-center p-2.5 border border-grey-15 bg-grey-10"
                        onClick={onNext}
                    >
                        <FiArrowRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}
