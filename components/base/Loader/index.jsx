import styles from "../../../styles/Loader.module.scss";

export const Loader = (props) => (
  <div className={styles.container} {...props}>
    <div className={styles.loader}></div>
  </div>
);
