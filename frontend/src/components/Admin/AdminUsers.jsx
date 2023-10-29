import { Button, CardContent } from "@mui/joy";
import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import {
  CheckRounded,
  CloseRounded,
  MoreHorizRounded,
  SupportAgentRounded,
  WorkRounded,
} from "@mui/icons-material";
import Chip from "@mui/material-next/Chip";

const cards = [1, 2, 3, 4, 5, 6];
const AdminUsers = () => {
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
          Vendor Applicants
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
            <Grid item key={card} xs={7} sm={3} md={6}>
              <Card
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  boxShadow: "20px 20px 20px rgba(150, 150, 150, 0.1)",
                  border: "1px solid whitesmoke",
                  borderRadius: 3,
                }}
              >
                <CardContent
                  sx={{
                    gap: 2,
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      //   width: "100%",
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
                          color: "#444",
                          fontFamily: "monospace",
                        }}
                        component="h2"
                      >
                        User Name
                      </Typography>
                      <Divider />
                      <Divider />
                      <Divider />
                      <Box
                        sx={{
                          py: 2,
                          color: "gray",
                          fontFamily: "monospace",
                          width: "400px",
                        }}
                      >
                        <Typography variant="body">
                          user@email.com | user.contact | user.address
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          gap: 2,
                          pt: 1,
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <Chip
                          icon={<WorkRounded />}
                          disabled={false}
                          size="small"
                          variant="outlined"
                          label="Designation"
                        />
                        <Chip
                          icon={<SupportAgentRounded />}
                          disabled={false}
                          size="small"
                          variant="outlined"
                          label="Service"
                        />
                        <Chip
                          icon={<MoreHorizRounded />}
                          color="warning"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label="Status"
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        gap: 2,
                        pt: 5,
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        fullWidth
                        sx={{
                          color: "green",
                          "&:hover": { bgcolor: "#a0f5d1" },
                        }}
                        startIcon={<CheckRounded />}
                      >
                        Approve
                      </Button>
                      <Button
                        fullWidth
                        sx={{
                          color: "red",
                          "&:hover": { bgcolor: "#ffd8e4" },
                        }}
                        startIcon={<CloseRounded />}
                      >
                        Reject
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default AdminUsers;
