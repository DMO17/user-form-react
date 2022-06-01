import { Wrapper } from "../Wrapper";
import classes from "./style.module.css";

export const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Wrapper className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="fullName">Full Name</label>
        <input id="fullName" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Wrapper>
  );
};
