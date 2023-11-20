import {
  Box,
  Divider,
  List,
  ListItem,
  Rating,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { apiText } from "../../global/API";
import { useParams } from "react-router";

const UserViewSingleJob = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await apiText.get(`/user/jobs/${id}`);
      setJobData(response.data.jobs);
      console.log(response.data.jobs, "job data");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let rating = jobData.postedBy?.reviews.reduce((total, data) => {
    const avgRating = data.rating;
    return total.rating + avgRating;
  });
  rating = rating / jobData.postedBy.reviews.length;
  console.log(rating, "rating");

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "100vh",
            boxShadow: 12,
            border: "2px solid whitesmoke",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* TITLE */}
            <Box marginTop={2}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                }}
              >
                {jobData.title}
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{
                  bgcolor: "#1976D2",
                }}
              />
              <Divider
                variant="fullWidth"
                sx={{
                  bgcolor: "#1976D2",
                }}
              />
              <Divider
                variant="fullWidth"
                sx={{
                  bgcolor: "#1976D2",
                }}
              />
            </Box>
            {/* BODY */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                my: 3,
                px: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              {/* DESCRIPTION */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "monospace",
                    color: "gray",
                  }}
                >
                  {jobData.description}
                </Typography>
                <Box
                  sx={{ width: "100%", display: "flex", alignItems: "start" }}
                >
                  <List>
                    <ListItem
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "16px",
                      }}
                    >
                      Location of Job: {jobData.location}
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "16px",
                      }}
                    >
                      Offered Salary: {jobData.salary}
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "16px",
                      }}
                    >
                      Job Deadline: {new Date(jobData?.deadline).toDateString()}
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "16px",
                      }}
                    >
                      Category: {jobData?.category?.category}
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Divider />
              {/* VENDOR RATING */}
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "monospace",
                  }}
                >
                  Vendor Rating:
                </Typography>

                <Rating name="simple-controlled" value={rating} readOnly />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserViewSingleJob;
