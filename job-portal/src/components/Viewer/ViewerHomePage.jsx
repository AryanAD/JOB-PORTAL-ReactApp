import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Divider,
	Grid,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Image from "./assets/job_banner.jpg";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const limitLength = (text, maxLength) => {
	const words = text.trim().split(/\s+/);
	if (words.length <= maxLength) {
		return text;
	}
	const truncatedText = words.slice(0, maxLength).join(" ");
	return `${truncatedText}...`;
};

const goToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

const ViewerHomePage = () => {
	return (
		<>
			<Box
				sx={{
					backgroundImage: `url(${Image})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center center",
					backgroundSize: "cover",
					margin: 0,
					padding: "80px 0 60px 0",
					// pt: 8,
					// pb: 6,
				}}>
				<Container maxWidth="sm">
					<Typography
						fontFamily="monospace"
						fontWeight="bolder"
						fontSize="60px"
						component="h1"
						variant="h2"
						align="center"
						gutterBottom>
						React Job Portal
					</Typography>
					<Typography
						variant="h5"
						align="center"
						fontFamily="monospace"
						color="black"
						paragraph>
						Apply for a Job through our Job Portal. We provide a variety of
						feeelance options for all the freelancers. Our main job categories
						include Tech, Photography, Music Production and many more...
					</Typography>
					<Stack
						sx={{ pt: 4 }}
						direction="row"
						spacing={4}
						justifyContent="center">
						<Link to="/signin">
							<Button
								color="primary"
								size="large"
								variant="contained">
								Sign In
							</Button>
						</Link>
						<Link to="/signup">
							<Button
								color="primary"
								size="large"
								variant="contained">
								Sign Up
							</Button>
						</Link>
					</Stack>
				</Container>
			</Box>
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
					Currently Available Jobs
				</Typography>
			</Divider>
			<Grid
				style={{
					width: "95vw",
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
							sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
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
										fullWidth
										variant="contained"
										size="small">
										Join us
									</Button>
								</Link>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
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
		</>
	);
};
export default ViewerHomePage;
