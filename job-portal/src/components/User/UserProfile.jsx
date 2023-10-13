import { Avatar, Box, Typography } from "@mui/material";

const UserProfile = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100vw",
					height: "100vh",
					bgcolor: "whitesmoke",
				}}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "80vw",
						height: "100vh",
						bgcolor: "white",
					}}>
					{/* left */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							width: "20vw",
							height: "100vh",
							gap: 4,
							padding: 4,
						}}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
								justifyContent: "space-around",
								borderRadius: "11px",
								width: "18vw",
								height: "36vh",
								border: "2px solid #277aff",
								pt: 4,
							}}>
							<Avatar
								alt="Remy Sharp"
								src="https://i.discogs.com/SITk5YC38UEY6SIcDrveDUW4kOcbKk1tk15ZjnI7fK0/rs:fit/g:sm/q:90/h:450/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI3MzU0/NC0xNjExOTYyNzEx/LTg3NjguanBlZw.jpeg"
								sx={{ width: 190, height: 190, border: "2px solid #333" }}
							/>
							<Typography
								sx={{
									fontFamily: "Dank Mono",
									fontWeight: "bolder",
									color: "#555",
								}}
								variant="h4">
								Angus Young
							</Typography>
						</Box>
						<Box
							sx={{
								border: "2px solid #277aff",
								display: "flex",
								borderRadius: "11px",
								width: "18vw",
								height: "56vh",
							}}></Box>
					</Box>
					{/* right */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							width: "60vw",
							height: "100vh",
						}}>
						<Box
							sx={{
								display: "flex",
								margin: 5,
								borderRadius: "11px",
								width: "58vw",
								border: "2px solid #277aff",
								height: "100vh",
							}}></Box>
					</Box>
				</Box>
			</Box>
			;
		</>
	);
};
export default UserProfile;
