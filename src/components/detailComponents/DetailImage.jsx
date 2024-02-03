import React from "react";
import styles from "./Details.module.css";

const DetailImage = ({ image, title }) => {
//   const backgroundString = `--background: url(${image})`
  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`
      }}
    // style={{backgroundString}}
    >
      <div className={styles.ad_text}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default DetailImage;