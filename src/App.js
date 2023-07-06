import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Body } from './components/Body';
import { About } from './components/About';
import { Outlet, createBrowserRouter } from "react-router-dom";


const AppLayout = () =>{
    return(
        <>
            <div className="app">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [{
            path: '/about',
            element: <About />
        },
        {
            path: '/',
            element: <Body />
        },
        ]
    },
]);



