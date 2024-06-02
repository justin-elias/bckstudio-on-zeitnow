/*
 * Copyright (c) 2020. Bozeman Community Kiln
 */

import React, { useEffect, useState } from "react";
import Router from "next/router";
import ReactDOM from "react-dom";
import Head from "next/head";
import "../assets/scss/nextjs-material-kit.scss?v=1.0.0";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../assets/theme";
import PageChange from "../components/PageChange/PageChange";
import * as Sentry from "@sentry/node"
import { BckAppProps } from "../index";

if (process.env.NODE_ENV === "production") {
    Sentry.init({dsn: process.env.NEXT_PUBLIC_SENTRY_DSN});
}

Router.events.on("routeChangeStart", (url) => {
    document.body.classList.add("body-page-transition");
    ReactDOM.render(
        <PageChange path={url} />,
        document.getElementById("page-transition")
    );
});

Router.events.on("routeChangeComplete", () => {
    // @ts-ignore
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
    // @ts-ignore
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});

export default function App(props: BckAppProps) {
    const { Component, pageProps, err } = props;
    const [path, setPath] = useState()

    useEffect(() => {
        if(path !== window.location.pathname) {
            // @ts-ignore
            setPath(window.location.pathname);
        }
    })

    return (
      <React.Fragment>
          <Head>
            <link rel="icon" type="image/png" sizes="32x32" href={require("../../public/favicon-32x32.png")}/>
            <link rel="icon" type="image/png" sizes="16x16" href={require("../../public/favicon-16x16.png")}/>
              <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8"/>
              <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <title>Bozeman Community Kiln • BCKstudio.com</title>
              <link href="https://fonts.googleapis.com/css2?family=Asap:wght@600;700&family=Lato:ital,wght@0,400;0,700;1,400&family=Merriweather+Sans:wght@800&display=swap" rel="stylesheet"/>
              <link rel="mask-icon" href={require("../../public/safari-pinned-tab.svg")} color="#406d7f"/>
              <link rel="apple-touch-icon" sizes="180x180" href={require("../../public/apple-touch-icon.png")}/>

          </Head>
          <ThemeProvider theme={theme}>
              <Component {...pageProps} err={err} />
          </ThemeProvider>
      </React.Fragment>
    );
}
