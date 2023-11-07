import { RiArrowGoBackFill } from "react-icons/ri";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Chip from "@mui/material-next/Chip";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { apiImage } from "../../global/API";
import { toast } from "react-toastify";

const ProfileEditable = () => {
  const [image, setImage] = useState();
  const [fileData, setFileData] = useState();
  const [profileData, setProfileData] = useState([]);

  const fetchProfileData = useCallback(async () => {
    try {
      let res = await apiImage.get("user/profile");
      setProfileData(res.data.user);
      console.log(res.data.user, "inside Profile");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }, []);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData(e.target.value);
      let formData = {
        fileData,
        userId: data.get(profileData._id),
      };
      const res = await apiImage.patch(`user/profile`, formData);
      console.log(res);
      toast.success("Successfully Updated Profile!");
    } catch (error) {
      console.error(error);
    }
  };

  const imagePreview = (e) => {
    console.log(e.target.files);
    setFileData(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            mx: 3,
            mb: 1,
            flexGrow: 2,
          }}
        >
          <Typography sx={{ fontFamily: "monospace" }} variant="h3">
            Edit Profile
          </Typography>
          <Link to="/user/profile">
            <Button
              sx={{
                "&:hover": {
                  bgcolor: "#1976D2",
                  color: "white",
                },
              }}
              variant="outlined"
              size="large"
              startIcon={<RiArrowGoBackFill />}
            >
              Back
            </Button>
          </Link>
        </Box>
        <Divider variant="inset" sx={{ bgcolor: "#1976D2" }} />
        <Divider variant="inset" sx={{ bgcolor: "#1976D2" }} />
        <Divider variant="inset" sx={{ bgcolor: "#1976D2" }} />
        <Divider variant="inset" sx={{ bgcolor: "#1976D2" }} />
        <Box
          sx={{
            width: "100%",
            py: 5,
            px: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            variant="rounded"
            src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
            sx={{
              width: 200,
              height: 200,
              border: "2px solid gray",
              mb: 3,
            }}
          />
          <Typography variant="body2" color={"gray"} fontFamily={"monospace"}>
            Status:
          </Typography>
          <Chip
            size="medium"
            color="success"
            sx={{
              fontFamily: "monospace",
              letterSpacing: 4,
              fontSize: 20,
              width: 100,
            }}
            label={profileData.role}
          />
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Grid sx={{ mt: 4 }} container spacing={3}>
              <Grid item sm={6}>
                <Card>
                  {/* <CardContent> */}
                  <Typography
                    variant="body2"
                    color={"gray"}
                    fontFamily={"monospace"}
                    sx={{
                      margin: "16px auto 0 16px",
                    }}
                  >
                    Full Name:
                  </Typography>
                  <input
                    type="text"
                    placeholder={profileData.name}
                    style={{
                      fontFamily: "monospace",
                      fontSize: "22px",
                      letterSpacing: 2,
                      width: "100%",
                      height: "100%",
                      padding: "5px 10px 24px 16px",
                      border: "none",
                      outline: "none",
                    }}
                  />
                  {/* </CardContent> */}
                </Card>
              </Grid>

              <Grid item sm={6}>
                <Card>
                  {/* <CardContent> */}
                  <Typography
                    variant="body2"
                    color={"gray"}
                    fontFamily={"monospace"}
                    sx={{
                      margin: "16px auto 0 16px",
                    }}
                  >
                    Email:
                  </Typography>
                  <input
                    placeholder={profileData.email}
                    type="email"
                    style={{
                      fontFamily: "monospace",
                      fontSize: "22px",
                      letterSpacing: 2,
                      width: "100%",
                      height: "100%",
                      padding: "5px 10px 24px 16px",
                      border: "none",
                      outline: "none",
                    }}
                  />
                  {/* </CardContent> */}
                </Card>
              </Grid>
              <Grid item sm={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexGrow: 2,
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    pt: 5,
                    pb: 2,
                  }}
                >
                  {/* <CardContent> */}

                  <input type="file" accept="image/*" onChange={imagePreview} />
                  {!image ? null : (
                    <Avatar
                      variant="rounded"
                      sx={{ width: 80, height: 80, mt: 4 }}
                      src={image}
                    />
                  )}
                  {/* </CardContent> */}
                </Box>
              </Grid>
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                item
                sm={12}
              >
                <Button type="submit" color="success" variant="contained">
                  Save Change
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ProfileEditable;
