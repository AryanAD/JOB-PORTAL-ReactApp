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
import { toast } from "react-toastify";
import { apiImage } from "../../global/API";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  borderRadius: "13px",
  boxShadow: 24,
  p: 4,
};

const backdropStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.2)",
};

const UserJobsModal = ({ modalOpen, modalClose }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.currentTarget);
      let formData = {
        title: data.get("title"),
        description: data.get("description"),
        location: data.get("location"),
        salary: data.get("salary"),
        deadline: data.get("deadline"),
        postedBy: data.get("postedBy"),
        category: data.get("category"),
      };

      const response = await apiImage.post("user/jobs/apply", formData);
      console.log(formData, "inside .post");
      console.log(response, "re");
      toast.success("Successfully Approved Application");
      fetchData();
    } catch (error) {
      console.error("API request failed: ", error);
    }
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={modalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: backdropStyle,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <TextField
                type="text"
                margin="normal"
                fullWidth
                label="Job Title"
                // name={title}
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
                onClick={modalClose}
              >
                <AddRoundedIcon />
                Add Job
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default UserJobsModal;
