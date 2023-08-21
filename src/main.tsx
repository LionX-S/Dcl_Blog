import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// unocss 重置样式
import "@unocss/reset/normalize.css";
import "virtual:uno.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
