import { Box } from "@mui/material";
import Cards from "../components/Cards";

const DashBoard = () => {
	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: "repeat(5, 5fr)",
				gridGap: 30,
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
