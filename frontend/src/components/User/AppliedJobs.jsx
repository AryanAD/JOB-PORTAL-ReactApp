import { Box, Card, CardContent, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { apiText } from "../../global/API";
import Chip from "@mui/material-next/Chip";
import { FaLocationDot, FaDollarSign } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

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
            borderRadius: "15px",
            borderLeft: "6px solid #999",
            "&:hover": {
              borderColor: "indianred",
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
              {jobsData[0]?.jobId.description.slice(0, 455).concat("...")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "75%",
                justifyContent: "space-around",
              }}
            >
              <Chip
                color="info"
                icon={<FaLocationDot />}
                label={jobsData[0]?.jobId.location}
              />
              <Chip
                color="success"
                icon={<FaDollarSign />}
                label={jobsData[0]?.jobId.salary}
              />
              <Chip
                color="error"
                icon={<BiCalendar />}
                label={jobsData[0]?.jobId.deadline.slice(0, 10)}
              />
              <Chip
                color="primary"
                icon={<BsFillPersonFill />}
                label={jobsData[0]?.jobId.postedBy.name}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default AppliedJobs;
