import { Box } from "@mui/material";
import Cards from "../components/Cards";

const DashBoard = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 2,
			}}>
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
		</Box>
	);
};

export default DashBoard;
