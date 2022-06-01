import React from "react";
// import { Wrapper } from "../Wrapper";

import { UserCard } from "./UserCard";

export const UserCards = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <UserCard {...user} key={index} />
      ))}
    </div>
  );
};
