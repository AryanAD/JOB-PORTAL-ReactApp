import {
  Avatar,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const UserProfile = () => {
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
                alt="Remy Sharp"
                src="https://i.discogs.com/SITk5YC38UEY6SIcDrveDUW4kOcbKk1tk15ZjnI7fK0/rs:fit/g:sm/q:90/h:450/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI3MzU0/NC0xNjExOTYyNzEx/LTg3NjguanBlZw.jpeg"
                sx={{ width: 190, height: 190, border: "2px solid #333" }}
              />
              <Typography
                sx={{
                  fontFamily: "Dank Mono",
                  fontWeight: "bolder",
                  color: "#555",
                }}
                variant="h4"
              >
                Angus Young
              </Typography>
            </Box>
            <Box
              sx={{
                boxShadow: "9",
                display: "flex",
                borderRadius: "11px",
                width: "18vw",
                height: "56vh",
              }}
            ></Box>
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
                    width: "55vw",
                  }}
                >
                  <Typography sx={{ fontFamily: "monospace" }} variant="h3">
                    My Profile
                  </Typography>
                  <Link to="/">
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
                <Divider variant="inset" sx={{ bgcolor: "#1976D2" }} />
                <Divider variant="inset" sx={{ bgcolor: "#1976D2" }} />
                <Divider variant="inset" sx={{ bgcolor: "#1976D2" }} />
                <Divider variant="inset" sx={{ bgcolor: "#1976D2" }} />
                <Box
                  sx={{
                    width: "55vw",
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
                      value="Angus Young"
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
                      value="acangusdcyoung@gmail.com"
                    ></TextField>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "55vw",
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
                      Password:
                    </label>
                    <TextField
                      sx={{
                        boxShadow: 3,
                      }}
                      variant="outlined"
                      value="AC/DC@angusy0un6"
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
                      Confirm Password:
                    </label>
                    <TextField
                      sx={{
                        boxShadow: 3,
                      }}
                      variant="outlined"
                      value="AC/DC@angusy0un6"
                    ></TextField>
                  </Box>
                </Box>
                <Box
                  sx={{
                    mt: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <label
                    style={{
                      padding: 2,
                      fontFamily: "monospace",
                      color: "#555",
                    }}
                  >
                    Edit Avatar:
                  </label>
                  <TextField
                    sx={{
                      width: "40%",
                      boxShadow: 3,
                    }}
                    variant="outlined"
                    value="AC/DC@angusy0un6"
                  ></TextField>
                </Box>
                <Box
                  sx={{
                    mt: 30,
                    width: "55vw",
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "space-around",
                  }}
                >
                  <Box sx={{ width: "30px" }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: "#06e406",
                      }}
                    >
                      a
                    </Button>
                  </Box>
                  <Box>
                    <Button>a</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default UserProfile;
