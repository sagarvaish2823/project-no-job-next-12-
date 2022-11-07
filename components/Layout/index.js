import Head from "next/head";
import React, { Children } from "react";
import Footer from "../Footer";

const Layout = ({ title, Children }) => {
  return (
    <React.Fragment>
      <header>
        <Head>
          <title>{title ? title + "- Trrinket" : "Trrinket"}</title>
          <meta
            name="description"
            content="Trrinket is your next stop for artificial jewellery. Here you can find elegant and beautiful jewellery at best prices."
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/FavIcon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/FavIcon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/FavIcon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/FavIcon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/FavIcon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/FavIcon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/FavIcon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/FavIcon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/FavIcon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/FavIcon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/FavIcon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/FavIcon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/FavIcon/favicon-16x16.png"
          />
          <link rel="manifest" href="/FavIcon/manifest.json" />
          <meta />
        </Head>
      </header>
      <main>{Children}</main>
    </React.Fragment>
  );
};

export default Layout;
