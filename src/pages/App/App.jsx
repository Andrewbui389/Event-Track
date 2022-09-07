import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/Navbar/NavBar';
import MainPage from '../MainPage/MainPage';
import NewEventPage from '../NewEventPage/NewEventPage';
import GuestInvitePage from '../GuestInvitePage/GuestInvitePage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [guest, setGuest] = useState(false)
  function handleGuest(value){
    setGuest(value)
    console.log(guest)
  }
  return (
    <main className="App">
      { user ?
        <>
        <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<MainPage />} />
            <Route path='/newevent' element={<NewEventPage />} />
          </Routes>
        </>
        :
        <>
        {
          guest 
          ? 
          <Routes>
            <Route path='/guestpass/:id' element={<GuestInvitePage runCode={setGuest(true)} />}/>
          </Routes>
          :
          <AuthPage setUser={setUser} />
        }
        </>
        
    
        
      }
    </main>
  );
}
