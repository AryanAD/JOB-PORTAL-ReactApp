import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import SigninPage from "./components/SigninPage";
// import SignupPage from "./components/SignupPage";
import Modal from "./components/Modal";
// import VendorLayout from "./layout/VendorLayout";
// import AdminBanners from "./components/Admin/AdminBanners";
// import AdminLayout from "./layout/AdminLayout";
// import AdminCategories from "./components/Admin/AdminCategories";
// import AdminVendors from "./components/Admin/AdminVendors";
import VendorJobModal from "./components/Vendor/VendorJobModal";
// import ViewerLayout from "./layout/ViewerLayout";
// import ViewerHomePage from "./components/Viewer/ViewerHomePage";
// import ViewerNavBar from "./components/Viewer/ViewerNavBar";
import UserLayout from "./layout/UserLayout";
import UserSideDrawer from "./components/User/UserSideDrawer";
import UserHomePage from "./components/User/UserHomePage";
import UserProfile from "./components/User/UserProfile";
import UserJobs from "./components/User/UserJobs";
import UserJobsModal from "./components/User/UserJobsModal";

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
				<UserLayout />
				<Routes>
					{/* Viewer Routes */}
					{/* <Route element={<ViewerLayout />}>
						<Route element={<ViewerNavBar />}>
							<Route
								index
								element={<ViewerHomePage />}
							/>
							<Route
								path="signin"
								element={<SigninPage />}
							/>
							<Route
								path="signup"
								element={<SignupPage />}
							/>
						</Route>
					</Route> */}

					{/* User Routes */}
					<Route element={<UserLayout />}>
						<Route element={<UserSideDrawer />}>
							<Route
								index
								element={<UserHomePage />}
							/>
							<Route
								path="user-profile"
								element={<UserProfile />}
							/>
							<Route
								path="user-jobs"
								element={<UserJobs />}>
								<Route
									path="/user-jobs-modal"
									element={<UserJobsModal />}
								/>
							</Route>
						</Route>
					</Route>

					{/* Admin Routes */}
					{/* <Route
						path="/"
						element={<AdminLayout />}>
						<Route
							path="/vendors"
							element={<AdminVendors />}
						/>
						<Route
							path="/categories"
							element={<AdminCategories />}
						/>
						<Route
							path="/banners"
							element={<AdminBanners />}
						/>
					</Route> */}

					{/* Other Routes */}
					<Route
						path="/modal"
						element={<Modal />}
					/>
					<Route
						path="/vendorjobmodal"
						element={<VendorJobModal />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
