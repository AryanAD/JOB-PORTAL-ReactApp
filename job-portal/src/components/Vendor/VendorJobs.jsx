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
import VendorJobModal from "./VendorJobModal";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded"; // Import the delete icon

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

const VendorJobs = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const [jobs, setJobs] = useState([
		{
			id: 1,
			title: "Software Developer",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quae asperiores eum cum voluptatibus sint similique, facere ducimus facilis voluptate delectus veniam consequuntur necessitatibus! Aspernatur quod itaque ea consectetur quaerat.",
			location: "Sundarharaincha-4",
			salary: "Rs 130,000",
			deadline: "2080-10-28",
			postedBy: "Admin Bahadur",
			category: "Tech",
		},
		// Add more job objects here
	]);

	const handleDeleteJob = (id) => {
		const updatedJobs = jobs.filter((job) => job.id !== id);
		setJobs(updatedJobs);
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
							{jobs.map((job) => (
								<StyledTableRow key={job.id}>
									<TableCell scope="row">{job.title}</TableCell>
									<TableCell
										component="th"
										align="right">
										{limitLength(job.description, 5)}
									</TableCell>
									<TableCell align="right">{job.location}</TableCell>
									<TableCell align="right">{job.salary}</TableCell>
									<TableCell align="right">{job.deadline}</TableCell>
									<TableCell align="right">{job.postedBy}</TableCell>
									<TableCell align="right">{job.category}</TableCell>
									<TableCell align="right">
										<Button
											size="small"
											variant="contained"
											color="success"
											onClick={handleOpenModal}>
											<AddRoundedIcon />
											Add Job
										</Button>
										<Button
											size="small"
											variant="contained"
											color="error"
											onClick={() => handleDeleteJob(job.id)}
											sx={{ marginLeft: "8px" }}>
											<DeleteOutlineRoundedIcon />
											Delete Job
										</Button>
									</TableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<VendorJobModal
					open={isModalOpen}
					onClose={handleCloseModal}
				/>
			</Box>
		</Box>
	);
};

export default VendorJobs;
