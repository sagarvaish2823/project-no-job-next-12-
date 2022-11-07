import React, { Fragment, useState } from "react";
import styles from "../ProductFilter/index.module.css";

function index() {

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

  };

  return (
    <Fragment>
      <div className={styles.container}>
        <p className={styles.filter} onClick={handleClick}>
          FILTER
        </p>
        <a>
          <p className={styles.sort}>Best selling</p>
        </a>
      </div>
      {/* show elements on click */}
      {isShown && (
        <div>
          <div className={styles.filter_dash}>
            <h1>Filters</h1>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default index;
