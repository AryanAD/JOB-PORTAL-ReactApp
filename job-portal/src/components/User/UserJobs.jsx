import { Divider } from "@mui/material";
import UserJobsTable from "./UserJobsTable";
import UserJobsSlides from "./UserJobsSlides";

const UserJobs = () => {
	return (
		<>
			<UserJobsSlides />
			<Divider
				sx={{
					paddingY: "20px",
				}}
			/>
			<UserJobsTable />
		</>
	);
};

export default UserJobs;
