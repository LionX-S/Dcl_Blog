import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AllRouter from "./router/routers.tsx";
import "./index.css";
// unocss 重置样式
import "@unocss/reset/normalize.css";
import "virtual:uno.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={AllRouter} />
	</React.StrictMode>
);
