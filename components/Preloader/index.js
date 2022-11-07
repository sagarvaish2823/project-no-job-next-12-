import React from 'react';
import Image from "next/image";
import styles from './index.module.css'
import logo from '../../public/NavIcons/fav_logo.png'

const Preloader = () => {

    return ( <div className={styles.Preloader}>
            <Image
              className={styles.logo}
              src={logo}
              alt="logo"
              layout="intrinsic"
              objectFit="contain"
            />
        <h1 className={styles.brand}>Trrinket</h1>
    </div>)
}

export default Preloader;