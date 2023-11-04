/* eslint-disable react/prop-types */
import * as React from "react";
import PropTypes from "prop-types";
import { Backdrop, Box, Modal, Typography } from "@mui/material";

import { useSpring, animated } from "@react-spring/web";
import { apiText } from "../../global/API";
import { useEffect } from "react";
import { useCallback } from "react";

const Fade = React.forwardRef(function Fade(props, ref) {
  const { children, in: open, onClick, onEnter, onExited, ...other } = props;
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
  width: 1400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "11px",
  p: 4,
  display: "flex",
  flexDirection: "column",
};
const UserSingleCategory = ({ modalOpen, modalClose, id }) => {
  console.log(id, "modal ID");
  const [singleCategory, setSingleCategory] = React.useState([]);
  const fetchSingleCategory = useCallback(async () => {
    try {
      const res = await apiText.get(`user/jobs/category/${id}`);
      setSingleCategory(res);
      //   console.log(res, "SingleCategoryModal");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }, [id]);

  useEffect(() => {
    fetchSingleCategory(id);
  }, [fetchSingleCategory, id]);

  console.log(singleCategory);
  return (
    <>
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
            <Typography>Hello World</Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default UserSingleCategory;
