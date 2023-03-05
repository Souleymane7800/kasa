import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Header from "../components/Header/Header";
import Footer from "../layout/Footer/Footer";
import Main from "../layout/Main/Main";

const HeaderFooterLayout = () => {
      return <>
            <Header />
            <Main>
                  <Outlet />
            </Main>
            <Footer />
      </>
}

export const router = createBrowserRouter([
      {
            element: <HeaderFooterLayout />,
            errorElement: <h1>404 not found</h1>,
            children: [
                 {
                       path: "/",
                       element: <App />
                 },
                 {
                   path: "/flat",
                   element: <h1>Nos appartements</h1>
                 },
                 {
                   path: "/about",
                   element: <h1>A propos</h1>
                 }
            ]
      },
])