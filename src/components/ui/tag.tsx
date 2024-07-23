import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

interface TagProps extends HTMLAttributes<HTMLDivElement> {}

export function Tag({
    children,
    className,
    ...rest
}: PropsWithChildren<TagProps>) {
    return (
        <div
            className={clsx(
                "bg-grey-10 border border-grey-15 px-3.5 py-1.5 rounded-full flex items-center gap-1",
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
}
