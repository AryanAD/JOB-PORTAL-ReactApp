import {
  Backdrop,
  Box,
  Button,
  Fade,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white", // Adjust the background color of the modal itself here
  borderRadius: "13px",
  boxShadow: 24,
  p: 4,
};

const backdropStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust the background color and opacity of the backdrop here
};

const VendorJobModal = ({ open, close }) => {
  const nav = useNavigate();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: backdropStyle, // Apply the backdrop style here
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <TextField
              type="text"
              margin="normal"
              fullWidth
              label="Job Title"
            />
            <TextField
              type="text"
              margin="normal"
              fullWidth
              label="Job Description"
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Location"
                  type="text"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Salary"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Deadline"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Posted By"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select label="Category">
                    <MenuItem value="Tech">Tech</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Button
              color="success"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(nav("/vendor/jobs"), close)}
            >
              <AddRoundedIcon />
              Add Job
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default VendorJobModal;
