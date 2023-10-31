import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router";
import {
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  styled,
  tooltipClasses,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

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
const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "11px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const AdminBannersSingle = ({ modalOpen, modalClose }) => {
  return (
    <Box>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={modalOpen}
        onClose={modalClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={style}>
            <CardContent sx={{ width: "100%", height: "100%" }}>
              <CardMedia sx={{ width: "100%", height: "100%" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt="green iguana"
                  src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                />
              </CardMedia>
            </CardContent>
            <CustomToolTip title="Close" placement="top">
              <IconButton
                sx={{
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  "&:hover": { bgcolor: "#f9dedc" },
                }}
                onClick={modalClose}
              >
                <CloseRounded color="error" />
              </IconButton>
            </CustomToolTip>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default AdminBannersSingle;
