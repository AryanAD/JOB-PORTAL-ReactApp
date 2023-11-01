import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  tooltipClasses,
  styled,
  Button,
} from "@mui/material";
import {
  DeleteRounded,
  AddRounded,
  OpenInNewRounded,
  LocationOnRounded,
  AttachMoneyRounded,
  CalendarMonthRounded,
  PersonRounded,
  FormatListBulletedRounded,
} from "@mui/icons-material";
import VendorJobModal from "./VendorJobModal";
import { useEffect, useState } from "react";
import Chip from "@mui/material-next/Chip";
import { apiText } from "../../global/API";

const cards = [1, 2, 3, 4, 5, 6];

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

const VendorJobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    console.log("fetchDatainside");
    try {
      const response = await apiText.get("vendor/jobs");
      setJobsData(response);
      console.log(response);
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

  const handleDelete = (rowIndex) => {
    console.log(`Delete button clicked for row ${rowIndex}`);
  };

  return (
    <>
      <Divider variant="inset" textAlign="left">
        <Typography
          sx={{
            color: "black",
            fontFamily: "nunito",
            letterSpacing: "6px",
            marginBottom: "5px",
            fontWeight: "bold",
            textAlign: "center",
          }}
          variant="h4"
        >
          Jobs Available Today
        </Typography>
      </Divider>
      <Box
        sx={{
          pl: 0,
          pb: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxHeight: "100%",
          gap: 4,
        }}
      >
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
          {cards.map((card) => (
            <Grid item key={card} xs={7} sm={3} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  boxShadow: "20px 20px 20px rgba(150, 150, 150, 0.1)",
                  border: "1px solid whitesmoke",
                  borderRadius: 3,
                }}
              >
                <CardContent
                  sx={{
                    gap: 2,
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                        Software Developer
                      </Typography>
                      <Divider sx={{ bgcolor: "#1976d2" }} />
                      <Divider sx={{ bgcolor: "#1976d2" }} />
                      <Divider sx={{ bgcolor: "#1976d2" }} />
                      <Box sx={{ pt: 1 }}>
                        <Typography variant="body2">
                          {limitLength(
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quae asperiores eum cum voluptatibus sint similique, facere ducimus facilis voluptate delectus veniam consequuntur necessitatibus! Aspernatur quod itaque ea consectetur quaerat.",
                            23
                          )}
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
                          label="Location"
                        />
                        <Chip
                          icon={<AttachMoneyRounded />}
                          color="success"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label="Salary"
                        />
                        <Chip
                          icon={<CalendarMonthRounded />}
                          color="warning"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label="Deadline"
                        />
                        <Chip
                          icon={<PersonRounded />}
                          color="primary"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label="Posted By"
                        />
                        <Chip
                          icon={<FormatListBulletedRounded />}
                          color="tertiary"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label="Category"
                        />
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CustomToolTip title="Delete" placement="right">
                        <IconButton
                          sx={{
                            borderRadius: "50%",
                            color: "red",
                            "&:hover": { bgcolor: "#ffd8e4" },
                          }}
                          onClick={handleDelete}
                        >
                          <DeleteRounded />
                        </IconButton>
                      </CustomToolTip>
                      <CustomToolTip title="Visit" placement="right">
                        <IconButton
                          sx={{
                            borderRadius: "50%",
                            color: "#1976d2",
                            "&:hover": { bgcolor: "#a7d3ff" },
                          }}
                        >
                          <OpenInNewRounded />
                        </IconButton>
                      </CustomToolTip>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="outlined"
          color="success"
          sx={{
            color: "green",
            "&:hover": { bgcolor: "#a0f5d1" },
          }}
          onClick={handleOpenModal}
          startIcon={<AddRounded />}
        >
          Add a Job
        </Button>
      </Box>
      <VendorJobModal modalOpen={isModalOpen} modalClose={handleCloseModal} />
    </>
  );
};

export default VendorJobs;
