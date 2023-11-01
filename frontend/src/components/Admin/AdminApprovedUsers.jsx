import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import {
  CheckRounded,
  LocalPhoneRounded,
  LocationOnRounded,
  SupportAgentRounded,
  WorkRounded,
} from "@mui/icons-material";
import Chip from "@mui/material-next/Chip";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminApprovedUsers = () => {
  const token = localStorage.getItem("token");
  const [myData, setMyData] = useState([]);

  const fetchMyData = async () => {
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
      console.log(response.data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  useEffect(() => {
    fetchMyData();
  }, []);

  const approvedVendors = myData.filter(
    (vendor) => vendor.status === "approved"
  );

  return (
    <>
      <Divider variant="inset" textAlign="left">
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
          Approved Vendors
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
          {approvedVendors.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "20vh",
              }}
            >
              <Typography variant="h4">No Approved Applicants Found</Typography>
            </Box>
          ) : (
            myData
              .filter((vendor) => vendor.status === "approved")
              .map((vendor, i) => {
                return (
                  <Grid item key={i} xs={7} sm={5} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        boxShadow: "0 5px 30px rgba(150, 150, 150, 0.3)",
                        border: "1px solid whitesmoke",
                        borderRadius: 3,
                      }}
                    >
                      <CardContent
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "space-around",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
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
                                color: "#555",
                                fontFamily: "monospace",
                                textAlign: "center",
                              }}
                              component="h3"
                            >
                              {vendor.name}
                            </Typography>

                            <Box
                              sx={{
                                color: "gray",
                                fontFamily: "monospace",
                                textAlign: "center",
                              }}
                            >
                              <Typography variant="body">
                                {vendor.email}
                              </Typography>
                              <Divider
                                sx={{ bgcolor: "#1976d2" }}
                                variant="middle"
                              />
                              <Divider
                                sx={{ bgcolor: "#1976d2" }}
                                variant="middle"
                              />
                              <Divider
                                sx={{ bgcolor: "#1976d2" }}
                                variant="middle"
                              />
                            </Box>

                            <Box
                              sx={{
                                gap: 1,
                                pt: 2.5,
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1.2,
                              }}
                            >
                              <Chip
                                icon={<WorkRounded />}
                                disabled={false}
                                size="small"
                                variant="filled"
                                label="Designation"
                                color="info"
                              />
                              <Chip
                                icon={<SupportAgentRounded />}
                                disabled={false}
                                size="small"
                                variant="filled"
                                label="Service"
                                color="info"
                              />
                            </Box>
                            <Box
                              sx={{
                                mt: -1,
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography>{vendor.designation}</Typography>
                              <Typography>{vendor.service}</Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              color: "gray",
                              mb: "-5px",
                            }}
                          >
                            <Chip
                              icon={<LocationOnRounded />}
                              disabled={false}
                              size="small"
                              variant="filled"
                              label="Address"
                              color="tertiary"
                            />
                            <Chip
                              icon={<LocalPhoneRounded />}
                              disabled={false}
                              size="small"
                              variant="filled"
                              label="Contact"
                              color="tertiary"
                            />
                          </Box>
                          <Box
                            sx={{
                              mt: -1,
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography>Address - 1, Address</Typography>
                            <Typography>9873629109</Typography>
                          </Box>
                          <Box>
                            <Chip
                              sx={{ mt: 1 }}
                              icon={<CheckRounded />}
                              color="success"
                              disabled={false}
                              size="small"
                              variant="elevated"
                              label={vendor.status}
                            />
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

export default AdminApprovedUsers;
