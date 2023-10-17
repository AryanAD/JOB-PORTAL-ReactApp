import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminBanners from "./components/Admin/AdminBanners";
import AdminLayout from "./layout/AdminLayout";
import AdminCategories from "./components/Admin/AdminCategories";
import AdminVendors from "./components/Admin/AdminVendors";
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
import ViewerLayout from "./layout/ViewerLayout";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

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

      {/* {role === "user" &&   <Routes>
        <Route path="/" element={ <UserNavBar />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> */}
      {/* <Route
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
        />} */}
      {/* {role === "vendor" && (
          <Route
            path="/vendor/"
            element={
              <AuthWrapper>
                <Route path="" element={<VendorLayout />}>
                  <Route path="jobs" element={<VendorJobs />} />
                  <Route path="applications" element={<VendorApplications />} />
                  <Route path="vendorjobmodal" element={<VendorJobModal />} />
                </Route>
              </AuthWrapper>
            }
          />
        )} */}

      {role === "admin" && (
        <Routes>
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="/admin/banners" element={<AdminBanners />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/vendors" element={<AdminVendors />} />
        </Routes>
      )}
      {role === "vendor" && (
        <Routes>
          <Route path="/vendor" element={<VendorLayout />} />
          <Route path="/vendor/applications" element={<VendorApplications />} />
          <Route path="/vendor/jobs" element={<VendorJobs />} />
        </Routes>
      )}
      {role === "user" && (
        <Routes>
          <Route path="/user" element={<UserLayout />} />
          <Route path="/user/jobs" element={<UserJobs />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/new-vendor" element={<UserNewVendor />} />
        </Routes>
      )}
      <Routes>
        <Route path="/" element={<ViewerLayout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
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
