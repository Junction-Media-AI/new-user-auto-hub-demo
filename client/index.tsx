import { createRoot } from 'react-dom/client';
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppLayout from './components/AppLayout';
import LoadComponent from './components/LoadComponent';

import {
	ErrorPage,
	LandingPage,
	Dashboard,
	AutomationHub,
	AccountPage,
} from './pages/index';

export const routes = createRoutesFromElements(
	<Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
		<Route index element={<LoadComponent component={LandingPage} />} />
		<Route path="dashboard" element={<LoadComponent component={Dashboard} />} />
		<Route
			path="automation-hub"
			element={<LoadComponent component={AutomationHub} />}
		/>
		<Route
			path="account-page"
			element={<LoadComponent component={AccountPage} />}
		/>
	</Route>
);

function AppProvider() {
	return <RouterProvider router={createBrowserRouter(routes)} />;
}

document.addEventListener('DOMContentLoaded', () => {
	const queryClient = new QueryClient();
	createRoot(document.getElementById('app') as HTMLElement).render(
		<QueryClientProvider client={queryClient}>
			<AppProvider />
		</QueryClientProvider>
	);
});
