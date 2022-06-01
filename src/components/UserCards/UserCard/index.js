import classes from "./style.module.css";

export const UserCard = ({ fullName, age, bio, imgProfile }) => {
  return (
    <div className={classes.flexContainer}>
      <div>
        <img src={imgProfile} alt="user Img" />
      </div>
      <div>
        <ul>
          <li> Full Name: {fullName}</li>
          <li> Age: {age}</li>
          <li>Bio: {bio}</li>
        </ul>
      </div>
    </div>
  );
};
