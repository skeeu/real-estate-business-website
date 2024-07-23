import clsx from "clsx";

import { Card, CardProps } from "../ui/card";
import { ButtonLink } from "../ui/button-link";

export type Client = {
    name: string;
    location: string;
    avatar: string;
};

interface FAQCardProps extends CardProps {
    question: string;
    answer: string;
    to?: string;
}

export function FAQCard({
    question,
    answer,
    to,
    className,
    ...rest
}: FAQCardProps) {
    return (
        <Card
            className={clsx("p-6 flex flex-col gap-6", className)}
            variant="outline"
            {...rest}
        >
            <h4 className="font-semibold text-lg">{question}</h4>
            <p className="font-medium text-sm text-grey-60">{answer}</p>
            <ButtonLink to={to || ""} variant="grey">
                Read more
            </ButtonLink>
        </Card>
    );
}
