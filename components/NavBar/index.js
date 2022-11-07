import React, { useState, Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../navbar/index.module.css";
import nav_logo from "../../public/NavIcons/fav_logo.png";
import account_outline from "../../public/NavIcons/account-outline.png";
import account_fill from "../../public//NavIcons/account-fill.png";
import bag_outline from "../../public//NavIcons/bag-outline.png";
import bag_fill from "../../public//NavIcons/bag-fill.png";
import home_outline from "../../public//NavIcons/home-outline.png";
import home_fill from "../../public//NavIcons/home-fill.png";
import wishlist_outline from "../../public//NavIcons/wishlist-outline.png";
import wishlist_fill from "../../public//NavIcons/wishlist-fill.png";
import search from "../../public//NavIcons/search.png";
import Preloader from "../Preloader";
function navbar() {
  //Change on hover for account
  const [accountHoverChanger, setaccountHoverChanger] =
    useState(account_outline);
  const handleMouseEnterAccount = () => {
    let imageSwapper = account_fill;
    setaccountHoverChanger(imageSwapper);
  };
  const handleMouseLeaveAccount = () => {
    let imageSwapper = account_outline;
    setaccountHoverChanger(imageSwapper);
  };
  //  Change on hover for bag
  const [bagHoverChanger, setbagHoverChanger] = useState(bag_outline);
  const handleMouseEnterBag = () => {
    let bagSwapper = bag_fill;
    setbagHoverChanger(bagSwapper);
  };
  const handleMouseLeaveBag = () => {
    let bagSwapper = bag_outline;
    setbagHoverChanger(bagSwapper);
  };
  // Active Link (not in use)
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return { account_fill };
    } else {
      return { account_outline };
    }
  };
  // const router = useRouter();

  return (
    <Fragment>
      <nav className={styles.navBar}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <a>
              <Image
                className={styles.logo}
                id="logo"
                src={nav_logo}
                alt="logo"
                width="150"
                height="150"
                layout="intrinsic"
              />
            </a>
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.Links}>
            <Link href="/">
              <a>
                <h1 className={styles.linkname}>Shop</h1>
              </a>
            </Link>
          </li>
          <li className={styles.Links}>
            <Link href="/About">
              <a>
                <h1 className={styles.linkname}>About Us</h1>
              </a>
            </Link>
          </li>
          <li className={styles.Links}>
            <Link href="/Contact">
              <a>
                <h1 className={styles.linkname}>Contact Us</h1>
              </a>
            </Link>
          </li>
        </ul>
        <ul className={styles.icons}>
          <li className={styles.search}>
            <Link href="Search">
              <a>
                <Image
                  src={search}
                  alt="cart"
                  height="40"
                  width="40"
                  // onMouseEnter={handleMouseEnterBag}
                  // onMouseLeave={handleMouseLeaveBag}
                />
              </a>
            </Link>
          </li>
          <li className={styles.account}>
            <Link href="/Account">
              <a>
                <Image
                  src={accountHoverChanger}
                  alt="cart"
                  height="40"
                  width="40"
                  onMouseEnter={handleMouseEnterAccount}
                  onMouseLeave={handleMouseLeaveAccount}
                />
              </a>
            </Link>
          </li>
          <li className={styles.cart}>
            <Link href="Cart">
              <a>
                <Image
                  src={bagHoverChanger}
                  alt="cart"
                  height="40"
                  width="40"
                  onMouseEnter={handleMouseEnterBag}
                  onMouseLeave={handleMouseLeaveBag}
                />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      {/* THIS SECTION IS FOR SMARTPHONE */}
      <section className={styles.navBar_sP}>
        <ul className={styles.icons_sP}>
          <li className={styles.home_sP}>
            <Link href="/">
              <a>
                <Image src={home_outline} alt="home" height="40" width="40" />
              </a>
            </Link>
          </li>
          <li className={styles.account_sP}>
            <Link href="/Account">
              <a>
                <Image
                  src={account_outline}
                  alt="account"
                  height="40"
                  width="40"
                />
              </a>
            </Link>
          </li>
          <li className={styles.wishlist_sP}>
            <Link href="/WishList">
              <a>
                <Image
                  src={wishlist_outline}
                  alt="wishlist"
                  height="40"
                  width="40"
                />
              </a>
            </Link>
          </li>
          <li className={styles.cart_sP}>
            <Link href="/Cart">
              <a>
                <Image src={bag_outline} alt="cart" height="40" width="40" />
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </Fragment>
  );
}
export default navbar;
