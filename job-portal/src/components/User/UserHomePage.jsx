import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Grid,
	IconButton,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import UserFooter from "./UserFooter";
import Image from "./assets/vendor.png";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

// const limitLength = (text, maxLength) => {
// 	const words = text.trim().split(/\s+/);
// 	if (words.length <= maxLength) {
// 		return text;
// 	}
// 	const truncatedText = words.slice(0, maxLength).join(" ");
// 	return `${truncatedText}...`;
// };

const goToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

const UserHomePage = () => {
	return (
		<Box
			sx={{
				bgcolor: "#fafafa",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}>
			{/* <Divider
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
					Currently Available Jobs
				</Typography>
			</Divider> */}
			<Box
				sx={{
					height: "58vh",
					flexGrow: 1,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Typography variant="h1">Banner</Typography>
			</Box>
			<Grid
				style={{
					display: "flex",
					alignItems: "center",
					maxWidth: "80vw",
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
						md={3}>
						<Card
							sx={{
								height: "100%",
								display: "flex",
								// alignItems: "center",
								flexDirection: "column",
								bgcolor: "#e9e9e9",
								boxShadow: 24,
								border: "1px solid #d8d8d8",
								borderRadius: 3,
							}}>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography
									gutterBottom={false}
									variant="h4"
									sx={{ mb: 0, pb: 0 }}
									component="h2">
									Job Name
								</Typography>
								<Divider variant="inset" />
								<Divider variant="inset" />
								<Divider variant="inset" />
								<Divider variant="inset" />
							</CardContent>
							<CardMedia
								gutterBottom
								component="div"
								sx={{
									// 16:9
									pt: "45%",
								}}
								image="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
							/>

							<CardActions>
								<Link
									style={{
										width: "100%",
									}}
									to="/signup">
									<Button
										sx={{
											my: 0.5,
											color: "black",
											"&:hover": { bgcolor: "#277aff", color: "white" },
										}}
										fullWidth
										variant="outlined"
										size="medium">
										Join us
									</Button>
								</Link>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "space-evenly",
					mt: 10,
					width: "1920px",
					height: "620px",
					backgroundImage: `url(${Image})`,
				}}>
				<Box sx={{ display: "flex" }}>
					<Typography
						sx={{
							color: "orangered",
							fontFamily: "nunito",
							letterSpacing: "6px",
							fontWeight: "bold",
							textAlign: "center",
						}}
						variant="h1">
						Need a Freelancer?
					</Typography>
				</Box>
				<Box sx={{ display: "flex" }}>
					<Typography
						variant="h4"
						sx={{
							color: "black",
							fontFamily: "nunito",
							letterSpacing: "6px",
							marginBottom: "5px",
							fontWeight: "bold",
							textAlign: "center",
						}}>
						Become a Vendor Today!
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Button
						sx={{ fontSize: 28 }}
						color="secondary"
						variant="contained">
						Apply for Vendor
					</Button>
				</Box>
			</Box>
			<Link
				to="#"
				onClick={goToTop}>
				<IconButton
					sx={{
						width: 40,
						height: 40,
						right: 30,
						bottom: 30,
						position: "fixed",
						zIndex: 1000,
						bgcolor: "transparent",
					}}>
					<ArrowUpwardRoundedIcon
						sx={{
							color: "black",
						}}
					/>
				</IconButton>
			</Link>
			<UserFooter />
		</Box>
	);
};

export default UserHomePage;
