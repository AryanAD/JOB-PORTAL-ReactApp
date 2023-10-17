import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignupPage from "./components/SignupPage";
import AdminBanners from "./components/Admin/AdminBanners";
import AdminLayout from "./layout/AdminLayout";
import AdminCategories from "./components/Admin/AdminCategories";
import AdminVendors from "./components/Admin/AdminVendors";
import ViewerNavBar from "./components/Viewer/ViewerNavBar";
import UserLayout from "./layout/UserLayout";
import UserNavBar from "./components/User/UserNavBar";
import UserHomePage from "./components/User/UserHomePage";
import UserProfile from "./components/User/UserProfile";
import UserJobs from "./components/User/UserJobs";
import UserJobsModal from "./components/User/UserJobsModal";
import UserJobsTable from "./components/User/UserJobsTable";
import UserNewVendor from "./components/User/UserNewVendor";
import VendorLayout from "./layout/VendorLayout";
import VendorJobs from "./components/Vendor/VendorJobs";
import VendorApplications from "./components/Vendor/VendorApplications";
import VendorJobModal from "./components/Vendor/VendorJobModal";
import LoginPage from "./components/LoginPage";

const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
console.log(token);
console.log(role);

const RouteManager = () => {
  return (
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
          element={role === "user" ? <UserNavBar /> : <ViewerNavBar />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/user/"
          element={
            <AuthWrapper>
              <Route element={<UserLayout />}>
                <Route element={<UserNavBar />}>
                  <Route path="" element={<UserHomePage />} />
                  <Route path="user-profile" element={<UserProfile />} />
                  <Route path="user-jobs" element={<UserJobs />} />

                  <Route path="user-jobs/*" element={<UserJobsTable />} />

                  <Route path="user-jobs-modal" element={<UserJobsModal />} />
                  <Route path="register-vendor" element={<UserNewVendor />} />
                </Route>
              </Route>
            </AuthWrapper>
          }
        />
        <Route
          path="/vendor/"
          element={
            <AuthWrapper>
              <Route
                path=""
                element={role === "vendor" ? <VendorLayout /> : <AdminLayout />}
              >
                <Route path="jobs" element={<VendorJobs />} />
                <Route path="applications" element={<VendorApplications />} />
                <Route path="vendorjobmodal" element={<VendorJobModal />} />
              </Route>
            </AuthWrapper>
          }
        />
        <Route
          path="/admin/"
          element={
            <AuthWrapper>
              <Route path="" element={<AdminLayout />}>
                <Route path="vendors" element={<AdminVendors />} />
                <Route path="categories" element={<AdminCategories />} />
                <Route path="banners" element={<AdminBanners />} />
              </Route>
            </AuthWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();
  if (!token) {
    return navigate("/login");
  }
  return token && children;
};

function App() {
  return RouteManager();
}

export default App;
