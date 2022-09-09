import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/Navbar/NavBar';
import MainPage from '../MainPage/MainPage';
import NewEventPage from '../NewEventPage/NewEventPage';
import GuestInvitePage from '../GuestInvitePage/GuestInvitePage';
import EventDetailsPage from '../EventDetailsPage/EventDetailsPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [indivudalPage, setindivudalPage] = useState(false)
  function changPageStat(value){
    setindivudalPage(value)
  }
  return (
    <main className="App">

    <Routes>
      <Route path='/guestpass/:eventId/:guestId' element={<GuestInvitePage changPageStat={changPageStat} />}/>
    </Routes>
      
    {
    user && !indivudalPage ?
        <>
        <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<MainPage />} />
            <Route path='/newevent' element={<NewEventPage />} />
            <Route path='/event/details/:eventId' element={<EventDetailsPage />} />
          </Routes>
        </>
        :
        indivudalPage ?  '' : <AuthPage setUser={setUser} />
    }
    </main>
  );
}
