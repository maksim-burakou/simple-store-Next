import Image from "next/image";
import searchLogo from "../../../public/assets/loupe.png";

import styles from "../../../styles/Input.module.scss";

export const Input = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.icon}>
      <Image src={searchLogo} alt="search" layout="responsive" priority />
    </div>
    <input className={styles.input} {...props} />
  </div>
);
