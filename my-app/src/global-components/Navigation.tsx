import { useState } from 'react';

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navbar">
			<div className="logo">MyLogo</div>
			<ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Services</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
			<div className="hamburger" onClick={toggleMenu}>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>
		</nav>
	);
};

export default Navigation;
