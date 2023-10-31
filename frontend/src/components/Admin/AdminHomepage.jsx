import { Box } from "@mui/material";
import AdminPendingUsers from "./AdminPendingUsers";
import AdminRejectedUsers from "./AdminRejectedUsers";
import AdminApprovedUsers from "./AdminApprovedUsers";

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
          <AdminPendingUsers />
          <AdminApprovedUsers />
          <AdminRejectedUsers />
        </Box>
      </Box>
    </>
  );
};

export default AdminHomepage;
