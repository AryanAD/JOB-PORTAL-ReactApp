import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./layout/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/login"
						element={<LoginPage />}
					/>
					<Route
						path="/register"
						element={<RegisterPage />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
