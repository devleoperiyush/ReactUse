import './LandingPage.css'; // Import the CSS file
import LocalStorageService from '../../../config/LocalStorageService';

const LandingPage = () => {
  const handleLogout = () => {
    LocalStorageService.clearToken();
     window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="landing-container">
      <div className="welcome-box">
        <h1>Welcome Back!</h1>
        <p>We're glad to see you again. Here’s what you can do:</p>
        <ul>
          <li>View your profile</li>
          <li>Manage your settings</li>
          <li>Explore new features</li>
        </ul>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default LandingPage;
