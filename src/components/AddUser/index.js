import { useState } from "react";
import { Button } from "../Button";
import { ErrorModal } from "../ErrorModal";
import { Wrapper } from "../Wrapper";
import classes from "./style.module.css";

export const AddUser = ({ setUserData }) => {
  const defaultImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYeGjH5-vv2_YdwGNoZTtzZfaryVK3z3myn4Rg-mC-JcQPyLg96GnNZ7C5IAyVjm_AgEU&usqp=CAU";

  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredBio, setEnteredBio] = useState("N/A");
  const [enteredProfileImg, setEnteredProfileImg] = useState(defaultImg);
  const [error, setError] = useState({});
  const [showModal, setShowModal] = useState(false);

  const fullNameInputHandler = (event) =>
    setEnteredFullName(event.target.value);
  const ageInputHandler = (event) => setEnteredAge(event.target.value);
  const bioInputHandler = (event) => setEnteredBio(event.target.value);
  const profileImgInputHandler = (event) =>
    setEnteredProfileImg(event.target.value);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredAge.trim().length === 0 || enteredFullName.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });

      setShowModal(true);

      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });

      setShowModal(true);

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

    setEnteredAge("");
    setEnteredFullName("");
    setEnteredBio("");
    setEnteredProfileImg("");
  };

  return (
    <div>
      {showModal && <ErrorModal {...error} setShowModal={setShowModal} />}
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
    </div>
  );
};
