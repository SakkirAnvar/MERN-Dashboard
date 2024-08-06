import React from 'react';
import { useFetchUsersQuery, useDeleteUserMutation } from '../features/user/usersApi';
import { useNavigate } from 'react-router-dom';

const UserTable = () => {
  const { data: users, error, isLoading } = useFetchUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();

  const handleEdit = (user) => {
    navigate(`/edit/${user._id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id).unwrap();
      alert('User deleted successfully');
    } catch (error) {
      console.error('Failed to delete user:', error);
      alert('Error deleting user');
    }
  };

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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.username}</td>
            <td>{user.address}</td>
            <td>{user.email}</td>
            <td>
              <img src={user.image} alt={user.username} />
            </td>
            <td>
              <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
