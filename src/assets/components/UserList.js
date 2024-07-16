// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import User from './User';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/user.json')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};

export default UserList;
