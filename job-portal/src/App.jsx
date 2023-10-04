import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./layout/HomePage";
import SigninPage from "./components/SigninPage";
import SignupPage from "./components/SignupPage";
import Modal from "./components/Modal";
import DashBoard from "./layout/DashBoard";
import VendorLayout from "./layout/VendorLayout";
import AdminBanners from "./components/Admin/AdminBanners";
// import AdminLayout from "./layout/AdminLayout";
import AdminCategories from "./components/Admin/AdminCategories";
import AdminVendors from "./components/Admin/AdminVendors";

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
				<VendorLayout />
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/dashboard"
						element={<DashBoard />}>
						<Route
							path="/dashboard/vendors"
							element={<AdminVendors />}
						/>
						<Route
							path="/dashboard/categories"
							element={<AdminCategories />}
						/>
						<Route
							path="/dashboard/banners"
							element={<AdminBanners />}
						/>
					</Route>
					<Route
						path="/signin"
						element={<SigninPage />}
					/>
					<Route
						path="/signup"
						element={<SignupPage />}
					/>
					<Route
						path="/modal"
						element={<Modal />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
