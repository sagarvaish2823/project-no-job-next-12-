import React, { Fragment, useEffect, useState } from "react";
import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Preloader from "../components/Preloader";
import Egg from "../components/Preloader/Egg";
import Footer from "../components/Footer";
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  return (
        <Fragment>
          <Head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
            />
          </Head>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </Fragment>
  );
}

export default MyApp;
