import { Wrapper } from "../Wrapper";
import { Button } from "../Button";
import classes from "./style.module.css";

export const ErrorModal = ({ title, message }) => {
  return (
    <Wrapper className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.action}>
        <Button>Okay</Button>
      </footer>
    </Wrapper>
  );
};
