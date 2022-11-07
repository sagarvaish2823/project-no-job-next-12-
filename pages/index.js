import React, { Fragment } from "react";
import GalleryShop from "../components/GalleryShop";
import Layout from "../components/Layout";
function Home() {

  return (

    <Fragment>
      <Layout title="Shop "></Layout>
      <section>
        <GalleryShop />
      </section>
    </Fragment>
  );
}

export default Home;