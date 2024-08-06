import React, { useState } from 'react';
import { useAddUserMutation } from '../features/user/userSlice';


const AddUserForm = () => {
  const [addUser] = useAddUserMutation();
  const [formData, setFormData] = useState({
    username: '',
    address: '',
    email: '',
    password: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(formData);
    setFormData({
      username: '',
      address: '',
      email: '',
      password: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
