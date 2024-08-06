import React, { useState } from 'react';
import { useAddUserMutation } from '../features/user/usersApi';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [addUser, { isLoading, error }] = useAddUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser({ username, address, email, password, image }).unwrap();
      alert('User added successfully');
      setUsername('');
      setAddress('');
      setEmail('');
      setPassword('');
      setImage('');
    } catch (error) {
      console.error('Failed to add user:', error);
      alert('Error adding user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Name</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Image</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <button type="submit" disabled={isLoading}>Add User</button>
      {error && <div>Error adding user.</div>}
    </form>
  );
};

export default UserForm;
