import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const UserHomePage = () => {
	return (
		<Box
			sx={{
				bgcolor: "background.paper",
				pt: 8,
				pb: 6,
			}}>
			<Container maxWidth="sm">
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="text.primary"
					gutterBottom>
					React Job Portal
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="text.secondary"
					paragraph>
					Apply for a Job through our Job Portal. We provide a variety of
					feeelance options for all the freelancers. Our main job categories
					include Tech, Photography, Music Production and many more...
				</Typography>
				<Stack
					sx={{ pt: 4 }}
					direction="row"
					spacing={2}
					justifyContent="center">
					<Link to="/signin">
						<Button variant="contained">Sign In</Button>
					</Link>
					<Link to="/signup">
						<Button variant="outlined">Sign Up</Button>
					</Link>
				</Stack>
			</Container>
		</Box>
	);
};
export default UserHomePage;
