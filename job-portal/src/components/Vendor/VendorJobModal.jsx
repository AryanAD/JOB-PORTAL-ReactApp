import {
	Backdrop,
	Box,
	Button,
	Fade,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	TextField,
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

						<Grid
							container
							spacing={2}>
							<Grid
								item
								xs={6}>
								<TextField
									margin="normal"
									fullWidth
									label="Location"
									type="text"
								/>
							</Grid>
							<Grid
								item
								xs={6}>
								<TextField
									margin="normal"
									fullWidth
									label="Salary"
									type="number"
								/>
							</Grid>
							<Grid
								item
								xs={6}>
								<TextField
									margin="normal"
									fullWidth
									label="Deadline"
									type="date"
								/>
							</Grid>
							<Grid
								item
								xs={6}>
								<TextField
									margin="normal"
									fullWidth
									label="Posted By"
									type="text"
								/>
							</Grid>
							<Grid
								item
								xs={12}>
								<FormControl fullWidth>
									<InputLabel>Category</InputLabel>
									<Select label="Category">
										<MenuItem value="Tech">Tech</MenuItem>
										<MenuItem value="Finance">Finance</MenuItem>
										<MenuItem value="Marketing">Marketing</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>

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
