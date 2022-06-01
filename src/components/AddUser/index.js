import { useState } from "react";
import { Button } from "../Button";
import { Wrapper } from "../Wrapper";
import classes from "./style.module.css";

export const AddUser = ({ setUserData }) => {
  const defaultImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYeGjH5-vv2_YdwGNoZTtzZfaryVK3z3myn4Rg-mC-JcQPyLg96GnNZ7C5IAyVjm_AgEU&usqp=CAU";

  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredBio, setEnteredBio] = useState("N/A");
  const [enteredProfileImg, setEnteredProfileImg] = useState(defaultImg);

  const fullNameInputHandler = (event) =>
    setEnteredFullName(event.target.value);

  const ageInputHandler = (event) => setEnteredAge(event.target.value);
  const bioInputHandler = (event) => setEnteredBio(event.target.value);
  const profileImgInputHandler = (event) =>
    setEnteredProfileImg(event.target.value);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredAge.trim().length === 0 || enteredFullName.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }
    setUserData((prevState) => [
      {
        fullName: enteredFullName,
        age: enteredAge,
        bio: enteredBio,
        imgProfile: enteredProfileImg,
      },
      ...prevState,
    ]);
    console.log(enteredFullName, enteredAge);
    setEnteredAge("");
    setEnteredFullName("");
    setEnteredBio("");
    setEnteredProfileImg("");
  };

  return (
    <Wrapper className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={enteredFullName}
          onChange={fullNameInputHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageInputHandler}
        />

        <label htmlFor="bio">Bio (optional)</label>
        <input
          id="bio"
          type="text"
          // value={enteredBio}
          onChange={bioInputHandler}
        />

        <label htmlFor="profileImg">Profile URL (optional)</label>
        <input
          id="profileImg"
          type="text"
          // value={enteredProfileImg}
          onChange={profileImgInputHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Wrapper>
  );
};
