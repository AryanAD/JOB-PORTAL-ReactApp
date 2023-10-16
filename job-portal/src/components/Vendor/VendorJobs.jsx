import {
  Box,
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  DeleteRounded as DeleteRoundedIcon,
  AddRounded as AddRoundedIcon,
} from "@mui/icons-material";
import VendorJobModal from "./VendorJobModal";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const limitLength = (text, maxLength) => {
  const words = text.split(" ");
  if (words.length <= maxLength) {
    return text;
  }
  const truncatedText = words.slice(0, maxLength).join(" ");
  return `${truncatedText}...`;
};

const VendorJobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const apiUrl = "http://localhost:3000/api/vendor/jobs";

    axios
      .get(apiUrl, headers:
		{
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        })
      .then((response) => {
        setJobsData(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Placeholder for delete logic
  const handleDelete = (rowIndex) => {
    // Implement your delete logic here
    console.log(`Delete button clicked for row ${rowIndex}`);
  };

  return (
    <>
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
          Jobs
        </Typography>
      </Divider>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "75%",
          }}
        >
          <TableContainer component={Paper}>
            <Table
              size="small"
              sx={{ minWidth: 700 }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      padding: "10px",
                      fontSize: "20px",
                      fontFamily: "monospace",
                      bgcolor: "#29a2f3",
                      borderRadius: "11px 0 0 0",
                    }}
                  >
                    Title
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      padding: "10px",
                      fontSize: "20px",
                      fontFamily: "monospace",
                      bgcolor: "#29a2f3",
                    }}
                    align="center"
                  >
                    Description
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      padding: "10px",
                      fontSize: "20px",
                      fontFamily: "monospace",
                      bgcolor: "#29a2f3",
                    }}
                    align="right"
                  >
                    Location
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      padding: "10px",
                      fontSize: "20px",
                      fontFamily: "monospace",
                      bgcolor: "#29a2f3",
                    }}
                    align="right"
                  >
                    Salary
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      padding: "10px",
                      fontSize: "20px",
                      fontFamily: "monospace",
                      bgcolor: "#29a2f3",
                    }}
                    align="right"
                  >
                    Deadline
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      padding: "10px",
                      fontSize: "20px",
                      fontFamily: "monospace",
                      bgcolor: "#29a2f3",
                    }}
                    align="right"
                  >
                    Posted By
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      padding: "10px",
                      fontSize: "20px",
                      fontFamily: "monospace",
                      bgcolor: "#29a2f3",
                    }}
                    align="right"
                  >
                    Category
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      padding: "20px auto",
                      fontSize: "20px",
                      fontFamily: "monospace",
                      bgcolor: "#29a2f3",
                      borderRadius: "0 11px 0 0",
                    }}
                    align="right"
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.from({ length: 7 }).map((_, rowIndex) => (
                  <StyledTableRow key={rowIndex}>
                    <TableCell scope="row">Software Developer</TableCell>
                    <TableCell component="th" align="right">
                      {limitLength(
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quae asperiores eum cum voluptatibus sint similique, facere ducimus facilis voluptate delectus veniam consequuntur necessitatibus! Aspernatur quod itaque ea consectetur quaerat.",
                        5
                      )}
                    </TableCell>
                    <TableCell align="right">Sundarharaincha-4</TableCell>
                    <TableCell align="right">Rs 130,000</TableCell>
                    <TableCell align="right">2080-10-28</TableCell>
                    <TableCell align="right">Admin Bahadur</TableCell>
                    <TableCell align="right">Tech</TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                      align="right"
                    >
                      <Link to="/vendorjobmodal">
                        <Button
                          size="small"
                          variant="contained"
                          color="success"
                          onClick={handleOpenModal}
                        >
                          <AddRoundedIcon />
                          Add Job
                        </Button>
                      </Link>
                      <Button
                        size="small"
                        variant="contained"
                        color="error"
                        startIcon={<DeleteRoundedIcon />}
                        onClick={() => handleDelete(rowIndex)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <VendorJobModal open={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default VendorJobs;
