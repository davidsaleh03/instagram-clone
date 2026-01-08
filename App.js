import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


function App() {

  const navigate = useNavigate()

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
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
    </div>
  );
}

export default App;
