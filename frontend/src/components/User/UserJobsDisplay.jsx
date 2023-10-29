import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import OpenInNewRounded from "@mui/icons-material/OpenInNewRounded";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import Chip from "@mui/material-next/Chip";

const cards = [1, 2, 3, 4, 5, 6];

const limitLength = (text, maxLength) => {
  const words = text.split(" ");
  if (words.length <= maxLength) {
    return text;
  }
  const truncatedText = words.slice(0, maxLength).join(" ");
  return `${truncatedText}...`;
};

const UserJobsDisplay = () => {
  return (
    <>
      <Box
        sx={{
          pb: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxHeight: "100%",
        }}
      >
        <Divider
          sx={{
            mt: 4,
            mb: 8,
          }}
          variant="inset"
          textAlign="left"
        >
          <Typography
            sx={{
              color: "black",
              fontFamily: "nunito",
              letterSpacing: "6px",
              marginBottom: "5px",
              fontWeight: "bold",
              textAlign: "left",
            }}
            variant="h4"
          >
            Jobs Popular Today
          </Typography>
          <Divider variant="middle" />
          <Divider variant="middle" />
          <Divider variant="middle" />
          <Divider variant="middle" />
        </Divider>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "80vw",
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
                  display: "flex",
                  boxShadow: 1,
                  border: "1px solid #d8d8d8",
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
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "space-between",
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
                        Software Developer
                      </Typography>
                      <Divider />
                      <Divider />
                      <Divider />
                      <Box>
                        <Typography variant="body2">
                          {limitLength(
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quae asperiores eum cum voluptatibus sint similique, facere ducimus facilis voluptate delectus veniam consequuntur necessitatibus! Aspernatur quod itaque ea consectetur quaerat.",
                            23
                          )}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          gap: 2,
                          pt: 1,
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <Chip
                          color="error"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label="Location"
                        />
                        <Chip
                          color="info"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label="Salary"
                        />
                        <Chip
                          color="warning"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label="Deadline"
                        />
                        <Chip
                          color="success"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label="Posted By"
                        />
                        <Chip
                          color="tertiary"
                          disabled={false}
                          size="small"
                          variant="filled"
                          label="Category"
                        />
                      </Box>
                    </Box>
                    <Box>
                      <IconButton
                        sx={{
                          borderRadius: "50%",
                          "&:hover": { bgcolor: "#1976d2", color: "white" },
                        }}
                      >
                        <OpenInNewRounded />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default UserJobsDisplay;
