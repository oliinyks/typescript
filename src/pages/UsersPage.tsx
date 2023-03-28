import { FC, useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import List from "../components/List";
import UserItem from "../components/UserItem";

const UsersPage: FC = () => {
  const [users, setUser] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

	return (
      <List
        items={users}
			renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
  );
};

export default UsersPage;
