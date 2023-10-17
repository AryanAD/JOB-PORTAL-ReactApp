import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminBanners from "./components/Admin/AdminBanners";
import AdminCategories from "./components/Admin/AdminCategories";
import AdminVendors from "./components/Admin/AdminVendors";
import UserProfile from "./components/User/UserProfile";
import UserJobs from "./components/User/UserJobs";
import UserNavBar from "./components/User/UserNavBar";
import UserNewVendor from "./components/User/UserNewVendor";
import VendorJobs from "./components/Vendor/VendorJobs";
import VendorApplications from "./components/Vendor/VendorApplications";
import VendorSideDrawer from "./components/Vendor/VendorSideDrawer";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AdminSideDrawer from "./components/Admin/AdminSideDrawer";
import ViewerNavBar from "./components/Viewer/ViewerNavBar";

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
          <Route
            path="/admin"
            element={<AdminSideDrawer anotherItem={<AdminBanners />} />}
          />
          <Route path="/admin/vendors" element={<AdminVendors />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/banners" element={<AdminBanners />} />
        </Routes>
      )}
      {role === "vendor" && (
        <Routes>
          <Route
            path="/vendor"
            element={<VendorSideDrawer anotherItem={<VendorApplications />} />}
          />
          <Route path="/vendor/applications" element={<VendorApplications />} />
          <Route path="/vendor/jobs" element={<VendorJobs />} />
        </Routes>
      )}
      {role === "user" && (
        <Routes>
          <Route path="/user" element={<UserNavBar />} />
          <Route path="/user/jobs" element={<UserJobs />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/new-vendor" element={<UserNewVendor />} />
        </Routes>
      )}
      <Routes>
        <Route path="/" element={<ViewerNavBar />} />
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
