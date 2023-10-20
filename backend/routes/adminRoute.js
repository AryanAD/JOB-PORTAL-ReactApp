const {
  changeToVendor,
  getAllVendors,
  getSingleVendor,
  deleteVendor,
  createCategory,
  getAllCategories,
  createBanner,
  getAllBanners,
  deleteBanner,
  deleteCategory,
} = require("../controller/admin/adminController");
const { isAuthenticated, userRole } = require("../middleware/isAuthenticated");

const router = require("express").Router();
const { multer, storage } = require("./../services/multerConfig");
const upload = multer({ storage: storage });

router
  .route("/changeToVendor")
  .post(isAuthenticated, userRole("admin"), changeToVendor);

router.route("/vendors").get(isAuthenticated, userRole("admin"), getAllVendors);
router
  .route("/vendors/:id")
  .get(isAuthenticated, userRole("admin"), getSingleVendor)
  .delete(isAuthenticated, userRole("admin"), deleteVendor);

// category api
router
  .route("/category")
  .post(
    isAuthenticated,
    userRole("admin"),
    upload.single("image"),
    createCategory
  )
  .get(getAllCategories)
  .delete(isAuthenticated, userRole("admin"), deleteCategory);

//banner api
router
  .route("/banner")
  .post(
    isAuthenticated,
    userRole("admin"),
    upload.single("image"),
    createBanner
  )
  .get(isAuthenticated, userRole("admin"), getAllBanners);

router
  .route("/banner/:id")
  .delete(isAuthenticated, userRole("admin"), deleteBanner);

module.exports = router;
