import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import EditUser from './components/EditUser';
import './App.css';

function App() {
  const [view, setView] = React.useState('view');
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    if (path === '/') {
      setView('view');
    } else if (path === '/add') {
      setView('add');
    } else if (path.startsWith('/edit/')) {
      setView('edit');
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar setView={handleNavigation} />
        <main>
          <Routes>
            <Route path="/" element={<UserTable />} />
            <Route path="/add" element={<UserForm />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
