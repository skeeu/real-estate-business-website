import { PropsWithChildren } from "react";

interface ContainerProps {}

export function Container({ children }: PropsWithChildren<ContainerProps>) {
    return (
        <div className="max-w-screen-laptop px-4 laptop:max-w-screen-desktop laptop:px-20 w-full mx-auto">
            {children}
        </div>
    );
}
