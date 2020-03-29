import React, { useEffect, useState } from "react";

import api from "./services/api";
import User from "./components/User";

interface IUser {
  id: number;
  name: string;
  email?: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>("/users").then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="App">
      {users.length > 0 &&
        users.map(user => (
          <User key={user.id} user={user}>
            <br /> I'm a child component! <br />
          </User>
        ))}
    </div>
  );
}

export default App;
