import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import './App.css';

function App() {
  const [view, setView] = React.useState('view');

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar setView={setView} />
        <main>
          {view === 'view' ? <UserTable /> : <UserForm />}
        </main>
      </div>
    </div>
  );
}

export default App;
