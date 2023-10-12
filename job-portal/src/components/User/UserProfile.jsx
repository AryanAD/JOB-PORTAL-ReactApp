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
							justifyContent: "space-between",
							alignItems: "space-between",
							bgcolor: "navyblue",
							width: "20vw",
							height: "100vh",
						}}>
						<Box></Box>
						<Box></Box>
						<Box></Box>
					</Box>
				</Box>
			</Box>
			;
		</>
	);
};
export default UserProfile;
