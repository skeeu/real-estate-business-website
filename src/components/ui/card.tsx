import { cva } from "class-variance-authority";
import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export type CardVariant = "plain" | "shadow" | "outline";

export interface CardProps extends HTMLAttributes<HTMLElement> {
    variant?: CardVariant;
}

const cardStyles = cva("rounded-app border border-grey-15", {
    variants: {
        variant: {
            plain: "bg-grey-10",
            shadow: "bg-grey-08 shadow-app",
            outline: "bg-grey-08",
        },
    },
});

export function Card({
    children,
    className,
    variant = "plain",
    ...rest
}: PropsWithChildren<CardProps>) {
    return (
        <article className={clsx(cardStyles({ variant }), className)} {...rest}>
            {children}
        </article>
    );
}
