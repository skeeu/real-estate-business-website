import clsx from "clsx";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";

import { Card, CardProps } from "../ui/card";
import { ButtonLink } from "../ui/button-link";
import { priceFormatter } from "../../utils";
import { Tag } from "../ui/tag";

interface PropertyCardProps extends CardProps {
    title: string;
    image: string;
    description?: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    isVilla: boolean;
}

export function PropertyCard({
    title,
    description,
    image,
    price,
    bathrooms,
    bedrooms,
    isVilla,
    className,
    ...rest
}: PropertyCardProps) {
    return (
        <Card
            className={clsx("p-6 flex flex-col gap-4", className)}
            variant="outline"
            {...rest}
        >
            <img
                src={image}
                className="rounded-[10px] w-full h-[210px] object-cover"
            />
            <main>
                <h4 className="font-semibold text-xl">{title}</h4>
                <p className="text-sm font-medium text-grey-60">
                    {description}
                </p>
            </main>
            <div className="flex flex-wrap gap-1.5 capitalize">
                <Tag>
                    <IoBed size={20} fill="white" />
                    {bathrooms}-Bathroom
                </Tag>
                <Tag>
                    <FaBath size={20} fill="white" />
                    {bedrooms}-Bedroom
                </Tag>
                {isVilla && (
                    <Tag>
                        <HiMiniBuildingOffice size={20} fill="white" />
                        Villa
                    </Tag>
                )}
            </div>
            <footer className="flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-grey-60 text-sm font-medium">Price</p>
                    <p className="font-semibold text-lg">
                        ${priceFormatter.format(price)}
                    </p>
                </div>
                <ButtonLink to="">View Property details</ButtonLink>
            </footer>
        </Card>
    );
}
