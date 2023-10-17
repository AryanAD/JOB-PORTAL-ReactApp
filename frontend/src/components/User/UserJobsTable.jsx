import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserJobsModal from "./UserJobsModal";
import { useState } from "react";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

const limitLength = (text, maxLength) => {
	const words = text.split(" ");
	if (words.length <= maxLength) {
		return text;
	}
	const truncatedText = words.slice(0, maxLength).join(" ");
	return `${truncatedText}...`;
};

const UserJobsTable = () => {
	const nav = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
		// Use the absolute path to open the modal
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				mt: 7,
				mb: 3,
			}}>
			<Box
				sx={{
					width: "75vw",
				}}>
				<TableContainer component={Paper}>
					<Table
						size="small"
						sx={{ minWidth: 700 }}
						aria-label="customized table">
						<TableHead>
							<TableRow>
								<TableCell
									sx={{
										fontWeight: "bold",
										padding: "10px",
										fontSize: "20px",
										fontFamily: "monospace",
										bgcolor: "#3ad047",
										borderRadius: "11px 0 0 0",
									}}>
									Title
								</TableCell>
								<TableCell
									sx={{
										fontWeight: "bold",
										padding: "10px",
										fontSize: "20px",
										fontFamily: "monospace",
										bgcolor: "#3ad047",
									}}
									align="center">
									Description
								</TableCell>
								<TableCell
									sx={{
										fontWeight: "bold",
										padding: "10px",
										fontSize: "20px",
										fontFamily: "monospace",
										bgcolor: "#3ad047",
									}}
									align="right">
									Location
								</TableCell>
								<TableCell
									sx={{
										fontWeight: "bold",
										padding: "10px",
										fontSize: "20px",
										fontFamily: "monospace",
										bgcolor: "#3ad047",
									}}
									align="right">
									Salary
								</TableCell>
								<TableCell
									sx={{
										fontWeight: "bold",
										padding: "10px",
										fontSize: "20px",
										fontFamily: "monospace",
										bgcolor: "#3ad047",
									}}
									align="right">
									Deadline
								</TableCell>
								<TableCell
									sx={{
										fontWeight: "bold",
										padding: "10px",
										fontSize: "20px",
										fontFamily: "monospace",
										bgcolor: "#3ad047",
									}}
									align="right">
									Posted By
								</TableCell>
								<TableCell
									sx={{
										fontWeight: "bold",
										padding: "10px",
										fontSize: "20px",
										fontFamily: "monospace",
										bgcolor: "#3ad047",
									}}
									align="right">
									Category
								</TableCell>
								<TableCell
									sx={{
										fontWeight: "bold",
										padding: "20px auto",
										fontSize: "20px",
										fontFamily: "monospace",
										bgcolor: "#3ad047",
										borderRadius: "0 11px 0 0",
									}}
									align="right">
									Actions
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{Array.from({ length: 16 }).map((_, rowIndex) => (
								<StyledTableRow key={rowIndex}>
									<TableCell scope="row">Software Developer</TableCell>
									<TableCell
										component="th"
										align="right">
										{limitLength(
											"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quae asperiores eum cum voluptatibus sint similique, facere ducimus facilis voluptate delectus veniam consequuntur necessitatibus! Aspernatur quod itaque ea consectetur quaerat.",
											5
										)}
									</TableCell>
									<TableCell align="right">Sundarharaincha-4</TableCell>
									<TableCell align="right">Rs 130,000</TableCell>
									<TableCell align="right">2080-10-28</TableCell>
									<TableCell align="right">Admin Bahadur</TableCell>
									<TableCell align="right">Tech</TableCell>
									<TableCell align="right">
										<Button
											size="small"
											onClick={isModalOpen ? handleCloseModal : handleOpenModal}
											variant="outlined"
											color="info">
											Details
										</Button>
									</TableCell>
									{isModalOpen && (
										<UserJobsModal
											open={isModalOpen}
											onClose={handleCloseModal}
										/>
									)}
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
};

export default UserJobsTable;
