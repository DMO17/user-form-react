import { useState } from "react";
import { AddUser } from "../components/AddUser";
import { UserCards } from "../components/UserCards";
import { userList } from "../data/users";

export const UserApp = () => {
  const [userData, setUserData] = useState(userList);
  return (
    <div>
      <AddUser setUserData={setUserData} />
      <UserCards users={userData} />
    </div>
  );
};
