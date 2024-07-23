import { PropsWithChildren } from "react";
import clsx from "clsx";
import { cva } from "class-variance-authority";
import { Link, LinkProps } from "react-router-dom";

export type ButtonLinkVariant = "purple" | "outline" | "grey";

interface ButtonLinkProps extends LinkProps {
    variant?: ButtonLinkVariant;
}

const linkStyles = cva(
    "rounded-app text-center capitalize text-nowrap block font-medium text-sm px-5 py-3.5",
    {
        variants: {
            variant: {
                purple: "bg-purple-60",
                outline: "bg-transparent border-grey-15 border",
                grey: "bg-grey-10 border border-grey-15",
            },
        },
    }
);

export function ButtonLink({
    children,
    variant = "purple",
    className,
    ...rest
}: PropsWithChildren<ButtonLinkProps>) {
    return (
        <Link className={clsx(linkStyles({ variant }), className)} {...rest}>
            {children}
        </Link>
    );
}
