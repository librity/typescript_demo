import React from "react";

interface IUser {
  id: number;
  name: string;
  email?: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user, children }) => {
  return (
    <div>
      <strong>Name: </strong>
      {user.name} <br />
      <strong>E-mail: </strong>
      {user.email || "doesn't have an email"} <br />
      {children}
    </div>
  );
};

export default User;
