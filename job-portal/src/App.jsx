import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./layout/HomePage";
import NavBar from "./components/NavBar";
import SigninPage from "./components/SigninPage";
import SignupPage from "./components/SignupPage";

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
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/signin"
						element={<SigninPage />}
					/>
					<Route
						path="/signup"
						element={<SignupPage />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
