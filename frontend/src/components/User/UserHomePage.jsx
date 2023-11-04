import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Card, AspectRatio, CardContent, Chip } from "@mui/joy";
import { Link } from "react-router-dom";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import VendorImg from "./assets/vendor.png";
import Banner from "./assets/Advertising.png";
import Footer from "../../layout/Footer.jsx";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

// const limitLength = (text, maxLength) => {
// 	const words = text.trim().split(/\s+/);
// 	if (words.length <= maxLength) {
// 		return text;
// 	}
// 	const truncatedText = words.slice(0, maxLength).join(" ");
// 	return `${truncatedText}...`;
// };

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const UserHomePage = () => {
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
          <Link to="/user/jobs">
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
          Jobs By Catergories
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
              variant="outlined"
              orientation="horizontal"
              sx={{
                width: 320,
                "&:hover": {
                  boxShadow: "md",
                  borderColor: "neutral.outlinedHoverBorder",
                },
              }}
            >
              <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                  src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                  srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <CardContent>
                <Typography level="title-lg" id="card-description">
                  Yosemite Park
                </Typography>
                <Typography
                  level="body-sm"
                  aria-describedby="card-description"
                  mb={1}
                ></Typography>
                <Chip
                  variant="outlined"
                  color="primary"
                  size="sm"
                  sx={{ pointerEvents: "none" }}
                >
                  Cool weather all day long
                </Chip>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Link to="/user/jobs">
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
            <Link to="/user/new-vendor">
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
      <Footer />
    </Box>
  );
};

export default UserHomePage;
