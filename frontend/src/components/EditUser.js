// src/components/EditUser.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUpdateUserMutation, useFetchUsersQuery } from '../features/user/usersApi';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: users, isLoading, error } = useFetchUsersQuery();
  const [updateUser] = useUpdateUserMutation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (users && id) {
      const userToEdit = users.find(user => user._id === id);
      setUser(userToEdit);
    }
  }, [users, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await updateUser(user).unwrap();
        navigate('/');
      } catch (error) {
        console.error('Failed to update user:', error);
      }
    } else {
      console.error('User data is missing.');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user data.</div>;
  if (!user) return <div>No user found.</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={user.image}
          onChange={(e) => setUser({ ...user, image: e.target.value })}
        />
      </label>
      <button type="submit">Update User</button>
    </form>
  );
};

export default EditUser;
