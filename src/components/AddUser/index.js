import { useState } from "react";
import { Button } from "../Button";
import { Wrapper } from "../Wrapper";
import classes from "./style.module.css";

export const AddUser = () => {
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const fullNameInputHandler = (event) =>
    setEnteredFullName(event.target.value);
  const ageInputHandler = (event) => setEnteredAge(event.target.value);

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredFullName, enteredAge);
  };
  return (
    <Wrapper className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="fullName">Full Name</label>
        <input id="fullName" type="text" onChange={fullNameInputHandler} />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" onChange={ageInputHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Wrapper>
  );
};
