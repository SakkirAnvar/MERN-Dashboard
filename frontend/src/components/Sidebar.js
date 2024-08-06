import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <button onClick={() => navigate('/')}>View Details</button>
      <button onClick={() => navigate('/add')}>Add User</button>
    </div>
  );
};

export default Sidebar;
