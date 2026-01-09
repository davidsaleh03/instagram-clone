import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Sidebar from './components/Sidebar';


function App() {

  const navigate = useNavigate()
  const location = useLocation()
  const hideSidebar = location.pathname === "/login"

  useEffect(() =>{
    onAuthStateChanged(auth, async (user)=> {
      if(user) {
        navigate('/')
      }
      else {
        navigate('/login')
      }
    })
  }, [])

  return (
    <div className="App">
        {!hideSidebar && <Sidebar />}
        <Routes>
          <Route path='/' element={<Home />} className="home-index" />
          <Route path='/login' element={<Login />}/>
        </Routes>
    </div>
  );
}

export default App;
