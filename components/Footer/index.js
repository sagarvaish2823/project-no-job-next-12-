import Image from "next/image";
import React, { Fragment, useState } from "react";
import styles from "../Footer/index.module.css";
import Link from "next/link";
import title from "../../public/NavIcons/trrinket.png";
import facebookOutline from "../../public/NavIcons/facebook-outline.png";
import instagramOutline from "../../public/NavIcons/instagram-outline.png";
import pinterestOutline from "../../public/NavIcons/pinterest-outline.png";

function Footer () {

  return (
    <Fragment>
      <div className={styles.container}>
        <Link href="/">
          {/* <a> */}
          {/* <p className={styles.footer_trrinket}>TRRINKET</p> */}
          {/* </a> */}
          <div className={styles.title}>
            <Image
              src={title}
              alt="title"
              layout="fill"
              objectFit="cover"
              loading="eager"
              priority="true"
            />
          </div>
        </Link>
      </div>
      <div className={styles.head_container}>
        <div>
          <h2 className={styles.head}>PAGES</h2>
          <Link href="/">
            <a>
              <p className={styles.footerLinks}>Shop</p>
            </a>
          </Link>
          <Link href="/About">
            <a>
              <p className={styles.footerLinks}>About Us</p>
            </a>
          </Link>
          <Link href="/Contact">
            <a>
              <p className={styles.footerLinks}>Contact Us</p>
            </a>
          </Link>
          <Link href="/Account">
            <a>
              <p className={styles.footerLinks}>Account</p>
            </a>
          </Link>
        </div>
        <div className={styles.imp}>
          <h2 className={styles.head}>IMPORTANT</h2>
          <div>
            <Link href="/Terms&Conditions">
              <a>
                <p className={styles.footerLinks}>Terms & Conditions</p>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/Shipping">
              <a>
                <p className={styles.footerLinks}>Shipping Policy</p>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/Refund&Return">
              <a>
                <p className={styles.footerLinks}>Refund & Return Policy</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <p className={styles.stayConnected}>STAY CONNECTED WITH US</p>
      <div className={styles.mediaContainer}>
        <Link href="https://www.facebook.com/trrinket/">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaImages}
          >
            <Image
              src={facebookOutline}
              alt="facebook"
              layout="fill"
              objectFit="cover"
              // onMouseEnter={fbSwapperHandlerfill}
              // onMouseLeave={fbSwapperHandlerOutline}
            />
          </a>
        </Link>
        <Link href="https://instagram.com/trrinket_">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaImages}
          >
            <Image
              src={instagramOutline}
              alt="facebook"
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
        <Link href="https://in.pinterest.com/trrinket/">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaImages}
          >
            <Image
              src={pinterestOutline}
              alt="facebook"
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <div className={styles.rightsContainer}><p className={styles.rights}>Copyright &copy; 2022 Trrinket | All Rights Reserved |</p></div>
      <div className={styles.rightsContainerSp}><p className={styles.rightsSp}>Copyright &copy; 2022 <br/>Trrinket<br/> All Rights Reserved </p></div>
    </Fragment>
  );
};

export default Footer;
