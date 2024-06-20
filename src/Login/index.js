import './index.css'
import { useState } from 'react';
import { login } from './utils';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');
  
    const handleLogin = async (event) => {
        event.preventDefault();
        const result = await login ({username, password})
        if (username === 'username' && password === 'password') {
            setShowModal(true);
          } else {
            setError('Invalid username or password');
          }

    };
  
    const handleModalClose = () => {
      setShowModal(false);
    };

    return (
        <div>
          <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-content">
              <h2>Login Form</h2>
              <form>
                <label>
                  Username:
                  <input className='inputs' type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                </label>
                <br />
                <label>
                  Password:
                  <input className='inputs' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <br />
                <button className=' modal-button'onClick={handleLogin}>Submit</button>
              </form>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
          </div>
          <h1 className='intro-text'>Click To Show Login Form</h1>
          <button className='login-button' onClick={() => setShowModal(true)}>Login</button>
        </div>
      );


}
export default Login;