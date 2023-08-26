import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/home/Home";
import ErrorPage from "../error-page";

const AllRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Navigate to='/home' />
			},
			{
				path: "/home",
				element: <Home />
			}
		],
		errorElement: <ErrorPage />
	}
]);
export default AllRouter;
