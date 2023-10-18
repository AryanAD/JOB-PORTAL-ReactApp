import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import UserFooter from "./UserFooter";
import VendorImg from "./assets/vendor.png";
import Banner from "./assets/Advertising.png";
import { StarRounded } from "@mui/icons-material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

// const limitLength = (text, maxLength) => {
// 	const words = text.trim().split(/\s+/);
// 	if (words.length <= maxLength) {
// 		return text;
// 	}
// 	const truncatedText = words.slice(0, maxLength).join(" ");
// 	return `${truncatedText}...`;
// };

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

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const UserHomePage = () => {
  const value = 3.5;
  return (
    <Box
      sx={{
        bgcolor: "#fafafa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "1040px",
          width: "1920px",
          flexGrow: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            height: "400px",
            width: "1120px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/user-jobs">
            <Button
              fullwidth
              sx={{
                "&:hover": { bgcolor: "#277aff", color: "white" },
                scale: "2",
              }}
              size="large"
              variant="outlined"
            >
              Find a Job
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            height: "1040px",
            width: "800px",
          }}
        ></Box>
      </Box>
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
          <Grid item key={card} xs={7} sm={7} md={4}>
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
                <Box>
                  <CardMedia
                    gutterBottom
                    sx={{
                      // 16:9
                      width: "130px",
                      height: "130px",
                      border: "4px inset #277aff",
                      borderRadius: "13px",
                    }}
                    image="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  />
                </Box>
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
                    Job Name
                  </Typography>
                  <Box
                    sx={{
                      width: 200,
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
                      to="/user-jobs"
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
      <Link to="/user-jobs">
        <Button
          sx={{
            mt: 10,
            scale: "2",
            bgcolor: "#7ed957",
            "&:hover": { bgcolor: "#00bf63" },
          }}
          size="small"
          variant="contained"
        >
          More Jobs
        </Button>
      </Link>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 10,
          width: "1920px",
          height: "620px",
          backgroundImage: `url(${VendorImg})`,
        }}
      >
        <Box sx={{ width: "900px", height: "620px" }} />
        <Box
          sx={{
            height: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                color: "orangered",
                fontFamily: "nunito",
                letterSpacing: "6px",
                fontWeight: "bold",
                textAlign: "center",
              }}
              variant="h1"
            >
              Need a Freelancer?
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h4"
              sx={{
                color: "black",
                fontFamily: "nunito",
                letterSpacing: "6px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Become a Vendor Today!
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/new-vendor">
              <Button
                sx={{ fontSize: 28 }}
                color="secondary"
                variant="contained"
              >
                Apply for Vendor
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Link to="#" onClick={goToTop}>
        <IconButton
          sx={{
            width: 40,
            height: 40,
            right: 30,
            bottom: 30,
            position: "fixed",
            zIndex: 1000,
            bgcolor: "transparent",
          }}
        >
          <ArrowUpwardRoundedIcon
            sx={{
              color: "black",
            }}
          />
        </IconButton>
      </Link>
      <UserFooter />
    </Box>
  );
};

export default UserHomePage;
