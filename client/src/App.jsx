import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar.jsx";
import Home from "../src/pages/Home.jsx";
import Register from "../src/pages/Register.jsx";
import Login from "../src/pages/Login.jsx";
import Dashboard from './pages/Dashboard.jsx';
import axios from 'axios';
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from '../context/userContext';

axios.defaults.baseURL = "https://mern-login-register-api.vercel.app";
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{ duration: 2000}} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
