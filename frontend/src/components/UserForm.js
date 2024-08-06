import React, { useState } from 'react';
import { useAddUserMutation } from '../features/user/usersApi';
 

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [addUser] = useAddUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser({ username, address, email, password, image });
    // Reset form
    setUsername('');
    setAddress('');
    setEmail('');
    setPassword('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='userform'>
        <label>User Name</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Address</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} required />
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
        <input value={image} onChange={(e) => setImage(e.target.value)} required />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
