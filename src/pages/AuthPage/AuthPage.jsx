import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Auth.css'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <main className='auth-page'>
      <div className='align-div-items'>
        <button onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? 'Sign Up' : 'Log In'}
          </button>
          { showLogin ?
              <LoginForm setUser={setUser} />
              :
              <SignUpForm setUser={setUser} />
          }
      </div>
      <svg width="50vw" height="50vh" viewBox="0 0 103 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 1">
        <rect id="layer 1" width="103" height="78" rx="4" fill="#F8F4F4"/>
        <g id="2nd layer">
        <rect id="Rectangle 2" className="boxValue" x="9.08823" y="13.1566" width="86.8431" height="3.75904" rx="1" fill="#BFB7B7"/>
        <rect id="Rectangle 3" className="boxValue" x="9.08823" y="22.5542" width="86.8431" height="3.75904" rx="1" fill="#BFB7B7"/>
        <rect id="Rectangle 4" className="boxValue" x="9.08823" y="31.9518" width="86.8431" height="3.75904" rx="1" fill="#BFB7B7"/>
        <rect id="Rectangle 5" className="boxValue" x="9.08823" y="60.1446" width="86.8431" height="3.75904" rx="1" fill="#BFB7B7"/>
        <rect id="Rectangle 6" className="boxValue" x="9.08823" y="50.747" width="86.8431" height="3.75904" rx="1" fill="#BFB7B7"/>
        <rect id="Rectangle 7" className="boxValue" x="9.08823" y="41.3494" width="86.8431" height="3.75904" rx="1" fill="#BFB7B7"/>
        <rect id="Rectangle 8" className="boxValue" x="10.098" y="4.69879" width="49.4804" height="3.75904" rx="1" fill="#D9D9D9"/>
        <rect id="Rectangle 9" className="boxValue" x="88.8627" y="14.0964" width="5.04902" height="1.87952" rx="0.939759" fill="#89BA77"/>
        <rect id="Rectangle 10" className="boxValue" x="88.8627" y="32.8916" width="5.04902" height="1.87952" rx="0.939759" fill="#89BA77"/>
        <rect id="Rectangle 11" className="boxValue" x="88.8627" y="23.494" width="5.04902" height="1.87952" rx="0.939759" fill="#89BA77"/>
        <rect id="Rectangle 12" className="boxValue" x="88.8627" y="42.2892" width="5.04902" height="1.87952" rx="0.939759" fill="#89BA77"/>
        <rect id="Rectangle 13" className="boxValue" x="88.8627" y="51.6867" width="5.04902" height="1.87952" rx="0.939759" fill="#89BA77"/>
        <rect id="Rectangle 14" className="boxValue" x="88.8627" y="61.0843" width="5.04902" height="1.87952" rx="0.939759" fill="#89BA77"/>
        </g>
        </g>
    </svg>
    </main>
  );
}