const {
  createJob,
  individualVendorJobs,
  deleteJob,
  viewSingleJob,
  myApplicants,
  acceptOrRejectApplicant,
} = require("../controller/vendor/vendorController");

const { isAuthenticated, userRole } = require("../middleware/isAuthenticated");

const router = require("express").Router();

router
  .route("/jobs")
  .post(isAuthenticated, userRole("vendor"), createJob)
  .get(individualVendorJobs);
router
  .route("/jobs/:id")
  .delete(isAuthenticated, userRole("vendor"), deleteJob)
  .get(viewSingleJob);

//application
router.route("/applicants").get(myApplicants);
router
  .route("/applicants/action")
  .post(isAuthenticated, userRole("vendor"), acceptOrRejectApplicant);

module.exports = router;
