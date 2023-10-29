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
import React from "react";
import { Link } from "react-router-dom";

const UserJobsDisplay = () => {
  return (
    <div>
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
    </div>
  );
};

export default UserJobsDisplay;
