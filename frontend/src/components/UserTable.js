import React from 'react';
import { useFetchUsersQuery } from '../features/user/usersApi';

const UserTable = () => {
  const { data: users, error, isLoading } = useFetchUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users.</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>User Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.address}</td>
            <td>{user.email}</td>
            <td><img src={user.image} alt={user.username} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
