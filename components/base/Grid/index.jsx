import styles from "../../../styles/Grid.module.scss";

export const Grid = ({ children, ...otherProps }) => (
  <div className={styles.grid} {...otherProps}>
    {children}
  </div>
);
