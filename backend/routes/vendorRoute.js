const {
  createJob,
  individualVendorJobs,
  deleteJob,
  viewSingleJob,
  myApplicants,
  acceptOrRejectApplicant,
} = require("../controller/vendor/vendorController");

const { isAuthenticated } = require("../middleware/isAuthenticated");

const router = require("express").Router();

router
  .route("/jobs")
  .post(isAuthenticated, createJob)
  .get(isAuthenticated, individualVendorJobs);
router
  .route("/jobs/:id")
  .delete(isAuthenticated, deleteJob)
  .get(isAuthenticated, viewSingleJob);

//application
router.route("/applicants").get(isAuthenticated, myApplicants);
router
  .route("/applicants/action")
  .post(isAuthenticated, acceptOrRejectApplicant);

module.exports = router;
