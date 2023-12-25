import { Routes, Route } from 'react-router-dom';

import { MainPage, TaskPage, Page404 } from './my-pages';

export const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/task/:id" element={<TaskPage />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</div>
	);
};
