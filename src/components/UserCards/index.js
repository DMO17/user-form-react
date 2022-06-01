import React from "react";
// import { Wrapper } from "../Wrapper";
import { UserCard } from "./UserCard";

export const UserCards = () => {
  const users = [
    {
      fullName: "Scott Parker",
      age: 22,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      imgProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYeGjH5-vv2_YdwGNoZTtzZfaryVK3z3myn4Rg-mC-JcQPyLg96GnNZ7C5IAyVjm_AgEU&usqp=CAU",
    },
    {
      fullName: "Scott Parker",
      age: 22,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      imgProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYeGjH5-vv2_YdwGNoZTtzZfaryVK3z3myn4Rg-mC-JcQPyLg96GnNZ7C5IAyVjm_AgEU&usqp=CAU",
    },
    {
      fullName: "Scott Parker",
      age: 22,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      imgProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYeGjH5-vv2_YdwGNoZTtzZfaryVK3z3myn4Rg-mC-JcQPyLg96GnNZ7C5IAyVjm_AgEU&usqp=CAU",
    },
    {
      fullName: "Scott Parker",
      age: 22,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      imgProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYeGjH5-vv2_YdwGNoZTtzZfaryVK3z3myn4Rg-mC-JcQPyLg96GnNZ7C5IAyVjm_AgEU&usqp=CAU",
    },
  ];
  return (
    <div>
      {users.map((user, index) => (
        <UserCard {...user} key={index} />
      ))}
    </div>
  );
};
