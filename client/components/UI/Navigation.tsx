import { useNavigate } from 'react-router-dom';

interface NavigationProps {
  userName?: string;
}

const Navigation = ({ userName }: NavigationProps) => {
  const navigate = useNavigate();

  function goTo(link: string) {
    navigate(link);
  }

  return (
    <nav className="nav">
      {/* Logo */}
      <img
        src="client/assets/Logo_White.png"
        alt="Company Logo"
        className="company-logo"
        onClick={() => goTo('/dashboard')}
      />

      {/* Hamburger Button */}
      <div
        className="hamburger"
        onClick={() =>
          document.querySelector('.nav-buttons')?.classList.toggle('open')
        }
      >
        <svg
          width="30"
          height="30"
          stroke="white"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        {/* Account Section and Notification Icon */}
        <div className="user-notification-section">
          <div className="user-section">
            <div className="user-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </div>
            <span className="user-name">{userName || 'Guest'}</span>
          </div>

          <span className="nav-icon" onClick={() => goTo('/notifications')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </span>
        </div>

        {/* Separator Line */}
        <div className="separator"></div>

        {/* Menu Items */}
        <button onClick={() => goTo('/dashboard')} className="nav-button">
          Dashboard
        </button>
        <button onClick={() => goTo('/automation-hub')} className="nav-button">
          Automation Hub
        </button>
        <button onClick={() => goTo('/account')} className="nav-button">
          Account
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
