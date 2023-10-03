import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const Cards = () => {
	return (
		<Box>
			<Card
				sx={{
					maxWidth: 345,
					boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
					borderRadius: "12px",
				}}>
				<CardMedia
					component="img"
					alt="green iguana"
					height="140"
					image="/static/images/cards/contemplative-reptile.jpg"
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div">
						Lizard
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions
					sx={{
						display: "flex",
						justifyContent: "space-around",
					}}>
					<Button
						startIcon={<VerifiedRoundedIcon />}
						color="success"
						fullWidth
						variant="contained"
						size="small">
						Approve
					</Button>
					<Button
						startIcon={<CancelRoundedIcon />}
						color="error"
						fullWidth
						variant="contained"
						size="small">
						Reject
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default Cards;
