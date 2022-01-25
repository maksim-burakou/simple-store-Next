import styles from "../../../styles/Container.module.scss";

export const Container = (props) => (
  <div className={styles.container}>{props.children}</div>
);
