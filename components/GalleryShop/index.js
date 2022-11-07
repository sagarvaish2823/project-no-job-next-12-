import React, { Fragment } from "react";
import styles from "../GalleryShop/index.module.css";
import ProductFilter from "../ProductFilter";
import ProductItem from "./ProductItem";
import data from "../../utils/data.js";
import Image from "next/image";

const GalleryShop = () => (
  <Fragment>
    {/*add class and flex box in css for filter show/hide in horizontal space*/}
    {/* <div>     
      <section className={styles.wrapper_gallery}>
      <div className={styles.hero}>
      <div className={styles.container}>
      <div className={styles.container_product}>
              <Image
              src="/Product_Images/Aroll/3.jpg"
                layout="fill"
                objectFit="cover"
                loading="eager"
                priority="true"
              />
            </div>
            <div className={styles.container_product}>
              <Image
                src="/Product_Images/Aroll/3.jpg"
                layout="fill"
                objectFit="cover"
                loading="eager"
                priority="true"
                />
            </div>
            <div className={styles.container_product}>
              <Image
                src="/Product_Images/Aroll/3.jpg"
                layout="fill"
                objectFit="cover"
                loading="eager"
                priority="true"
              />
            </div>
            <div className={styles.container_product}>
            <Image
                src="/Product_Images/Aroll/3.jpg"
                layout="fill"
                objectFit="cover"
                loading="eager"
                priority="true"
              />
            </div>
            <div className={styles.container_product}>
            <Image
            src="/Product_Images/Aroll/3.jpg"
                layout="fill"
                objectFit="cover"
                loading="eager"
                priority="true"
              />
            </div>
            <div className={styles.container_product}>
            <Image
                src="/Product_Images/Aroll/3.jpg"
                layout="fill"
                objectFit="cover"
                loading="eager"
                priority="true"
              />
            </div>
            <div className={styles.container_product}>
              <Image
                src="/Product_Images/Aroll/3.jpg"
                layout="fill"
                objectFit="cover"
                loading="eager"
                priority="true"
              />
            </div>
            <div className={styles.container_product}>
              <Image
                src="/Product_Images/Aroll/3.jpg"
                layout="fill"
                objectFit="cover"
                loading="eager"
                priority="true"
                />
            </div>
            <div className={styles.container_product}>
              <Image
              src="/Product_Images/Aroll/3.jpg"
                layout="fill"
                objectFit="cover"
                loading="eager"
                priority="true"
              />
            </div>
            <div className={styles.container_product}>
              <Image
                src="/Product_Images/Aroll/3.jpg"
                layout="fill"
                objectFit="cover"
                loading="eager"
                priority="true"
              />
              </div>
              <div className={styles.container_product}>
              <Image
              src="/Product_Images/Aroll/3.jpg"
              layout="fill"
              objectFit="cover"
                loading="eager"
                priority="true"
              />
            </div>
            <div className={styles.container_product}>
              <Image
                src="/Product_Images/Aroll/3.jpg"
                layout="fill"
                objectFit="cover"
                loading="eager"
                priority="true"
              />
              </div>
          </div>
        </div>
      </section>
    </div> */}
    <ProductFilter />

    <section className={styles.wrapper_gallery}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.container_product}>
            {data.products.map((product) => (
              <ProductItem product={product} key={product.id}></ProductItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);

export default GalleryShop;
