import { Box, Card, CardContent, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { apiText } from "../../global/API";

const AppliedJobs = () => {
  const [jobsData, setJobsData] = useState([]);

  const fetchJobsData = useCallback(async () => {
    try {
      let res = await apiText.get("user/appliedJobs");
      setJobsData(res.data.jobs);
      console.log(res.data.jobs, "applied Jobs");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }, []);

  useEffect(() => {
    fetchJobsData();
  }, [fetchJobsData]);
  return (
    <>
      <Box>
        <Box
          variant="outlined"
          sx={{ maxWidth: "100%", bgcolor: "yellowgreen" }}
        >
          <CardContent>
            <Typography>{jobsData[0]?.jobId.title}</Typography>
          </CardContent>
        </Box>
      </Box>
    </>
  );
};

export default AppliedJobs;
