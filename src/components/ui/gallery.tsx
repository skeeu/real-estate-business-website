import { HTMLAttributes, ReactNode, useMemo, useState } from "react";
import clsx from "clsx";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { getCircularSlice } from "../../utils";
import { useWindowSize } from "../../hooks/useWindowSize";

type ItemsShownConfig = {
    width: number;
    amount: number;
};

interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
    items: ReactNode[];
    itemsShown?: ItemsShownConfig[];
    action?: ReactNode;
}

export function Gallery({
    items,
    action,
    itemsShown = [{ width: 1, amount: 1 }],
    className,
    ...rest
}: GalleryProps) {
    const { width } = useWindowSize();
    const actualItemsShown = useMemo(() => {
        const sortedByWidth = itemsShown.sort((a, b) => a.width - b.width);
        const lastMatch = sortedByWidth
            .reverse()
            .find((item) => item.width <= width!);
        return lastMatch ? lastMatch.amount : 1;
    }, [width]);

    const [activeIndex, setActiveIndex] = useState<number>(0);

    // 1 - right
    // -1 - left
    const [direction, setDirection] = useState<number>(1);

    const onNext = () => {
        setDirection(1);
        setActiveIndex((activeIndex + actualItemsShown) % items.length);
    };

    const onPrev = () => {
        setDirection(-1);
        setActiveIndex(
            (activeIndex - actualItemsShown + items.length) % items.length
        );
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

    const currentPage = Math.floor(activeIndex / actualItemsShown) + 1;
    const totalPages = Math.ceil(items.length / actualItemsShown);

    return (
        <div className={clsx("flex flex-col gap-8", className)} {...rest}>
            <div className="flex gap-4">
                <AnimatePresence mode="wait">
                    {getCircularSlice(items, activeIndex, actualItemsShown).map(
                        (item, i) => (
                            <motion.div
                                key={`${activeIndex}-${i}`}
                                className="flex-1"
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
            </div>

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
                        {currentPage}{" "}
                        <span className="text-grey-60">of {totalPages}</span>
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
