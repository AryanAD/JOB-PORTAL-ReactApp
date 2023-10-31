import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import {
  CheckRounded,
  CloseRounded,
  DeleteRounded,
  MoreHorizRounded,
  SupportAgentRounded,
  WorkRounded,
} from "@mui/icons-material";
import Chip from "@mui/material-next/Chip";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// const cards = [1, 2, 3, 4, 5, 6];

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

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(`http://localhost:3000/api/admin/vendors/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(`Deleted Vendor with ID ${id}.`);
      toast.success("Successfully deleted Vendor");
      fetchMyData();
    } catch (error) {
      console.error(`Error deleting Vendor with ID ${id}.`, error);
    }
  };

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
          Active Vendors
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
          {myData.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "20vh",
              }}
            >
              <CircularProgress size={80} color="info" />
            </Box>
          ) : (
            myData.map((vendor, i) => {
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
                              pt: 2,
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Chip
                              icon={<WorkRounded />}
                              disabled={false}
                              size="small"
                              variant="outlined"
                              label={vendor.designation}
                            />
                            <Chip
                              icon={<SupportAgentRounded />}
                              disabled={false}
                              size="small"
                              variant="outlined"
                              label={vendor.service}
                            />
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
                          <Typography sx={{ fontFamily: "monospace" }}>
                            Address
                          </Typography>
                          <Typography sx={{ fontFamily: "monospace" }}>
                            Contact
                          </Typography>
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
                            icon={
                              vendor.status === "pending" ? (
                                <MoreHorizRounded />
                              ) : vendor.status === "approved" ? (
                                <CheckRounded />
                              ) : (
                                <CloseRounded />
                              )
                            }
                            color={
                              vendor.status === "pending"
                                ? "warning"
                                : vendor.status === "approved"
                                ? "success"
                                : "error"
                            }
                            disabled={false}
                            size="small"
                            variant="filled"
                            label={vendor.status}
                          />
                        </Box>
                        <Box
                          sx={{
                            gap: 2,
                            pt: 2,
                            display: "flex",
                            flexDirection: "column",
                            width: "85%",
                          }}
                        >
                          <Button
                            variant="outlined"
                            fullWidth
                            color="error"
                            sx={{
                              color: "#ff0000",
                              "&:hover": { bgcolor: "#f9dedc" },
                            }}
                            startIcon={<DeleteRounded />}
                            onClick={() => handleDelete(vendor._id)}
                          >
                            Delete Vendor
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

export default AdminApprovedUsers;
