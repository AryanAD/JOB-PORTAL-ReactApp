import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  TextField,
  Typography,
} from "@mui/material";
import { SaveRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { apiImage } from "../../global/API";
import { toast } from "react-toastify";

const UserProfile = () => {
  const [profileData, setProfileData] = useState([]);
  // const [updateProfileData, setUpdateProfileData] = useState([]);

  const fetchProfileData = useCallback(async () => {
    try {
      let res = await apiImage.get("user/profile");
      setProfileData(res.data.user);
      console.log(res.data.user);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }, []);

  const handleUpdate = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const data = new FormData(e.currentTarget);
        let formData = { image: "", user: data.get("user") };
        let res = await apiImage.patch("user/profile", formData);
        console.log(formData, "vendormodal");
        console.log(res, "response");
        fetchProfileData();
        toast.success("Successfully created a job!");
      } catch (err) {
        console.log(`API request Error: ${err.message}`);
      }
    },
    [fetchProfileData]
  );

  useEffect(() => {
    fetchProfileData();
    handleUpdate();
  }, [fetchProfileData, handleUpdate]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          bgcolor: "whitesmoke",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80vw",
            height: "100vh",
          }}
        >
          {/* left */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "20vw",
              height: "100vh",
              gap: 4,
              padding: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-around",
                borderRadius: "11px",
                width: "18vw",
                height: "36vh",
                boxShadow: "9",
                pt: 4,
              }}
            >
              <Avatar
                alt={profileData.name}
                src={profileData.image}
                sx={{ width: 190, height: 190, border: "2px solid #333" }}
              />
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  color: "#555",
                }}
                variant="h4"
              >
                {profileData.name}
              </Typography>
            </Box>
            <Box
              sx={{
                // boxShadow: "9",
                display: "flex",
                borderRadius: "11px",
                width: "18vw",
                height: "56vh",
                margin: 0,
                padding: 0,
              }}
            >
              <List
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <ListItem>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#000",
                      width: "100%",
                    }}
                    to="/user/jobs"
                  >
                    <ListItemButton
                      sx={{
                        bgcolor: "#1CC21C",
                        boxShadow: 10,
                        borderRadius: "8px",
                        justifyContent: "center",
                        fontFamily: "monospace",
                        fontSize: "16px",
                        py: 2,
                        "&:hover": {
                          bgcolor: "#06E406",
                        },
                      }}
                    >
                      Apply For Job
                    </ListItemButton>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      width: "100%",
                    }}
                    to="/user/new-vendor"
                  >
                    <ListItemButton
                      sx={{
                        bgcolor: "#7250CE",
                        boxShadow: 10,
                        color: "white",
                        borderRadius: "8px",
                        justifyContent: "center",
                        fontFamily: "monospace",
                        fontSize: "16px",
                        py: 2,
                        "&:hover": {
                          bgcolor: "#7e5ed4",
                        },
                      }}
                    >
                      Apply For Vendor
                    </ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Box>
          {/* right */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
            }}
          >
            <Box
              sx={{
                display: "flex",
                margin: 5,
                borderRadius: "11px",
                width: "58vw",
                boxShadow: "9",
                height: "100vh",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "space-between",
                    mt: 2,
                    mx: 3,
                    mb: 1,
                  }}
                >
                  <Typography sx={{ fontFamily: "monospace" }} variant="h3">
                    Edit Profile
                  </Typography>
                  <Link to="/user">
                    <Button
                      sx={{
                        height: "35px",
                        "&:hover": {
                          bgcolor: "#1976D2",
                          color: "white",
                        },
                      }}
                      variant="outlined"
                      size="large"
                    >
                      Back
                    </Button>
                  </Link>
                </Box>
                <Divider
                  variant="inset"
                  sx={{ bgcolor: "#1976D2", width: "920px" }}
                />
                <Divider
                  variant="inset"
                  sx={{ bgcolor: "#1976D2", width: "920px" }}
                />
                <Divider
                  variant="inset"
                  sx={{ bgcolor: "#1976D2", width: "920px" }}
                />
                <Divider
                  variant="inset"
                  sx={{ bgcolor: "#1976D2", width: "920px" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                    mx: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25vw",
                    }}
                  >
                    <label
                      style={{
                        padding: 2,
                        fontFamily: "monospace",
                        color: "#555",
                      }}
                    >
                      Full Name:
                    </label>

                    <TextField
                      sx={{
                        boxShadow: 3,
                      }}
                      variant="outlined"
                      value={profileData.name}
                    ></TextField>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25vw",
                    }}
                  >
                    <label
                      style={{
                        padding: 2,
                        fontFamily: "monospace",
                        color: "#555",
                      }}
                    >
                      Email:
                    </label>
                    <TextField
                      sx={{
                        boxShadow: 3,
                      }}
                      variant="outlined"
                      value={profileData.email}
                    ></TextField>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                    mx: 3,
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    mt: 4,
                    mx: 50,
                  }}
                >
                  <label
                    style={{
                      padding: 2,
                      fontFamily: "monospace",
                      color: "#555",
                      width: "190px",
                      borderBottom: "2px solid #333",
                    }}
                  >
                    Update Profile Picture:
                  </label>
                  <input
                    style={{ paddingTop: 10 }}
                    type="file"
                    accept="image/*"
                  />
                </Box>
                <Box
                  sx={{
                    mt: 10,

                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "space-around",
                  }}
                >
                  <Box>
                    <Button
                      startIcon={<SaveRounded />}
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: "#06e406",
                        color: "#333",
                        "&:hover": {
                          bgcolor: "#1cc21c",
                        },
                      }}
                    >
                      Save Changes
                    </Button>
                  </Box>
                </Box>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                veniam excepturi eligendi?
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default UserProfile;
