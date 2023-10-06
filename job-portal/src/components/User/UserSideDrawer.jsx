import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import {
	Box,
	Drawer as MuiDrawer,
	AppBar as MuiAppBar,
	Toolbar,
	List,
	CssBaseline,
	Typography,
	Divider,
	IconButton,
	Button,
	Tooltip,
	tooltipClasses,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	CardActions,
	CardContent,
	CardMedia,
	Card,
	Grid,
} from "@mui/material";
import {
	Menu as MenuIcon,
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	HailRounded as HailRoundedIcon,
	WorkRounded as WorkRoundedIcon,
	AccountCircleRounded as AccountCircleRoundedIcon,
	HomeRounded as HomeRoundedIcon,
	LogoutRounded as LogoutRoundedIcon,
	OpenInNewRounded,
} from "@mui/icons-material";

// Custom Components
import UserJobs from "./UserJobs";
import UserProfile from "./UserProfile";

const CustomToolTip = styled(({ className, ...props }) => (
	<Tooltip
		{...props}
		classes={{ popper: className }}
	/>
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: "gray",
		color: "white",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(18),
		border: "1px solid #dadde9",
		borderRadius: "7px",
	},
}));

const LogoutTooltip = styled(({ className, ...props }) => (
	<Tooltip
		{...props}
		classes={{ popper: className }}
	/>
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: "crimson",
		color: "white",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(18),
		border: "1px solid #dadde9",
		borderRadius: "7px",
	},
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const limitLength = (text, maxLength) => {
	const words = text.trim().split(/\s+/);
	if (words.length <= maxLength) {
		return text;
	}
	const truncatedText = words.slice(0, maxLength).join(" ");
	return `${truncatedText}...`;
};

const UserSideDrawer = () => {
	const location = useLocation();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: 5,
							...(open && { display: "none" }),
						}}>
						<MenuIcon />
					</IconButton>
					<Typography
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2,
							fontSize: "28px",
							fontWeight: "bold",
						}}
						variant="h6"
						noWrap
						component="div">
						<HailRoundedIcon />
						React Job Portal
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					<ListItem
						disablePadding
						sx={{ display: "block" }}>
						<Link
							style={{
								color: "#272727	",
								textDecoration: "none",
							}}
							to={"/"}>
							<ListItemButton>
								<CustomToolTip
									title="Home"
									placement="right">
									<ListItemIcon>
										<HomeRoundedIcon />
									</ListItemIcon>
								</CustomToolTip>
								<ListItemText primary="Home" />
							</ListItemButton>
						</Link>
						<Link
							style={{
								color: "#272727	",
								textDecoration: "none",
							}}
							to={"/user-jobs"}>
							<ListItemButton>
								<CustomToolTip
									title="Jobs"
									placement="right">
									<ListItemIcon>
										<WorkRoundedIcon />
									</ListItemIcon>
								</CustomToolTip>
								<ListItemText primary="Jobs" />
							</ListItemButton>
						</Link>
						<Link
							style={{
								color: "#272727	",
								textDecoration: "none",
							}}
							to={"/user-profile"}>
							<ListItemButton>
								<CustomToolTip
									title="Profile"
									placement="right">
									<ListItemIcon>
										<AccountCircleRoundedIcon />
									</ListItemIcon>
								</CustomToolTip>
								<ListItemText primary="Profile" />
							</ListItemButton>
						</Link>
					</ListItem>
					<Divider />
				</List>

				{open === false ? (
					<ListItem
						disablePadding
						sx={{
							display: "flex",
							flexDirection: "column",
							flexGrow: 1,
							alignItems: "flex-start",
						}}>
						<ListItemButton
							sx={{
								"&:hover": {
									backgroundColor: "rgb(220, 20, 60, 0.6)",
								},
							}}>
							<LogoutTooltip
								title="Log Out"
								placement="right">
								<ListItemIcon>
									<LogoutRoundedIcon
										sx={{
											fontSize: "30px",
											color: "red",
											"&:hover": {
												color: "white",
											},
										}}
									/>
								</ListItemIcon>
							</LogoutTooltip>
						</ListItemButton>
					</ListItem>
				) : (
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "end",
							height: "100%",
							width: "100%",
							padding: "20px auto",
						}}>
						<Button
							size="large"
							fullWidth
							color="error"
							variant="contained">
							LOG OUT
						</Button>
					</Box>
				)}
			</Drawer>
			<Box
				component="main"
				sx={{
					width: "100%",
					height: "100%",
					padding: "60px 0 30px 10px",
					fontFamily: "tr_larabiefont",
					color: "black",
				}}>
				{location.pathname === "/user-profile" ? (
					<UserProfile />
				) : location.pathname === "/user-jobs" ? (
					<UserJobs />
				) : (
					<>
						<Divider
							sx={{
								mt: 4,
							}}
							variant="inset"
							textAlign="left">
							<Typography
								sx={{
									color: "black",
									fontFamily: "nunito",
									letterSpacing: "6px",
									marginBottom: "5px",
									fontWeight: "bold",
									textAlign: "center",
								}}
								variant="h4">
								Find Your First Job
							</Typography>
						</Divider>
						<Grid
							style={{
								display: "flex",
								alignItems: "center",
								maxWidth: "92vw",
								margin: 5,
							}}
							container
							spacing={4}>
							{cards.map((card) => (
								<Grid
									item
									key={card}
									xs={10}
									sm={10}
									md={4}>
									<Card
										sx={{
											borderRadius: "11px",
											boxShadow: "0 15px 40px #d0d0d0",
											height: "100%",
											display: "flex",
											flexDirection: "column",
										}}>
										<CardMedia
											component="div"
											sx={{
												// 16:9
												pt: "56.25%",
											}}
											image="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
										/>
										<CardContent sx={{ flexGrow: 1 }}>
											<Typography
												gutterBottom
												variant="h5"
												component="h2">
												Job Name
											</Typography>
											<Typography>
												{`${limitLength(
													"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil in eaque ut dolorem praesentium fugit adipisci! Recusandae, modi quidem ipsa non magni consectetur! Nihil ut facilis dicta sequi soluta",
													8
												)}`}
											</Typography>
										</CardContent>
										<CardActions>
											<Link
												style={{
													width: "100%",
												}}
												to="/signup">
												<Button
													startIcon={<OpenInNewRounded />}
													fullWidth
													variant="contained"
													size="small">
													View
												</Button>
											</Link>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
						<Link
							style={{
								color: "#272727	",
								textDecoration: "none",
							}}
							to={"/user-jobs"}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									width: "100%",
									pt: 2,
								}}>
								<Button
									size="large"
									sx={{ width: "20%" }}
									variant="outlined">
									Explore More Jobs
								</Button>
							</Box>
						</Link>
					</>
				)}
			</Box>
		</Box>
	);
};
console.log(location.pathname);

export default UserSideDrawer;
