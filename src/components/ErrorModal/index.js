import { Wrapper } from "../Wrapper";
import { Button } from "../Button";
import classes from "./style.module.css";

export const ErrorModal = ({ title, message, setShowModal }) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Wrapper className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={() => setShowModal(false)}>Okay</Button>
        </footer>
      </Wrapper>
    </div>
  );
};
