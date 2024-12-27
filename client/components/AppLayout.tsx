import { Outlet } from 'react-router-dom';
import Navigation from './UI/Navigation';

function AppLayout() {
	return (
		<>
			<h1>APP LAYOUT!!</h1>
			<Navigation />
			<Outlet />
		</>
	);
}

export default AppLayout;
