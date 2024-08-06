import React from 'react';
import AddUserForm from './AddUserForm';
import UserTable from './UserTable';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <AddUserForm />
      <UserTable />
    </div>
  );
};

export default Dashboard;
