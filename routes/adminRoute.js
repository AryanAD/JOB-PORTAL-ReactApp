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
const { isAuthenticated } = require("../middleware/isAuthenticated");

const router = require("express").Router();
const { multer, storage } = require("./../services/multerConfig");
const upload = multer({ storage: storage });

router.route("/changeToVendor").post(isAuthenticated, changeToVendor);
router.route("/vendors").get(isAuthenticated, getAllVendors);
router
	.route("/vendors/:id")
	.get(isAuthenticated, getSingleVendor)
	.delete(isAuthenticated, deleteVendor);

// category api
router
	.route("/category")
	.post(isAuthenticated, upload.single("image"), createCategory)
	.get(getAllCategories)
	.delete(isAuthenticated, deleteCategory);

//banner api
router
	.route("/banner")
	.post(isAuthenticated, upload.single("image"), createBanner)
	.get(isAuthenticated, getAllBanners);

router.route("/banner/:id").delete(isAuthenticated, deleteBanner);

module.exports = router;
