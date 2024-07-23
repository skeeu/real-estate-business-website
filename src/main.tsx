import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./error-page.tsx";
import { ContactPage } from "./routes/contact.tsx";
import { HomePage } from "./routes/home.tsx";
import { AboutUsPage } from "./routes/about-us.tsx";
import { PropertiesPage } from "./routes/properties.tsx";
import { ServicesPage } from "./routes/services.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "about-us",
                element: <AboutUsPage />,
            },
            {
                path: "contact-us",
                element: <ContactPage />,
            },
            {
                path: "properties",
                element: <PropertiesPage />,
            },
            {
                path: "services",
                element: <ServicesPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
