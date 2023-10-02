import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HailRoundedIcon from "@mui/icons-material/HailRounded";
import { useNavigate } from "react-router";

const NavBar = () => {
	const nav = useNavigate();

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<HailRoundedIcon
						sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
					/>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						REACT JOB PORTAL
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: "flex",
							justifyContent: "flex-end",
							mr: 5,
							gap: 2,
						}}>
						<Button
							onClick={nav("/signin")}
							sx={{ my: 2, color: "white", display: "flex" }}
							color="info">
							Sign In
						</Button>
						<Button
							onClick={nav("/signup")}
							sx={{ my: 2, color: "white", display: "flex" }}
							color="info">
							Sign Up
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavBar;
