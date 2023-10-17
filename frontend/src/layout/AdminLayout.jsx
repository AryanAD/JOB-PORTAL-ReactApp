import AdminBanners from "../components/Admin/AdminBanners";
import AdminCategories from "../components/Admin/AdminCategories";
import AdminSideDrawer from "../components/Admin/AdminSideDrawer";
import AdminUsers from "../components/Admin/AdminUsers";
import AdminVendors from "../components/Admin/AdminVendors";
import { useLocation } from "react-router";

const AdminLayout = () => {
  const location = useLocation();
  return (
    <>
      <AdminSideDrawer />

      {/* {location.pathname === "/admin/banners" ? (
        <AdminBanners />
      ) : location.pathname === "/admin/vendors" ? (
        <AdminVendors />
      ) : location.pathname === "/admin/categories" ? (
        <AdminCategories />
      ) : (
        <AdminUsers />
      )} */}
    </>
  );
};

export default AdminLayout;
