import { FC, useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import { useParams } from "react-router-dom";

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      <p>{user?.address.city}, {user?.address.street}</p>
    </div>
  );
};

export default UserItemPage;
