import {
	Backdrop,
	Box,
	Button,
	Fade,
	Modal,
	TextField,
	Typography,
} from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	border: "1px solid #29a2f3",
	borderRadius: "13px",
	boxShadow: 24,
	p: 4,
};

const VendorJobModal = ({ open, onClose }) => {
	// No need to manage modal state in this component

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={onClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}>
				<Fade in={open}>
					<Box sx={style}>
						<TextField
							type="text"
							margin="normal"
							fullWidth
							label="Job Title"
						/>
						<TextField
							type="text"
							margin="normal"
							fullWidth
							label="Job Description"
						/>

						<TextField
							margin="normal"
							fullWidth
							label="Location"
							type="text"
						/>
						<TextField
							margin="normal"
							fullWidth
							label="Salary"
							type="number"
						/>

						<TextField
							label="Deadline"
							margin="normal"
							fullWidth
							type="date"
						/>
						<TextField
							margin="normal"
							fullWidth
							label="Posted By"
							type="text"
						/>
						<TextField
							margin="normal"
							fullWidth
							label="Category"
							type="text"
						/>
						<Button
							color="success"
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}>
							Add Job
						</Button>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default VendorJobModal;
