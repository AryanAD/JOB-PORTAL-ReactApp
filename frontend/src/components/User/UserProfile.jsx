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
            margin: 2,
            display: "flex",
            width: "80%",
            height: "100%",
          }}
        >
          {/* left */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "20vw",
              height: "100%",
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
                height: "40vh",
                boxShadow: "11",
                pt: 2,
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
                display: "flex",
                flexDirection: "column",
                width: "18vw",
                height: "50vh",
                margin: 0,
                padding: 0,
                borderRadius: "11px",
                boxShadow: "11",
              }}
            >
              <Box sx={{ pt: 3 }}>
                <Divider>
                  <Divider>
                    <Divider>
                      <Typography
                        variant="h5"
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          fontFamily: "monospace",
                          fontWeight: "bolder",
                          color: "#555",
                        }}
                      >
                        Profile Actions
                      </Typography>
                    </Divider>
                  </Divider>
                </Divider>

                <List>
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
                          fontFamily: "monospace",
                          fontSize: "18px",
                          py: 2,
                        }}
                      >
                        Edit Profile
                      </ListItemButton>
                    </Link>
                  </ListItem>

                  <ListItem>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        width: "100%",
                      }}
                      to="/user/new-vendor"
                    >
                      <ListItemButton
                        sx={{
                          fontFamily: "monospace",
                          fontSize: "18px",
                          py: 2,
                        }}
                      >
                        Applied Jobs
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              </Box>

              <Box sx={{ pt: 3 }}>
                <Divider>
                  <Divider>
                    <Divider>
                      <Typography
                        variant="h5"
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          fontFamily: "monospace",
                          fontWeight: "bolder",
                          color: "#555",
                        }}
                      >
                        Quick Links
                      </Typography>
                    </Divider>
                  </Divider>
                </Divider>

                <List>
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
                          fontFamily: "monospace",
                          fontSize: "18px",
                          py: 2,
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
                        color: "#000",
                        width: "100%",
                      }}
                      to="/user/new-vendor"
                    >
                      <ListItemButton
                        sx={{
                          fontFamily: "monospace",
                          fontSize: "18px",
                          py: 2,
                        }}
                      >
                        Apply For Vendor
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              </Box>
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
