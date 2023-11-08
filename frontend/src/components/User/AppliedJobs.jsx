import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { apiText } from "../../global/API";
import Chip from "@mui/material-next/Chip";
import { FaLocationDot, FaDollarSign } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
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
          gap: 5,
        }}
      >
        <Box width={"100%"}>
          <Divider>
            <Divider>
              <Divider>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    color: "#1976d2",
                    fontWeight: "bold",
                  }}
                  variant="h3"
                >
                  Applied Jobs
                </Typography>
              </Divider>
            </Divider>
          </Divider>
        </Box>

        {jobsData.length === 0 ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" fontFamily={"monospace"} color={"gray"}>
              No Data Found
            </Typography>
          </Box>
        ) : jobsData === null ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <CircularProgress size={65} />
            <Typography variant="h4" fontFamily={"monospace"} color={"gray"}>
              Loading...
            </Typography>
          </Box>
        ) : (
          jobsData?.map((data, i) => {
            return (
              <Card
                key={i}
                elevation="false"
                sx={{
                  width: "100%",
                  borderRadius: "15px",
                  borderLeft: "6px solid #44a4e0",
                  borderRight: "6px solid #44a4e0",
                  "&:hover": {
                    cursor: "pointer",
                    borderColor: "transparent",
                    borderRadius: "23px",
                    boxShadow: "2.5px 2.5px 5px rgba(0, 0, 0, 0.1)",
                    scale: "1.01",
                    transition: "all 0.2s",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontFamily: "monospace" }}
                  >
                    {data?.jobId.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "monospace", color: "gray", mb: 2 }}
                  >
                    {data?.jobId.description.slice(0, 455).concat("...")}
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "space-around" }}>
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
                        label={data?.jobId.location}
                      />
                      <Chip
                        color="success"
                        icon={<FaDollarSign />}
                        label={data?.jobId.salary}
                      />
                      <Chip
                        color="error"
                        icon={<BiCalendar />}
                        label={data?.jobId.deadline.slice(0, 10)}
                      />
                      <Chip
                        color="primary"
                        icon={<BsFillPersonFill />}
                        label={data?.jobId.postedBy.name}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        width: "10%",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          "&:hover": {
                            bgcolor: "#44a4e0",
                            color: "white",
                          },
                        }}
                        size="small"
                        color="info"
                        variant="outlined"
                        endIcon={<FaExternalLinkAlt />}
                      >
                        View
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          })
        )}
      </Box>
    </>
  );
};

export default AppliedJobs;
