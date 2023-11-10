import { Box } from "@mui/material";

const UserViewSingleJob = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "100vh",
            boxShadow: 12,
            border: "2px solid whitesmoke",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
      </Box>
    </>
  );
};

export default UserViewSingleJob;
