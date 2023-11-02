import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import OpenInNewRounded from "@mui/icons-material/OpenInNewRounded";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import Chip from "@mui/material-next/Chip";
import {
  AddRounded,
  AttachMoneyRounded,
  CalendarMonthRounded,
  HomeRounded,
  InventoryRounded,
  LocationOnRounded,
  PersonRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import UserJobsModal from "./UserJobsModal";
import { apiText } from "../../global/API";

const limitLength = (text, maxLength) => {
  const words = text.split(" ");
  if (words.length <= maxLength) {
    return text;
  }
  const truncatedText = words.slice(0, maxLength).join(" ");
  return `${truncatedText}...`;
};

const CustomToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "gray",
    color: "white",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(18),
    border: "1px solid #dadde9",
    borderRadius: "7px",
  },
}));

const UserJobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobData, setJobData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await apiText.get(`/user/jobs`);
      setJobData(response.data.jobs);
      // setFilteredData(response.data.vendors);
      console.log(jobData, "job data");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          pb: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxHeight: "100%",
        }}
      >
        <Divider
          sx={{
            mt: 4,
            mb: 8,
          }}
          variant="inset"
          textAlign="left"
        >
          <Typography
            sx={{
              color: "black",
              fontFamily: "nunito",
              letterSpacing: "6px",
              marginBottom: "5px",
              fontWeight: "bold",
              textAlign: "left",
            }}
            variant="h4"
          >
            Jobs Available Today
          </Typography>
          <Divider variant="middle" />
          <Divider variant="middle" />
          <Divider variant="middle" />
          <Divider variant="middle" />
        </Divider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "7%",
              height: "100%",
              mx: 10,
            }}
          >
            <Link to="/user">
              <Button
                fullWidth
                startIcon={<HomeRounded />}
                // variant="outlined"
                sx={{
                  "&:hover": { color: "1976d2", bgcolor: "#c2d7fe" },
                }}
              >
                Home
              </Button>
            </Link>
          </Box>
        </Box>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "80vw",
            margin: 5,
          }}
          container
          spacing={4}
        >
          {jobData?.map((data, i) => (
            <Grid item key={i} xs={7} sm={3} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexGrow: 1,
                  boxShadow: 1,
                  border: "1px solid #d8d8d8",
                  borderRadius: 3,
                }}
              >
                <CardContent
                  sx={{
                    gap: 2,
                    flexGrow: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexGrow: 1,
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "space-between",
                      }}
                    >
                      <Typography
                        gutterBottom={false}
                        variant="h4"
                        sx={{
                          mb: 0,
                          pb: 0,
                          fontWeight: "bolder",
                          color: "#444",
                          fontFamily: "monospace",
                        }}
                        component="h2"
                      >
                        {data.title}
                      </Typography>
                      <Divider />
                      <Divider />
                      <Divider />
                      <Box>
                        <Typography variant="body2">
                          {limitLength(data.description, 23)}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          gap: 2,
                          pt: 1,
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <Chip
                          icon={<LocationOnRounded />}
                          color="tertiary"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label={data.location}
                        />
                        <Chip
                          icon={<AttachMoneyRounded />}
                          color="success"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label={data.salary}
                        />
                        <Chip
                          icon={<CalendarMonthRounded />}
                          color="error"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label={data.deadline.slice(0, 10)}
                        />
                        <Chip
                          icon={<PersonRounded />}
                          color="warning"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label={data.postedBy.name}
                        />
                        <Chip
                          icon={<InventoryRounded />}
                          color="info"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label={data.category.category}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <CustomToolTip title="View" placement="left">
                        <IconButton
                          sx={{
                            "&:hover": { bgcolor: "#1976d2", color: "white" },
                          }}
                          color="primary"
                        >
                          <OpenInNewRounded />
                        </IconButton>
                      </CustomToolTip>
                      <CustomToolTip title="Apply" placement="right">
                        <IconButton
                          onClick={handleOpenModal}
                          sx={{
                            "&:hover": { bgcolor: "#2e7d32", color: "white" },
                          }}
                          color="success"
                        >
                          <AddRounded />
                        </IconButton>
                        <UserJobsModal
                          modalOpen={isModalOpen}
                          modalClose={handleCloseModal}
                          jobId={data._id}
                        />
                      </CustomToolTip>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default UserJobs;
