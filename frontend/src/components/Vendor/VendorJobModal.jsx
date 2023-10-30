import {
  Backdrop,
  Box,
  Button,
  Fade,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

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

const VendorJobModal = ({ open, close }) => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("location", location);
      formData.append("salary", salary);
      formData.append("deadline", deadline);
      formData.append("categoryId", category);

      const response = await axios.post(
        "http://localhost:3000/api/vendor/jobs",
        formData,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(formData);
      console.log(response, "re");
      toast.success("Successfully created a job!");
      nav("/vendor/jobs");
    } catch (error) {
      console.error("API request failed: ", error);
    }
  };

  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: backdropStyle,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                margin="normal"
                fullWidth
                label="Job Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                type="text"
                margin="normal"
                fullWidth
                label="Job Description"
                onChange={(e) => setDescription(e.target.value)}
              />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Location"
                    type="text"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Salary"
                    type="number"
                    onChange={(e) => setSalary(e.target.value)}
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
                    onChange={(e) => setDeadline(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Posted By"
                    type="text"
                    onChange={(e) => setPostedBy(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Category"
                    type="text"
                    onChange={(e) => setCategory(e.target.value)}
                  />
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
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default VendorJobModal;
