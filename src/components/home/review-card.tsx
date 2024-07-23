import clsx from "clsx";
import { FaStar } from "react-icons/fa";

import { Card, CardProps } from "../ui/card";
import { Avatar } from "../ui/avatar";

export type Client = {
    name: string;
    location: string;
    avatar: string;
};

interface ReviewCardProps extends CardProps {
    heading: string;
    review: string;
    rating: number;
    client: Client;
}

export function ReviewCard({
    heading,
    review,
    rating,
    client,
    className,
    ...rest
}: ReviewCardProps) {
    return (
        <Card
            className={clsx("p-6 flex flex-col gap-6", className)}
            variant="outline"
            {...rest}
        >
            <div className="flex gap-2">
                {[...Array(rating)].map((_, i) => (
                    <div
                        key={i}
                        className="rounded-full p-1.5 bg-grey-10 border border-grey-15 flex items-center justify-center"
                    >
                        <FaStar fill="#FFE500" size={18} />
                    </div>
                ))}
            </div>
            <div>
                <h4 className="font-semibold text-lg">{heading}</h4>
                <p className="font-medium text-sm">{review}</p>
            </div>
            <div className="flex items-center gap-2.5">
                <Avatar src={client.avatar} />
                <div className="flex flex-col capitalize">
                    <p className="text-base">{client.name}</p>
                    <p className="text-grey-60 text-sm">{client.location}</p>
                </div>
            </div>
        </Card>
    );
}
