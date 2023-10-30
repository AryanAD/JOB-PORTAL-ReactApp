import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { AddRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import AdminCategoryModal from "./AdminCategoryModal";
import axios from "axios";

const AdminCategories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [myData, setMyData] = useState([]);

  const fetchMyData = async () => {
    try {
      let response = await axios.get(
        `http://localhost:3000/api/admin/category`
      );
      setMyData(response.data.categories);
      console.log(myData);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  useEffect(() => {
    fetchMyData();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          Categories
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
          {myData.map((category, i) => {
            return (
              <Grid item key={i} xs={3} sm={5} md={3}>
                <Card
                  key={category._id}
                  sx={{
                    margin: "20px",
                    maxWidth: 345,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "12px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={category.image}
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontFamily: "monospace" }}
                      variant="h5"
                      component="h2"
                    >
                      {category.category}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "90%",
                      mb: 2,
                      mx: "auto",
                    }}
                  >
                    <Button
                      startIcon={<DeleteRoundedIcon />}
                      color="error"
                      fullWidth
                      variant="contained"
                      size="small"
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
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
            onClick={handleOpenModal}
          >
            Add Category
          </Button>
        </Box>
      </Box>
      <AdminCategoryModal
        modalOpen={isModalOpen}
        modalClose={handleCloseModal}
      />
    </>
  );
};

export default AdminCategories;
