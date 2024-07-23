import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    heading?: string;
    subhead?: string;
}

export function Section({
    children,
    heading,
    subhead,
    className,
    ...rest
}: PropsWithChildren<SectionProps>) {
    return (
        <section
            className={clsx(
                'before:content-[url("/sparkles.svg")] before:ml-[-8px]',
                className
            )}
            {...rest}
        >
            {(heading || subhead) && (
                <div className="flex flex-col gap-1.5 mb-10">
                    {heading && (
                        <h3 className="font-semibold text-[28px] capitalize">
                            {heading}
                        </h3>
                    )}
                    {subhead && (
                        <p className="font-medium text-sm text-grey-60">
                            {subhead}
                        </p>
                    )}
                </div>
            )}
            {children}
        </section>
    );
}
