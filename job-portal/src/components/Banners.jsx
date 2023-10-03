import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Typography,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const Banners = () => {
	return (
		<Box>
			<Divider
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
					Banners
				</Typography>
			</Divider>
			<Card
				sx={{
					margin: "20px",
					maxWidth: 345,
					boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
					borderRadius: "12px",
				}}>
				<CardMedia
					component="img"
					alt="green iguana"
					height="140"
					image="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div">
						Banner Title
					</Typography>
				</CardContent>
				<CardActions
					sx={{
						display: "flex",
						justifyContent: "space-around",
					}}>
					<Button
						startIcon={<LaunchIcon />}
						color="info"
						fullWidth
						variant="contained"
						size="small">
						View
					</Button>
					<Button
						startIcon={<DeleteRoundedIcon />}
						color="error"
						fullWidth
						variant="contained"
						size="small">
						Delete
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default Banners;
