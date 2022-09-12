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
      <svg id='homepage' width="50vw" height="50vh" viewBox="0 0 86 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="10vw" height="10vh" rx="4" fill="#F8F4F4"/>
        <rect className='boxValue' x='3' y="9" width="86" height="4" rx="1" fill="#BFB7B7"/>
        <rect className='boxValue' x='3' y="19" width="86" height="4" rx="1" fill="#BFB7B7"/>
        <rect className='boxValue' x='3' y="29" width="86" height="4" rx="1" fill="#BFB7B7"/>
        <rect className='boxValue' x='3' y="59" width="86" height="4" rx="1" fill="#BFB7B7"/>
        <rect className='boxValue' x='3' y="49" width="86" height="4" rx="1" fill="#BFB7B7"/>
        <rect className='boxValue' x='3' y="39" width="86" height="4" rx="1" fill="#BFB7B7"/>
        <rect className='boxValue' x="3"  y="2" width="49" height="4" rx="1" fill="#D9D9D9"/>
        <rect className='boxValue' x="79" y="10" width="5" height="2" rx="1" fill="#89BA77"/>
        <rect className='boxValue' x="79" y="30" width="5" height="2" rx="1" fill="#89BA77"/>
        <rect className='boxValue' x="79" y="20" width="5" height="2" rx="1" fill="#89BA77"/>
        <rect className='boxValue' x="79" y="40" width="5" height="2" rx="1" fill="#89BA77"/>
        <rect className='boxValue' x="79" y="50" width="5" height="2" rx="1" fill="#89BA77"/>
        <rect className='boxValue' x="79" y="60" width="5" height="2" rx="1" fill="#89BA77"/>
      </svg>
    </main>
  );
}