import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchUsers = ({ userID }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://jsonplaceholder.typicode.com/users/${userID}`;
      const res = await axios.get(url);
      setUser(res.data);
    };
    fetchData();
  }, [userID]);

  if (!user) {
    return <div data-testid="loading">Loading...</div>;
  }
  return (
    <div data-testid="user">
      <h3 data-testid="user-name">{user.name}</h3>
      <p data-testid="user-username">Username: {user.username}</p>
      <p data-testid="user-email">Email: {user.email}</p>
    </div>
  );
};

export default FetchUsers;
