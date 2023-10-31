import {
  Box,
  Card,
  Divider,
  Grid,
  Typography,
  Button,
  CardContent,
} from "@mui/material";
import {
  CheckRounded,
  CloseRounded,
  MoreHorizRounded,
  SupportAgentRounded,
  WorkRounded,
} from "@mui/icons-material";
import Chip from "@mui/material-next/Chip";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminPendingUsers = () => {
  const token = localStorage.getItem("token");
  const [myData, setMyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchMyData = async () => {
    const token = localStorage.getItem("token");
    try {
      let response = await axios.get(
        `http://localhost:3000/api/admin/vendors`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMyData(response.data.vendors);
      setFilteredData(response.data.vendors);
      console.log(response.data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  useEffect(() => {
    fetchMyData();
  }, []);

  const acceptRequest = async (userId) => {
    console.log(userId);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/admin/changeToVendor`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response, "re");
      toast.success("Successfully Approved Application");
      setFilteredData((prevData) =>
        prevData.filter((data) => data.userId !== userId)
      );
      fetchMyData();
    } catch (error) {
      console.error("API request failed: ", error);
    }
  };

  const rejectRequest = async (userId) => {
    console.log(userId);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/admin/rejectVendor`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response, "re");
      toast.success("Successfully Rejected Application");
      setFilteredData((prevData) =>
        prevData.filter((data) => data.userId !== userId)
      );
      fetchMyData();
    } catch (error) {
      console.error("API request failed: ", error);
    }
  };

  useEffect(() => {
    setFilteredData(myData.filter((vendor) => vendor.status === "pending"));
  }, [myData]);

  return (
    <>
      <Divider sx={{ pt: 5 }} variant="inset" textAlign="left">
        <Typography
          sx={{
            color: "black",
            fontFamily: "monospace",
            letterSpacing: "6px",
            marginBottom: "5px",
            fontWeight: "bold",
            textAlign: "center",
          }}
          variant="h4"
        >
          Vendor Applicants
        </Typography>
      </Divider>
      <Box
        sx={{
          pl: 0,
          pb: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxHeight: "100%",
        }}
      >
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "63vw",
            margin: 5,
          }}
          container
          spacing={4}
        >
          {filteredData.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "20vh",
              }}
            >
              <Typography variant="h4">No Pending Applicants Found</Typography>
            </Box>
          ) : (
            myData.map((data, i) => {
              return (
                <Grid item key={i} xs={7} sm={3} md={6}>
                  <Card
                    sx={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      boxShadow: "10px 20px 20px rgba(150, 150, 150, 0.2)",
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
                      <Box
                        sx={{
                          display: "flex",
                          //   width: "100%",
                          height: "100%",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "space-evenly",
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
                            {data.name}
                          </Typography>
                          <Divider sx={{ bgcolor: "#1976d2" }} />
                          <Divider sx={{ bgcolor: "#1976d2" }} />
                          <Divider sx={{ bgcolor: "#1976d2" }} />
                          <Box
                            sx={{
                              py: 2,
                              color: "gray",
                              fontFamily: "monospace",
                              width: "400px",
                            }}
                          >
                            <Typography variant="body">
                              {data.email} | {data.contact} | {data.address}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              gap: 2,
                              pt: 1,
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-around",
                              alignItems: "center",
                            }}
                          >
                            <Chip
                              icon={<WorkRounded />}
                              disabled={false}
                              size="small"
                              variant="outlined"
                              label={data.designation}
                            />
                            <Chip
                              icon={<SupportAgentRounded />}
                              disabled={false}
                              size="small"
                              variant="outlined"
                              label={data.service}
                            />

                            <Chip
                              icon={<MoreHorizRounded />}
                              color="warning"
                              disabled={false}
                              size="small"
                              variant="elevated"
                              label={data.status}
                            />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            gap: 2,
                            pt: 5,
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Button
                            variant="text"
                            fullWidth
                            sx={{
                              color: "green",
                              "&:hover": { bgcolor: "#a0f5d1" },
                            }}
                            startIcon={<CheckRounded />}
                            onClick={() => {
                              acceptRequest(data.userId);
                            }}
                          >
                            Approve
                          </Button>
                          <Button
                            variant="text"
                            fullWidth
                            sx={{
                              color: "red",
                              "&:hover": { bgcolor: "#ffd8e4" },
                            }}
                            startIcon={<CloseRounded />}
                            onClick={() => rejectRequest(data.userId)}
                          >
                            Reject
                          </Button>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })
          )}
        </Grid>
      </Box>
    </>
  );
};

export default AdminPendingUsers;
