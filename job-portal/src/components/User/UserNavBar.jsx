import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HailRoundedIcon from "@mui/icons-material/HailRounded";
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React from "react";
import { LogoutRounded, MenuRounded } from "@mui/icons-material";
import UserHomePage from "./UserHomePage";
import UserProfile from "./UserProfile";
import UserJobs from "./UserJobs";
import { Link } from "react-router-dom";
import UserNewVendor from "./UserNewVendor";

const UserNavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<>
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<HailRoundedIcon
							sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: 40 }}
						/>
						<Link
							to="/"
							style={{ textDecoration: "none", color: "white" }}>
							<Typography
								variant="h4"
								noWrap
								component="a"
								sx={{
									mr: 2,
									display: { xs: "none", md: "flex" },
									fontFamily: "poppins",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
								}}>
								React Job Portal
							</Typography>
						</Link>

						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit">
								<MenuRounded />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}>
								{/* <MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign="center">a</Typography>
								</MenuItem> */}
							</Menu>
						</Box>
						<HailRoundedIcon
							sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
						/>
						<Link
							to="/"
							style={{ textDecoration: "none", color: "white" }}>
							<Typography
								variant="h5"
								noWrap
								component="a"
								sx={{
									mr: 2,
									display: { xs: "flex", md: "none" },
									flexGrow: 1,
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
								}}>
								React Job Portal
							</Typography>
						</Link>
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{/* <Button
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}>
								a
							</Button> */}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton
									onClick={handleOpenUserMenu}
									sx={{ p: 0 }}>
									<Avatar
										alt="Dummy User"
										src="https://mui.com/static/images/avatar/2.jpg"
									/>
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}>
								<Link
									to="/user-profile"
									style={{
										color: "black",
										textDecoration: "none",
									}}>
									<MenuItem onClick={handleCloseUserMenu}>
										<Typography textAlign="center">My Profile</Typography>
									</MenuItem>
								</Link>

								<MenuItem
									sx={{
										bgcolor: "red",
										color: "white",
										fontWeight: "bolder",
										gap: 1,
										"&:hover": { color: "red", bgcolor: "#f5f5f5" },
									}}
									onClick={handleCloseUserMenu}>
									<LogoutRounded />
									<Typography textAlign="center">Log Out</Typography>
								</MenuItem>
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			<Box
				style={{
					fontFamily: "tr_larabiefont",
					color: "black",
				}}
				component="main"
				sx={{ flexGrow: 1 }}>
				{location.pathname === "/user-profile" ? (
					<UserProfile />
				) : location.pathname === "/user-jobs" ? (
					<UserJobs />
				) : location.pathname === "/register-vendor" ? (
					<UserNewVendor />
				) : (
					<UserHomePage />
				)}
			</Box>
		</>
	);
};

export default UserNavBar;
