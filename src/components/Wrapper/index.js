import classes from "./style.module.css";

export const Wrapper = (props) => {
  return (
    <div className={`${classes.wrapper} ${props.className}`}>
      {props.children}
    </div>
  );
};
