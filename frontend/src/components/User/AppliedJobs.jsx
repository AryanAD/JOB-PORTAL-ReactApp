import { Box, Card, CardContent, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { apiText } from "../../global/API";
import Chip from "@mui/material-next/Chip";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Card
          elevation={false}
          sx={{
            width: "100%",
            borderLeft: "6px solid #999",
            "&:hover": {
              borderColor: "orangered",
            },
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{ fontFamily: "monospace" }}
            >
              {jobsData[0]?.jobId.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "monospace", color: "gray", mb: 2 }}
            >
              {jobsData[0]?.jobId.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "90%",
                justifyContent: "space-around",
              }}
            >
              <Chip />
              <Chip />
              <Chip />
              <Chip />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default AppliedJobs;
