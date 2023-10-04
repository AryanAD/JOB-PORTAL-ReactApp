import {
	Box,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	styled,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import VendorJobModal from "./VendorJobModal";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
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

const VendorJobs = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
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
				margin: "20px auto",
				width: "100%",
			}}>
			<Box
				sx={{
					width: "80%",
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
										bgcolor: "#29a2f3",
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
										bgcolor: "#29a2f3",
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
										bgcolor: "#29a2f3",
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
										bgcolor: "#29a2f3",
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
										bgcolor: "#29a2f3",
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
										bgcolor: "#29a2f3",
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
										bgcolor: "#29a2f3",
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
										bgcolor: "#29a2f3",
										borderRadius: "0 11px 0 0",
									}}
									align="right">
									Actions
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<StyledTableRow>
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
									<Link to={"/vendorjobmodal"}>
										<Button
											onClick={handleOpenModal}
											variant="contained"
											color="success">
											Add Job
										</Button>
									</Link>
								</TableCell>
								<VendorJobModal
									open={isModalOpen}
									onClose={handleCloseModal}
								/>
							</StyledTableRow>
							<StyledTableRow>
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
										variant="contained"
										color="success">
										Add Job
									</Button>
								</TableCell>
							</StyledTableRow>
							<StyledTableRow>
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
										variant="contained"
										color="success">
										Add Job
									</Button>
								</TableCell>
							</StyledTableRow>
							<StyledTableRow>
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
										variant="contained"
										color="success">
										Add Job
									</Button>
								</TableCell>
							</StyledTableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
};

export default VendorJobs;
