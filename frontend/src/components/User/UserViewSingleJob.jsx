import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
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

  return (
    <>
      <Box
        sx={{
          width: "100%",
          // height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "100%",
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
              // height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
            }}
          >
            {!jobData ? (
              <CircularProgress />
            ) : (
              <>
                <Box sx={{ height: "100%" }}>
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

                  {/* DESCRIPTION */}
                  <Box
                    sx={{
                      display: "flex",
                      minHeight: "60vh",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexGrow: 2,
                      my: 2,
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
                    <List
                      sx={{
                        width: "100%",
                        mt: 8,
                        // display: "flex",
                        // alignItems: "flex-end",
                      }}
                    >
                      <ListItem
                        sx={{
                          fontFamily: "monospace",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Location of Job: {jobData.location}
                      </ListItem>
                      <ListItem
                        sx={{
                          fontFamily: "monospace",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Offered Salary: {jobData.salary}
                      </ListItem>
                      <ListItem
                        sx={{
                          fontFamily: "monospace",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Job Deadline:{" "}
                        {new Date(jobData?.deadline).toDateString()}
                      </ListItem>
                      <ListItem
                        sx={{
                          fontFamily: "monospace",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Category: {jobData?.category?.category}
                      </ListItem>
                    </List>
                  </Box>
                  <Divider sx={{ bgcolor: "#1976D2" }} />
                  <Divider sx={{ bgcolor: "#1976D2" }} />
                  <Divider sx={{ bgcolor: "#1976D2" }} />
                </Box>
                {/* VENDOR RATING */}
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    width: "100%",
                    px: 3,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "monospace",
                    }}
                  >
                    Vendor Rating:
                  </Typography>
                  <Grid container spacing={5}>
                    {jobData.postedBy?.reviews.map((data, i) => (
                      <Grid key={i} item lg={12}>
                        <Card variant="outlined">
                          <CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography
                                variant="h5"
                                sx={{
                                  fontFamily: "monospace",
                                  fontWeight: "bold",
                                }}
                              >
                                {data?.author.name}
                              </Typography>

                              <Rating
                                precision={0.5}
                                name="simple-controlled"
                                value={data.rating}
                                readOnly
                              />
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{
                                mb: 2,
                                fontFamily: "monospace",
                                color: "gray",
                              }}
                            >
                              {data?.author.email}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ pl: 1, fontFamily: "monospace" }}
                            >
                              {data?.message}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserViewSingleJob;
