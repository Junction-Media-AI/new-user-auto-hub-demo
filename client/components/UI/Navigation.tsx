import { useNavigate } from 'react-router-dom';

const Navigation = () => {
	const navigate = useNavigate();
	function goTo(link: string) {
		navigate(link);
	}

	return (
		<nav className="nav">
			<button onClick={() => goTo('/dashboard')} className="nav-button">
				Dashboard
			</button>
			<button onClick={() => goTo('/automation-hub')} className="nav-button">
				Automation Hub
			</button>
			<button onClick={() => goTo('/account')} className="nav-button">
				Account
			</button>
		</nav>
	);
};

export default Navigation;
