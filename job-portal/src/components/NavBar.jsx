import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HailRoundedIcon from "@mui/icons-material/HailRounded";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<HailRoundedIcon
						sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
					/>
					<Link
						to="/"
						style={{
							color: "white",
							textDecoration: "none",
						}}>
						<Typography
							variant="h6"
							noWrap
							component="a"
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
					</Link>

					<Box
						sx={{
							flexGrow: 1,
							display: "flex",
							justifyContent: "flex-end",
							mr: 5,
							gap: 2,
						}}>
						<Button
							sx={{ my: 2, color: "white", display: "flex" }}
							color="info">
							<Link
								style={{
									margin: "auto 10px",
									color: "white",
									display: "flex",
									textDecoration: "none",
								}}
								to="/signin">
								Sign In
							</Link>
						</Button>
						<Button
							sx={{
								my: 2,
								color: "white",
								display: "flex",
							}}
							color="info">
							<Link
								style={{
									margin: "auto 10px",
									color: "white",
									display: "flex",
									textDecoration: "none",
								}}
								to="/signup">
								Sign Up
							</Link>
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavBar;
