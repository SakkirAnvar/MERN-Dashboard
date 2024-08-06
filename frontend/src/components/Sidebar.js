import React from 'react';

const Sidebar = ({ setView }) => {
  return (
    <div className="sidebar">
      <button onClick={() => setView('add')}>Add User</button>
      <button onClick={() => setView('view')}>View Details</button>
    </div>
  );
};

export default Sidebar;
