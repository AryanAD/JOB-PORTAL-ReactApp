import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "./assets/job_banner.jpg";

const PublicHomePage = () => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${Image})`, // Use the imported image
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
	);
};
export default PublicHomePage;
