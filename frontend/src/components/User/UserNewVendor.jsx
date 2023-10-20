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
import { Link, useNavigate } from "react-router-dom";
import Image from "./assets/newVendor.png";
import Footer from "../../layout/Footer";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [service, setService] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(role);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/registerAsVendor",
        {
          name: name,
          email: email,
          designation: designation,
          service: service,
          contact: contact,
          address: address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response, "re");
      console.log(role);
      if (role) {
        toast.success("Successfully applied for Vendor!");
        nav("/user");
      }
    } catch (error) {
      console.error("API request failed: ", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${Image})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
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
                sx={{ m: 1, bgcolor: "#9C27B0", width: 50, height: 50 }}
              >
                <LockPersonRounded />
              </Avatar>
              <Typography component="h1" variant="h4">
                Apply for Vendor
              </Typography>
              <Box
                onSubmit={handleSubmit}
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >
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
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
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
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
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
                  autoComplete="off"
                  onChange={(e) => setDesignation(e.target.value)}
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
                  autoComplete="off"
                  onChange={(e) => setService(e.target.value)}
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
                  autoComplete="off"
                  onChange={(e) => setContact(e.target.value)}
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
                  autoComplete="off"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Button
                  color="secondary"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Apply for Vendor
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "indianred",
                        fontWeight: "bold",
                      }}
                      to="/user"
                    >
                      {"↼ Back "}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Footer />
      </>
    </ThemeProvider>
  );
};

export default UserNewVendor;
