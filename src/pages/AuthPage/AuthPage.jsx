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
    </main>
  );
}