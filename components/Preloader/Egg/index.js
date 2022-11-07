import Image from 'next/image';
import React from 'react';
import EggImage from '../../../public/NavIcons/Egg.gif';
import styles from '../Egg/index.module.css';

const Egg = () => {
  return (
    <div className={styles.container}>
      <Image 
      src={EggImage}
      alt="Preloader"
      height="150"
      width="150"
      layout="intrinsic"
      objectFit="contain"
      />
    </div>
  )
}

export default Egg
