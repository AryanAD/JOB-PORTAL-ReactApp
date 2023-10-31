import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { AddRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import AdminBannerModal from "./AdminBannerModal";
import axios from "axios";
import { toast } from "react-toastify";

const AdminBanners = () => {
  const token = localStorage.getItem("token");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [myData, setMyData] = useState([]);

  const fetchMyData = async () => {
    try {
      let response = await axios.get(`http://localhost:3000/api/admin/banner`);
      setMyData(response.data.banners);
      console.log(myData);
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
      await axios.delete(`http://localhost:3000/api/admin/banner/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(`Deleted category with ID ${id}.`);
      toast.success("Successfully deleted banner");
      fetchMyData();
    } catch (error) {
      console.error(`Error deleting category with ID ${id}.`, error);
    }
  };

  const openAddModal = () => {
    setAddModalOpen(true);
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
  };
  return (
    <>
      <Box>
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
            Banners
          </Typography>
        </Divider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
            spacing={2}
          >
            {myData.length === 0 ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "70vh",
                }}
              >
                <CircularProgress size={80} color="info" />
              </Box>
            ) : (
              myData.map((banner, i) => {
                return (
                  <Grid item key={i} xs={3} sm={5} md={3}>
                    <Card
                      key={banner._id}
                      sx={{
                        margin: "20px",
                        maxWidth: 345,
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                        borderRadius: "12px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt={banner.title}
                        height="140"
                        image={banner.image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {banner.title}
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <Button
                          startIcon={<DeleteRoundedIcon />}
                          color="error"
                          fullWidth
                          variant="contained"
                          size="small"
                          onClick={() => handleDelete(banner._id)}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })
            )}
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          left: "45%",
          right: "50%",
          bottom: 30,
        }}
      >
        <Button
          variant="contained"
          color="success"
          startIcon={<AddRounded />}
          onClick={openAddModal}
        >
          Add Banners
        </Button>
      </Box>

      <AdminBannerModal
        modalOpen={addModalOpen}
        modalClose={closeAddModal}
        fetchMyData={fetchMyData}
      />
    </>
  );
};

export default AdminBanners;
