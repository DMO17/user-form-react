import React from "react";
// import { Wrapper } from "../Wrapper";
import { UserCard } from "./UserCard";

export const UserCards = ({ users }) => {
  return (
    <div>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};
