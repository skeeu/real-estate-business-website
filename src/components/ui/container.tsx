import { PropsWithChildren } from "react";

interface ContainerProps {}

export function Container({ children }: PropsWithChildren<ContainerProps>) {
    return (
        <div className="max-w-[358px] sm:max-w-[596px] lg:max-w-[1280px] xl:max-w-[1596px] w-full mx-auto">
            {children}
        </div>
    );
}
