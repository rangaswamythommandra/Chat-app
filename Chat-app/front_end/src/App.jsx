
import {useEffect,useState} from 'react';
import Navbar from './components/Navbar'; 
import { BrowserRouter as Router, Routes, Route,Navigate, useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './components/Register';
import Chatlist from './components/Chatlist';
import Chat from './components/Chat';
import axios from 'axios';


const App=()=> {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const fetchUsers = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/chat/users`);
          const filteredUsers = response.data.filter(u => u.id !== user.id);
          setUsers(filteredUsers);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };

      fetchUsers();
    }
  }, [user]);

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };
  return (
    <>
      <div>
      <Navbar isAuthenticated={!!user} handleLogout={handleLogout} />

      </div>
      <div>
        <Routes>
          <Route path="/" element={!user? <Login setUser={setUser} /> : <Navigate to="/chat" />} />
           <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chatlist users={users} setSelectedUser={setSelectedUser} /> }/>
          <Route path="/chat/:id" element={<Chat user={user} selectedUser={selectedUser} />}/>

        </Routes>
      </div>
    </>
  )
}

export default App;