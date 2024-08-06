import React from 'react';
import { useFetchUsersQuery } from '../features/user/usersApi';

function ViewDetails() {
  const { data: users, error, isLoading } = useFetchUsersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="view-details">
      <h2>User Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
              <td><img src={user.image} alt={user.name} style={{ width: '50px', height: '0px' }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewDetails;
