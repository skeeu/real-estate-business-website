import { TfiArrowTopRight } from "react-icons/tfi";

import { HomeIcon } from "../components/home/icons/HomeIcon";
import { ButtonLink } from "../components/ui/button-link";
import { Card } from "../components/ui/card";
import { Container } from "../components/ui/container";
import { Section } from "../components/ui/section";
import { PropertyCard } from "../components/home/property-card";
import { Gallery } from "../components/ui/gallery";
import { ReviewCard } from "../components/home/review-card";
import { FAQCard } from "../components/home/faq-card";

import { clientReviews } from "../data/cilent-reviews";
import { properties } from "../data/properties";
import { faqs } from "../data/faqs";

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
    return (
        <main>
            <section>
                <Container>
                    <div className="flex flex-col gap-10 md:flex-row-reverse">
                        {/* Building image */}
                        <Card className="relative before:absolute before:h-full before:w-full before:content-[''] before:bg-[url('/waves.svg')] before:bg-cover before:opacity-5 before:z-10 md:flex-1 md:rounded-none after:content-[url('/home/badge.svg')] after:absolute after:z-20 after:-left-1 after:-bottom-12 md:after:-left-14 md:after:top-14">
                            <img
                                src="/home/building.svg"
                                className="relative w-full z-20"
                            />
                        </Card>

                        <div className="flex flex-col gap-10 md:flex-1 md:justify-center">
                            {/* Intro */}
                            <div className="flex flex-col gap-4">
                                <h3 className="font-semibold text-3xl laptop:text-6xl">
                                    Discover Your Dream Property with Estatein
                                </h3>
                                <p className="text-sm font-medium text-grey-60 laptop:text-lg">
                                    Your journey to finding the perfect property
                                    begins here. Explore our listings to find
                                    the home that matches your dreams.
                                </p>
                            </div>

                            {/* Browse properties */}
                            <div className="flex flex-col gap-4 md:flex-row">
                                <ButtonLink to="" variant="outline">
                                    Learn More
                                </ButtonLink>
                                <ButtonLink to="">Browse Properties</ButtonLink>
                            </div>

                            {/* Short stats */}
                            <div className="flex flex-wrap gap-3">
                                <Card className="flex-grow flex flex-col text-center md:text-left gap-1 p-4">
                                    <h3 className="font-bold text-2xl">200+</h3>
                                    <p className="capitalize text-sm font-medium text-grey-60">
                                        Happy Customers
                                    </p>
                                </Card>
                                <Card className="flex-grow flex flex-col text-center md:text-left gap-1 p-4">
                                    <h3 className="font-bold text-2xl">10k+</h3>
                                    <p className="capitalize text-sm font-medium text-grey-60">
                                        Properties For Clients
                                    </p>
                                </Card>
                                <Card className="flex-grow flex flex-col text-center md:text-left gap-1 p-4">
                                    <h3 className="font-bold text-2xl">16+</h3>
                                    <p className="capitalize text-sm font-medium text-grey-60">
                                        Years of Experience
                                    </p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* CTA */}
                <Card
                    variant="shadow"
                    className="grid grid-cols-2 mt-10 md:mt-0 md:grid-cols-4 gap-2.5 p-2.5 text-center"
                >
                    <Card className="flex flex-col items-center gap-3.5 py-5 px-2">
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
                    <Card className="flex flex-col items-center gap-3.5 py-5 px-2">
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
                    <Card className="flex flex-col items-center gap-3.5 py-5 px-2">
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
                    <Card className="flex flex-col items-center gap-3.5 py-5 px-2">
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

                {/* Properties gallery */}
                <Container>
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
                            items={properties.map((property) => (
                                <PropertyCard
                                    key={property.id}
                                    title={property.title}
                                    description={property.description}
                                    price={property.price}
                                    isVilla={property.isVilla}
                                    bedrooms={property.bedrooms}
                                    bathrooms={property.bathrooms}
                                    image={property.image}
                                />
                            ))}
                        />
                    </Section>
                </Container>

                {/* What clieents say */}
                <Container>
                    <Section
                        className="mt-16"
                        heading="What our clients say"
                        subhead="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
                    >
                        <Gallery
                            action={
                                <ButtonLink variant="grey" to="">
                                    View all testimonials
                                </ButtonLink>
                            }
                            items={clientReviews.map((review) => (
                                <ReviewCard
                                    key={review.id}
                                    heading={review.heading}
                                    review={review.review}
                                    rating={review.rating}
                                    client={review.client}
                                />
                            ))}
                        />
                    </Section>
                </Container>

                {/* FAQ section */}
                <Container>
                    <Section
                        className="my-16"
                        heading="Frequently Asked Questions"
                        subhead="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
                    >
                        <Gallery
                            action={
                                <ButtonLink variant="grey" to="">
                                    View all FAQ`s
                                </ButtonLink>
                            }
                            items={faqs.map((faq) => (
                                <FAQCard
                                    key={faq.id}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        />
                    </Section>
                </Container>
            </section>
        </main>
    );
}
