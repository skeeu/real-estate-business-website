import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    before?: ReactNode;
    after?: ReactNode;
}

export function Input({ before, after, ...rest }: InputProps) {
    return (
        <div className="flex items-center gap-1.5 rounded-app px-5 py-3.5 bg-grey-08 border border-grey-15 border-solid text-grey-60">
            {before}
            <input className="w-full grow" {...rest} />
            {after}
        </div>
    );
}
