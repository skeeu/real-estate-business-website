import { Container } from "../ui/container";
import { ButtonLink } from "../ui/button-link";
import { Input } from "../ui/input";

import { LuMailPlus } from "react-icons/lu";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./footer.css";

interface FooterProps {}

const footerNavigation = [
    {
        label: "Home",
        to: "",
        children: [
            { label: "hero section", to: "" },
            { label: "features", to: "" },
            { label: "properties", to: "" },
            { label: "testimonials", to: "" },
            { label: "FAQ`s", to: "" },
        ],
    },
    {
        label: "About Us",
        to: "",
        children: [
            { label: "our story", to: "" },
            { label: "our works", to: "" },
            { label: "how it works", to: "" },
            { label: "our team", to: "" },
            { label: "our clients", to: "" },
        ],
    },
    {
        label: "properties",
        to: "",
        children: [
            { label: "portfolio", to: "" },
            { label: "categories", to: "" },
        ],
    },
    {
        label: "services",
        to: "",
        children: [
            { label: "Valuation Mastery", to: "" },
            { label: "Strategic Marketing", to: "" },
            { label: "Negotiation Wizardry", to: "" },
            { label: "Closing Success", to: "" },
            { label: "Property Management", to: "" },
        ],
    },
    {
        label: "contact Us",
        to: "",
        children: [
            { label: "contact form", to: "" },
            { label: "our offices", to: "" },
        ],
    },
];

const socials = [
    { key: "facebook", icon: FaFacebookF },
    { key: "linkedin", icon: FaLinkedin },
    { key: "twitter", icon: FaTwitter },
    { key: "youtube", icon: FaYoutube },
];

export function Footer({}: FooterProps) {
    return (
        <footer>
            <div className="relative before:block before:h-full before:w-full before:left-0 before:top-0 before:absolute before:content-[''] before:bg-[url('/footer-top-tiles.svg')] before:bg-no-repeat before:z-[1] after:block after:h-full after:w-full after:right-0 after:bottom-0 after:absolute after:content-[''] after:bg-[url('/footer-bot-tiles.svg')] after:bg-right-bottom after:bg-no-repeat after:z-[1]">
                <Container>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[30px] py-[30px] relative z-[2]">
                        <div className="flex flex-col gap-1.5 md:flex-grow md:max-w-[70%]">
                            <h3 className="text-white font-semibold capitalize text-3xl">
                                Start Your Real Estate Journey Today
                            </h3>
                            <p className="text-grey-60 text-sm">
                                Your dream property is just a click away.
                                Whether you're looking for a new home, a
                                strategic investment, or expert real estate
                                advice, Estatein is here to assist you every
                                step of the way. Take the first step towards
                                your real estate goals and explore our available
                                properties or get in touch with our team for
                                personalized assistance.
                            </p>
                        </div>
                        <ButtonLink to="">Explore Properties</ButtonLink>
                    </div>
                </Container>
            </div>
            <div className="py-[50px]">
                <Container>
                    <div className="flex flex-col md:flex-row md:justify-between gap-[50px] ">
                        <div className="flex flex-col gap-5">
                            <img src="/logo-desktop.svg" className="w-1/3" />
                            <Input
                                placeholder="Enter Your Email"
                                before={<LuMailPlus size={20} />}
                                after={<IoIosSend fill="white" size={28} />}
                            />
                        </div>
                        <div className="footerNavContainer">
                            {footerNavigation.map((nav) => {
                                return (
                                    <div key={nav.label}>
                                        <div className="flex flex-col gap-4 pb-5">
                                            <Link
                                                to={nav.to}
                                                className="text-grey-60 font-medium text-base leading-6 capitalize"
                                            >
                                                {nav.label}
                                            </Link>
                                            <div className="flex flex-col gap-2">
                                                {nav.children.map(
                                                    (navChildren) => (
                                                        <Link
                                                            to={navChildren.to}
                                                            key={
                                                                navChildren.label
                                                            }
                                                            className="font-medium text-sm leading-6 capitalize"
                                                        >
                                                            {navChildren.label}
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-grey-10 py-5">
                <Container>
                    <div className="flex flex-col md:flex-row-reverse md:justify-between gap-5">
                        <div className="flex gap-2 items-center justify-center">
                            {socials.map((social) => (
                                <div
                                    key={social.key}
                                    className="bg-grey-08 p-5 rounded-full"
                                >
                                    {<social.icon size={20} />}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-5">
                            <p className="capitalize">
                                @{new Date().getFullYear()} Estatein. All Rights
                                Reserved.
                            </p>
                            <Link to="" className="capitalize">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
