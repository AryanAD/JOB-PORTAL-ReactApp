import {
  AttachMoneyRounded,
  CalendarMonthRounded,
  CheckRounded,
  CloseRounded,
  DeleteForeverRounded,
  LocationOnRounded,
  MoreHorizRounded,
  SupportAgentRounded,
  WorkRounded,
} from "@mui/icons-material";
import { Sheet, Table } from "@mui/joy";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
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
          {/* VendorTable */}
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
              Vendors
            </Typography>
          </Divider>
          <Box>
            <Sheet
              sx={{
                borderRadius: "11px",
                bgcolor: "#29a2f3",
              }}
            >
              <Table
                borderAxis="xBetween"
                color="neutral"
                size="lg"
                stripe="odd"
                variant="soft"
                align="left"
              >
                <thead
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  <tr>
                    <th style={{ width: "50px" }}>ID</th>
                    <th>Name</th>
                    <th>Services</th>
                    <th>Designation</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th style={{ width: "150px" }}>Status</th>
                    <th style={{ textAlign: "center", width: "180px" }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>David Gilmore</td>
                    <td>Guitarist</td>
                    <td>Guitarist</td>
                    <td>gilmore.floyd@wmail.com</td>
                    <td>9877927103</td>
                    <td>House - 4, HouseHouse</td>
                    <td style={{ color: "#138113" }}>Approved</td>
                    <td style={{ textAlign: "center" }}>
                      <Button
                        sx={{ gap: 1 }}
                        color="danger"
                        onClick={function () {}}
                        size="sm"
                        variant="solid"
                      >
                        <DeleteForeverRounded
                          sx={{
                            fontSize: "20px",
                          }}
                        />
                        Delete Vendor
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Sheet>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminHomepage;
