import { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'; // Import the CSS file
import LocalStorageService from '../../config/LocalStorageService';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook

const LoginPage = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const history = useNavigate(); // Initialize history for navigation

  const handleLogin = async () => {
    try {
        const response = await axios.post('https://reqres.in/api/login', { email, password });
        LocalStorageService.setToken({access_token : response.data.token});
        window.location.href="/landing"; // Redirect to the landing page
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
          className="login-input"
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password"
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
