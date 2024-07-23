import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { Container } from "../ui/container";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

interface HeaderProps {}

const navLinks = [
    { to: "/", label: "home" },
    { to: "/about-us", label: "about us" },
    { to: "/properties", label: "properties" },
    { to: "/services", label: "services" },
    { to: "/contact-us", label: "contact us" },
];

export function Header({}: HeaderProps) {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        closeMenu();
    }, [location]);

    return (
        <>
            <header className="py-5 bg-grey-10 sticky top-0 z-50">
                <Container>
                    <div className="flex justify-between items-center">
                        <img src="/logo-mobile.svg" />
                        <button onClick={openMenu}>
                            <HiOutlineMenuAlt3 size={28} />
                        </button>
                    </div>
                </Container>
            </header>
            {isMenuOpen &&
                createPortal(
                    <div className="fixed top-0 w-full h-lvh py-5 z-50 bg-grey-10">
                        <Container>
                            <div className="flex flex-col gap-5">
                                <div className="flex justify-between items-center">
                                    <img
                                        src="/logo-mobile.svg"
                                        loading="eager"
                                    />
                                    <button onClick={closeMenu}>
                                        <IoMdClose size={28} />
                                    </button>
                                </div>
                                <nav className="flex justify-center">
                                    <ul className="flex flex-col">
                                        {navLinks.map((nav) => (
                                            <li
                                                key={nav.label}
                                                className="block"
                                            >
                                                <NavLink
                                                    to={nav.to}
                                                    className={({
                                                        isActive,
                                                    }) => {
                                                        const baseStyles =
                                                            "capitalize text-sm px-5 py-4 block text-center rounded-app";
                                                        return clsx(
                                                            baseStyles,
                                                            isActive &&
                                                                "bg-grey-08 border border-grey-15"
                                                        );
                                                    }}
                                                >
                                                    {nav.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </Container>
                    </div>,
                    document.body
                )}
        </>
    );
}
