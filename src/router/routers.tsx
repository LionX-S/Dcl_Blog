// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/home";

// const AllRouter = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route index element={<Home/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

import { useRoutes, Navigate } from "react-router-dom";

const AllRouter = () =>
	useRoutes([
		{
			path: "/",
			element: <Navigate to='/home' />
		},
		{
			path: "/home",
			element: <Home />
		}
	]);
export default AllRouter;
