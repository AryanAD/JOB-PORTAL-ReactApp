import {
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

const UserHomePage = () => {
	return (
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
					Currently Available Jobs
				</Typography>
			</Divider>
			<Grid
				style={{
					display: "flex",
					alignItems: "center",
					width: "92vw",
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
			<UserFooter />
		</>
	);
};

export default UserHomePage;
