import {
  HomeRepairServiceRounded,
  LockPersonRounded,
  MailRounded,
  PersonRounded,
  PhoneRounded,
  PushPinRounded,
  SettingsSuggestRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        style={{
          textDecoration: "none",
          color: "#555",
        }}
        to="/"
      >
        React Job Portal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const UserNewVendor = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              variant="rounded"
              sx={{ m: 1, bgcolor: "#17e717", width: 50, height: 50 }}
            >
              <LockPersonRounded />
            </Avatar>
            <Typography component="h1" variant="h4">
              Log In
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonRounded />
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoFocus
                type="text"
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailRounded />
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                type="email"
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeRepairServiceRounded />
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                fullWidth
                id="name"
                label="Designation"
                name="name"
                autoFocus
                type="text"
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SettingsSuggestRounded />
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                fullWidth
                id="name"
                label="Service"
                name="name"
                autoFocus
                type="text"
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneRounded />
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                fullWidth
                id="number"
                label="Contact"
                name="number"
                autoFocus
                type="number"
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PushPinRounded />
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                fullWidth
                id="name"
                label="Address"
                name="name"
                autoFocus
                type="text"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "indianred",
                      fontWeight: "bold",
                    }}
                    to="/signup"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default UserNewVendor;
