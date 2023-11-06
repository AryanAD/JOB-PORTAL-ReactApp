import { HomeRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Chip from "@mui/material-next/Chip";
import { Link } from "react-router-dom";

const ProfileEditable = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          mx: 3,
          mb: 1,
          flexGrow: 2,
        }}
      >
        <Typography sx={{ fontFamily: "monospace" }} variant="h3">
          Edit Profile
        </Typography>
        <Link to="/user">
          <Button
            sx={{
              "&:hover": {
                bgcolor: "#1976D2",
                color: "white",
              },
            }}
            variant="outlined"
            size="large"
            startIcon={<HomeRounded />}
          >
            Home
          </Button>
        </Link>
      </Box>
      <Divider variant="inset" sx={{ bgcolor: "#1976D2" }} />
      <Divider variant="inset" sx={{ bgcolor: "#1976D2" }} />
      <Divider variant="inset" sx={{ bgcolor: "#1976D2" }} />
      <Divider variant="inset" sx={{ bgcolor: "#1976D2" }} />
      <Box
        sx={{
          width: "100%",
          py: 3,
          px: 6,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={5} md={10}>
            <Card sx={{ maxWidth: 400 }}>
              <CardContent>
                <Typography
                  variant="body2"
                  color={"gray"}
                  fontFamily={"monospace"}
                >
                  Full Name:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "22px",
                    letterSpacing: 2,
                  }}
                >
                  USERNAME
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5} md={10}>
            <Card sx={{ maxWidth: 400, maxHeight: 100 }}>
              <CardContent>
                <Typography
                  variant="body2"
                  color={"gray"}
                  fontFamily={"monospace"}
                >
                  Email:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "22px",
                    letterSpacing: 2,
                  }}
                >
                  USER@EMAIL.COM
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} md={6}>
            <CardContent>
              <Typography
                variant="body2"
                color={"gray"}
                fontFamily={"monospace"}
              >
                Status:
              </Typography>
              <Chip
                color="success"
                variant="elevated"
                label="user"
                size="medium"
                sx={{
                  fontSize: "18px",
                  fontFamily: "monospace",
                  letterSpacing: 2,
                }}
              />
            </CardContent>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfileEditable;
