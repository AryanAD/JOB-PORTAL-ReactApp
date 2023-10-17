import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminBanners, AdminCategories } from "./components/Admin/";
// import AdminCategories from "./components/Admin/AdminCategories";
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
import UserHomePage from "./components/User/UserHomePage";
import ViewerHomePage from "./components/Viewer/ViewerHomePage";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

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

      {role === "admin" && (
        <Routes>
          <Route
            path="/admin"
            element={<AdminSideDrawer anotherItem={<AdminVendors />} />}
          />
          <Route
            path="/admin/vendors"
            element={<AdminSideDrawer anotherItem={<AdminVendors />} />}
          />
          <Route
            path="/admin/categories"
            element={<AdminSideDrawer anotherItem={<AdminCategories />} />}
          />
          <Route
            path="/admin/banners"
            element={<AdminSideDrawer anotherItem={<AdminBanners />} />}
          />
        </Routes>
      )}
      {role === "vendor" && (
        <Routes>
          <Route
            path="/vendor"
            element={<VendorSideDrawer anotherItem={<VendorApplications />} />}
          />
          <Route
            path="/vendor/applications"
            element={<VendorSideDrawer anotherItem={<VendorApplications />} />}
          />
          <Route
            path="/vendor/jobs"
            element={<VendorSideDrawer anotherItem={<VendorJobs />} />}
          />
        </Routes>
      )}
      {role === "user" && (
        <Routes>
          <Route
            path="/user"
            element={<UserNavBar anotherItem={<UserHomePage />} />}
          />
          <Route
            path="/user/jobs"
            element={<UserNavBar anotherItem={<UserJobs />} />}
          />
          <Route
            path="/user/profile"
            element={<UserNavBar anotherItem={<UserProfile />} />}
          />
          <Route
            path="/user/new-vendor"
            element={<UserNavBar anotherItem={<UserNewVendor />} />}
          />
        </Routes>
      )}
      <Routes>
        <Route
          path="/"
          element={<ViewerNavBar anotherItem={<ViewerHomePage />} />}
        />
        <Route
          path="/login"
          element={<ViewerNavBar anotherItem={<LoginPage />} />}
        />
        <Route
          path="/signup"
          element={<ViewerNavBar anotherItem={<SignupPage />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return RouteManager();
}

export default App;
