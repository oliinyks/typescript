import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps{
	user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
	return (
    <div style={{ padding: 15 }}>
      {user.id}. {user.name} lives in {user.address.city}, {user.address.street}{" "}
      str.
    </div>
  );
};

export default UserItem;