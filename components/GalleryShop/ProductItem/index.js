import React, { Fragment, useState } from "react";
import styles from "../../GalleryShop/index.module.css";
import Link from "next/link";
import Image from "next/image";
import addToCart from "../../../public/NavIcons/add-to-cart.png";

export default function ProductItem({ product }) {
  const [showCart, setShowCart] = useState(addToCart);

  const buttonVisibleHandler = () => {
    setShowCart(!showCart);
  };
  const buttonDisapperHandler = () => {
    setShowCart(!showCart);
  };

  // const addToCartButton = (
  //   <div className={styles.addToCart}>
  //     <Image
  //       src={addToCart}
  //       layout="fill"
  //       objectFit="cover"
  //       loading="lazy"
  //       // priority="true"
  //     />
  //   </div>
  // );

  return (
    <Fragment>
      <div
        className={styles.product_container}
        onMouseEnter={buttonVisibleHandler}
        onMouseLeave={buttonDisapperHandler}
      >
        <div>
          <Link href={`/product/${product.id}`}>
            <div className={styles.products_image}>
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                // loading="eager"
                priority="true"
              />
            </div>
          </Link>
        </div>
        <div className={styles.detail}>
          <div className={styles.detailLink}>
            <Link href={`/product/${product.id}`}>
              <a className={styles.title}>{product.name}</a>
            </Link>
            <br />
            <Link href={`/product/${product.id}`}>
              <a className={styles.price}> ₹{product.price}</a>
            </Link>
            <br />
            <Link href={`/product/${product.id}`}>
              <a className={styles.rating}>{product.stars}</a>
            </Link>
          </div>
          {!showCart ? (
            <div className={styles.addToCart}>
              <Image
                src={addToCart}
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}
