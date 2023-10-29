import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { StarRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";

const cards = [1, 2, 3, 4, 5, 6];

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const UserJobsDisplay = () => {
  const value = 4.5;
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
            <Grid item key={card} xs={7} sm={3} md={7}>
              <Card
                sx={{
                  height: "100%",
                  maxWidth: "24vw",
                  display: "flex",
                  bgcolor: "#e9e9e9",
                  boxShadow: 24,
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
                    <Box sx={{ maxWidth: "60vw" }}>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta reiciendis expedita nostrum optio error culpa
                        asperiores enim deleniti. Nobis reiciendis placeat enim
                        quod repellat odit magnam eligendi architecto facilis
                        similique.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarRounded
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                    </Box>
                    <CardActions>
                      <Link
                        style={{
                          width: "100%",
                        }}
                        to="/user/jobs"
                      >
                        <Button
                          sx={{
                            my: 0.5,
                            color: "black",
                            "&:hover": { bgcolor: "#277aff", color: "white" },
                          }}
                          fullWidth
                          variant="outlined"
                          size="medium"
                        >
                          More Info
                        </Button>
                      </Link>
                    </CardActions>
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
