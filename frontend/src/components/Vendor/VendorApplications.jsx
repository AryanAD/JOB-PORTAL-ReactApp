import {
  Box,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import { CloseRounded, DoneRounded } from "@mui/icons-material";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "gray",
    color: "white",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(18),
    border: "1px solid #dadde9",
    borderRadius: "7px",
  },
}));

const VendorApplications = () => {
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
          Applications
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
            width: "55%",
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
                      // width: "50px",
                      fontWeight: "bold",
                      padding: "10px",
                      fontSize: "20px",
                      fontFamily: "monospace",
                      bgcolor: "#29a2f3",
                      borderRadius: "11px 0 0 0",
                    }}
                  >
                    Job ID
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
                    User ID
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
                    Status
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
                    CV
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
                    Contact
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
                    <TableCell scope="row">J8EH90-JH83</TableCell>
                    <TableCell component="th" align="right">
                      J1US8
                    </TableCell>
                    <TableCell align="right">Approved</TableCell>
                    <TableCell align="right">
                      <>Download CV</>
                    </TableCell>
                    <TableCell align="right">Home-2</TableCell>
                    <TableCell align="right">985654952</TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                      align="right"
                    >
                      <CustomToolTip title="Approve" placement="left">
                        <IconButton color="success">
                          <DoneRounded />
                        </IconButton>
                      </CustomToolTip>
                      <CustomToolTip title="Reject" placement="right">
                        <IconButton color="error">
                          <CloseRounded />
                        </IconButton>
                      </CustomToolTip>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default VendorApplications;
