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
import { toast } from "react-toastify";

const UserProfile = ({ childItem }) => {
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
                </List>
              </Box>

              <Box sx={{ pt: 5 }}>
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
              // alignItems: "center",
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
