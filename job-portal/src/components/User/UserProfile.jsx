import { Box } from "@mui/material";

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
						mt: 8,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "80vw",
						height: "100vh",
						bgcolor: "white",
					}}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							bgcolor: "blue",
							width: "20vw",
							height: "100vh",
							gap: 4,
							padding: 4,
						}}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								borderRadius: "11px",
								bgcolor: "orange",
								width: "18vw",
								height: "36vh",
							}}></Box>
						<Box
							sx={{
								display: "flex",
								borderRadius: "11px",
								bgcolor: "purple",
								width: "18vw",
								height: "56vh",
							}}></Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							width: "60vw",
							height: "100vh",
							bgcolor: "yellowgreen",
						}}>
						<Box
							sx={{
								display: "flex",
								margin: 5,
								borderRadius: "11px",
								width: "58vw",
								height: "100vh",
								bgcolor: "orangered",
							}}></Box>
					</Box>
				</Box>
			</Box>
			;
		</>
	);
};
export default UserProfile;
