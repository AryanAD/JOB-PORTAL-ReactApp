/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { apiImage } from "../../global/API";

const UserProfile = ({ childItem }) => {
  const [profileData, setProfileData] = useState([]);

  const fetchProfileData = useCallback(async () => {
    try {
      let res = await apiImage.get("user/profile");
      setProfileData(res.data.user);
      console.log(res.data.user);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }, []);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

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
                flexDirection: "column",
                width: "18vw",
                height: "100%",
                margin: 0,
                padding: 0,
                borderRadius: "11px",
                boxShadow: "11",
              }}
            >
              <Box sx={{ pt: 3, my: "auto", mt: 0 }}>
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
                      to="/user/profile/edit-profile"
                    >
                      <ListItemButton
                        sx={{
                          fontFamily: "monospace",
                          fontSize: "18px",
                          py: 2,
                        }}
                        // onClick={() => {}}
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
                      to="/user/profile/applied-jobs"
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
                  <ListItem>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        width: "100%",
                      }}
                      to="/user/profile/applied-jobs"
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

              <Divider variant="fullWidth" />

              <Box sx={{ my: "auto" }}>
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
                        Rate A Vendor
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
                        Job Categories
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
              width: "60vw",
              height: "100vh",
            }}
          >
            <Box
              sx={{
                display: "flex",
                margin: 5,
                borderRadius: "11px",
                width: "57vw",
                padding: 2,
                boxShadow: 9,
                height: "100vh",
              }}
            >
              {childItem}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default UserProfile;
