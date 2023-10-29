import { Box } from "@mui/material";
import AdminUsers from "./AdminUsers";
import AdminVendors from "./AdminVendors";

const AdminHomepage = () => {
  return (
    <>
      <Box
        sx={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "84vw",
            gap: 5,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
          }}
        >
          {/* Users */}
          <AdminUsers />
          {/* VendorTable */}
          <AdminVendors />
        </Box>
      </Box>
    </>
  );
};

export default AdminHomepage;
