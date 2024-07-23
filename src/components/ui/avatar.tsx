import clsx from "clsx";
import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    size?: number;
}

export function Avatar({ className, size = 24, ...rest }: AvatarProps) {
    return (
        <img
            className={clsx(
                "rounded-full",
                `w-[${size}px] h-[${size}px]`,
                className
            )}
            {...rest}
        />
    );
}
