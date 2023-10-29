import {
  CheckRounded,
  DeleteRounded,
  SupportAgentRounded,
  WorkRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import AdminUsers from "./AdminUsers";
import Chip from "@mui/material-next/Chip";

const cards = [1, 2, 3, 4, 5, 6];

const AdminHomepage = () => {
  return (
    <>
      <Box
        sx={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "84vw",
            gap: 5,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
          }}
        >
          {/* Users */}
          <AdminUsers />
          {/* VendorTable */}
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
              {cards.map((card) => (
                <Grid item key={card} xs={7} sm={5} md={4}>
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
                        // flexGrow: 1,
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
                            User Name
                          </Typography>

                          <Box
                            sx={{
                              color: "gray",
                              fontFamily: "monospace",
                              textAlign: "center",
                            }}
                          >
                            <Typography variant="body">
                              email@email.com
                            </Typography>
                            <Divider variant="middle" />
                            <Divider variant="middle" />
                            <Divider variant="middle" />
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
                              color="error"
                              icon={<WorkRounded />}
                              disabled={false}
                              size="small"
                              variant="filled"
                              label="Designation"
                            />
                            <Chip
                              color="warning"
                              icon={<SupportAgentRounded />}
                              disabled={false}
                              size="small"
                              variant="filled"
                              label="Service"
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
                            Address:
                          </Typography>
                          <Typography sx={{ fontFamily: "monospace" }}>
                            Contact:
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
                            icon={<CheckRounded />}
                            color="success"
                            disabled={false}
                            size="medium"
                            variant="elevated"
                            label="Approved"
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
                          >
                            Delete Vendor
                          </Button>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminHomepage;
