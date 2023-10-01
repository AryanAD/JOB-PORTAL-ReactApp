const express = require("express");
const {
  register,
  logIn,
  registerAsVendor,
  getAllJobs,
  getSingleJob,
  getJobByCategory,
  getJobByCategories,
  applyJob,
  rateVendor,
  editProfile,
  getProfile,
  getAllAppliedJobs,
  getSingleAppliedJob,
} = require("../controller/user/userController");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const router = express.Router();
const { multer, storage } = require("./../services/multerConfig");
const { paymentVerify } = require("../services/khaltiPayment");
const upload = multer({ storage: storage });

router.route("/register").post(register);
router.route("/login").post(logIn);
router.route("/registerAsVendor").post(isAuthenticated, registerAsVendor);

//jobs

router.route("/jobs").get(getAllJobs);
router.route("/jobs/:id").get(getSingleJob);

router.route("/jobs/category/:id").get(getJobByCategories);

// apply job

router
  .route("/jobs/apply")
  .post(isAuthenticated, upload.single("cv"), applyJob);

router.route("/appliedJobs").get(isAuthenticated, getAllAppliedJobs);
router.route("/appliedJobs/:id").get(isAuthenticated, getSingleAppliedJob);

//rating
router.route("/rate/:id").post(isAuthenticated, rateVendor);

//profile
router
  .route("/profile")
  .patch(isAuthenticated, upload.single("image"), editProfile)
  .get(isAuthenticated, getProfile);

// khalti

router.route("/pay").post(isAuthenticated, paymentVerify);

module.exports = router;
