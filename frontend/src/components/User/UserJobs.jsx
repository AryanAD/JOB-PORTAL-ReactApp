import { Divider } from "@mui/material";
// import UserJobsTable from "./UserJobsTable";
import UserJobsSlides from "./UserJobsSlides";
import UserJobsDisplay from "./UserJobsDisplay";

const UserJobs = () => {
  return (
    <>
      <UserJobsSlides />
      <Divider
        sx={{
          paddingY: "20px",
        }}
      />
      <UserJobsDisplay />
    </>
  );
};

export default UserJobs;
