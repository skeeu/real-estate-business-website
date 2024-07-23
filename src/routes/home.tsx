import { HomeIcon } from "../components/home/icons/HomeIcon";
import { HomeIcon2 } from "../components/home/icons/HomeIcon2";
import { ButtonLink } from "../components/ui/button-link";
import { Card } from "../components/ui/card";
import { Container } from "../components/ui/container";

import { TfiArrowTopRight } from "react-icons/tfi";
import { Section } from "../components/ui/section";
import { PropertyCard } from "../components/home/property-card";
import { Gallery } from "../components/ui/gallery";

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
    return (
        <main>
            <section>
                <Container>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-10 md:flex-row-reverse">
                            <Card className="relative overflow-hidden before:absolute before:h-full before:w-full before:content-[''] before:bg-[url('/waves.svg')] before:bg-cover before:opacity-5 before:z-10 md:flex-1">
                                <img
                                    src="/home/building.svg"
                                    className="relative w-full z-20"
                                />
                            </Card>
                            <div className="flex flex-col gap-10 md:flex-1">
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-semibold text-[28px]">
                                        Discover Your Dream Property with
                                        Estatein
                                    </h3>
                                    <p className="text-sm font-medium text-grey-60">
                                        Your journey to finding the perfect
                                        property begins here. Explore our
                                        listings to find the home that matches
                                        your dreams.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4 md:flex-row">
                                    <ButtonLink to="" variant="outline">
                                        Learn More
                                    </ButtonLink>
                                    <ButtonLink to="">
                                        Browse Properties
                                    </ButtonLink>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <Card className="flex-grow flex flex-col text-center gap-1 p-4">
                                        <h3 className="font-bold text-2xl">
                                            200+
                                        </h3>
                                        <p className="capitalize text-sm font-medium text-grey-60">
                                            Happy Customers
                                        </p>
                                    </Card>
                                    <Card className="flex-grow flex flex-col text-center gap-1 p-4">
                                        <h3 className="font-bold text-2xl">
                                            10k+
                                        </h3>
                                        <p className="capitalize text-sm font-medium text-grey-60">
                                            Properties For Clients
                                        </p>
                                    </Card>
                                    <Card className="flex-grow flex flex-col text-center gap-1 p-4">
                                        <h3 className="font-bold text-2xl">
                                            16+
                                        </h3>
                                        <p className="capitalize text-sm font-medium text-grey-60">
                                            Years of Experience
                                        </p>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <Card
                            variant="shadow"
                            className="flex flex-wrap gap-2.5 p-2.5 text-center"
                        >
                            <Card className="flex flex-col items-center gap-3.5 flex-1 basis-40 py-5 px-2">
                                <div className="relative flex justify-center w-full">
                                    <TfiArrowTopRight
                                        className="absolute top-0 right-0 fill-grey-30"
                                        size={26}
                                    />
                                    <HomeIcon />
                                </div>
                                <h4 className="text-sm font-semibold capitalize">
                                    Find Your Dream Home
                                </h4>
                            </Card>
                            <Card className="flex flex-col items-center gap-3.5 flex-1 basis-40 py-5 px-2">
                                <div className="relative flex justify-center w-full">
                                    <TfiArrowTopRight
                                        className="absolute top-0 right-0 fill-grey-30"
                                        size={26}
                                    />
                                    <HomeIcon />
                                </div>
                                <h4 className="text-sm font-semibold capitalize">
                                    Unlock Property Value
                                </h4>
                            </Card>
                            <Card className="flex flex-col items-center gap-3.5 flex-1 basis-40 py-5 px-2">
                                <div className="relative flex justify-center w-full">
                                    <TfiArrowTopRight
                                        className="absolute top-0 right-0 fill-grey-30"
                                        size={26}
                                    />
                                    <HomeIcon />
                                </div>
                                <h4 className="text-sm font-semibold capitalize">
                                    Effortless Property Management
                                </h4>
                            </Card>
                            <Card className="flex flex-col items-center gap-3.5 flex-1 basis-40 py-5 px-2">
                                <div className="relative flex justify-center w-full">
                                    <TfiArrowTopRight
                                        className="absolute top-0 right-0 fill-grey-30"
                                        size={26}
                                    />
                                    <HomeIcon />
                                </div>
                                <h4 className="text-sm font-semibold capitalize">
                                    Smart Investments, Informed Decisions
                                </h4>
                            </Card>
                        </Card>
                    </div>
                    <Section
                        className="mt-16"
                        heading="Featured properties"
                        subhead="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."
                    >
                        <Gallery
                            action={
                                <ButtonLink variant="grey" to="">
                                    View all properties
                                </ButtonLink>
                            }
                            items={[
                                <PropertyCard
                                    title="Rustic retreat cottage"
                                    description="An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community"
                                    price={550000}
                                    isVilla
                                    bedrooms={2}
                                    bathrooms={2}
                                    image="/properties/rustic-cottage.png"
                                />,
                                <PropertyCard
                                    title="Seaside Serenity Villa"
                                    description="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood"
                                    price={180000}
                                    isVilla
                                    bedrooms={4}
                                    bathrooms={3}
                                    image="/properties/seaside-villa.png"
                                />,
                                <PropertyCard
                                    title="Metropolitan Haven"
                                    description="A chic and fully-furnished 2-bedroom apartment with panoramic city views"
                                    price={245000}
                                    isVilla
                                    bedrooms={2}
                                    bathrooms={2}
                                    image="/properties/metropolitan.png"
                                />,
                            ]}
                        />
                    </Section>
                    <Section
                        className="mt-16"
                        heading="What our clients say"
                        subhead="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
                    ></Section>
                </Container>
            </section>
        </main>
    );
}
