import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Sidebar from './components/Sidebar';
import Explore from './pages/Explore/Explore';
import Reels from './pages/Reels/Reels';
import Messages from './pages/Messages/Messages';
import Profile from './pages/Profile/Profile';
import UsersProfiles from './pages/UsersProfiles/UsersProfiles';
import Topbar from './components/Topbar';


function App() {

  const navigate = useNavigate()
  const location = useLocation()
  const hideSidebar = location.pathname === "/login"
  const hideTopbar = location.pathname.startsWith("/profile") || location.pathname.startsWith("/login");

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
        {!hideTopbar && <Topbar />}
        {!hideSidebar && <Sidebar />}
        <Routes>
          <Route path='/' element={<Home />} className="home-index" />
          <Route path='/login' element={<Login />}/>
          <Route path='/explore' element={<Explore />} />
          <Route path='/reels' element={<Reels />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/profile' exact element={<Profile />} />
          <Route path='/profile/:username' element={<UsersProfiles/>} />
        </Routes>
    </div>
  );
}

export default App;
