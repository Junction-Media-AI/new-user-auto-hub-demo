import { Outlet } from 'react-router-dom';
import Navigation from './UI/Navigation';

function AppLayout() {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
}

export default AppLayout;
