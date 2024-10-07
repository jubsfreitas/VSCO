// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootElement from "../components/root";
import { ThemeProvider } from "../contexts/theme";
import Inicio from "./inicio";
// import ErrorPage from "../components/errorPage/errorPage";
import ErrorPage from '../components/errorPage/errorPage'
// import Senha from "./senha";
// import Triagem from "./triagem";
// import PesoAltura from "./pesoealtura";
import RegisterPage from "./cadastro";
import LoginPage from "./login";
import Dashboard from "./dashboard";
import Tables from "./tabelas";
import ProfilePage from "./profile";
import ModalPerfil from "./profile/perfilModal";
// import Form from "../components/barraProgresso";


const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: 
    // },
    // {
    //     path: "/login",
    //     element: <LoginPage />,
    // },
    {
        path: "/",
        // element: <RootElement />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "register",
                element: <RegisterPage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "",
                element: <RootElement />,
                children: [
                    // {
                    //     path: "",
                    //     element: <ProfilePage />,
                    // },
                    {
                        path: "",
                        element: <Dashboard />
                    },
                    {
                        path: "tabelas",
                        element: <Tables />
                    },
                    {
                        path: "profile",
                        element: <ProfilePage />
                    },
                    // {
                    //     path: "editProfile",
                    //     element: <ModalPerfil />
                    // }
                ]
            }

        ],
    },
    // {
    //     path: "/login",
    //     element: <Senha />,
    // },
    // {
    //     path: "/triagem",
    //     element: <Triagem />,
    // },
    // {
    //     path: "/pesoaltura",
    //     element: <PesoAltura />,
    // }
]);

export default function Routers() {
    return (
        <ThemeProvider>
            <>
                <RouterProvider router={router} />
            </>
        </ThemeProvider>
    );
}