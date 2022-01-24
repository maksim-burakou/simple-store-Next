import "./styles.module.scss";

export const Grid = ({ children, ...otherProps }) => (
  <div className="grid" {...otherProps}>
    {children}
  </div>
);
