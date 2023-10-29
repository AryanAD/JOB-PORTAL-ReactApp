import {
  CheckRounded,
  DeleteRounded,
  SupportAgentRounded,
  WorkRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import AdminUsers from "./AdminUsers";
import Chip from "@mui/material-next/Chip";

const cards = [1, 2, 3, 4, 5, 6];

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
        </Box>
      </Box>
    </>
  );
};

export default AdminHomepage;
