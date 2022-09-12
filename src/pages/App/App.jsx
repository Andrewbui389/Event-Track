import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/Navbar/NavBar';
import MainPage from '../MainPage/MainPage';
import NewEventPage from '../NewEventPage/NewEventPage';
import GuestInvitePage from '../GuestInvitePage/GuestInvitePage';
import EventDetailsPage from '../EventDetailsPage/EventDetailsPage';
import LeftSideNav from '../../components/LeftSideNav/LeftSideNav';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [indivudalPage, setindivudalPage] = useState(false)
  const [leftSideItems, setLeftSideItems] = useState([])
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
        <div className='centerofpage'>
        <LeftSideNav leftSideItems={leftSideItems}/> 
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<MainPage setLeftSideItems={setLeftSideItems}/>} />
            <Route path='/newevent' element={<NewEventPage />} />
            <Route path='/event/details/:eventId' element={<EventDetailsPage setLeftSideItems={setLeftSideItems} />} />
          </Routes>
        </div>
        </>
        :
        indivudalPage ?  '' : <AuthPage setUser={setUser} />
    }
    </main>
  );
}
