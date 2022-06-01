import classes from "./style.module.css";

export const UserCard = () => {
  return (
    <div className={classes.flexContainer}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYeGjH5-vv2_YdwGNoZTtzZfaryVK3z3myn4Rg-mC-JcQPyLg96GnNZ7C5IAyVjm_AgEU&usqp=CAU"
          alt="user Img"
        />
      </div>
      <div>
        <ul>
          <li> Full Name: Max Scott</li>
          <li> Age:23</li>
          <li>
            Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
