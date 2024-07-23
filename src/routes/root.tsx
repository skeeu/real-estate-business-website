import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";

export default function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
