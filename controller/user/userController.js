const userModel = require("../../model/userModel");
const bcrypt = require("bcryptjs");
const vendorModel = require("../../model/vendorModel");
const jobModel = require("../../model/jobModel");
const appliedJobModel = require("../../model/appliedJobModel");
const sendEmail = require("../../services/sendEmail");
const reviewsModel = require("../../model/reviewsModel");
const Review = require("../../model/reviewsModel");

exports.register = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    if (!name || !email || !password) {
      return res.json({ status: 400, message: "Please enter all fields" });
    }

    const user = await userModel.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10), // Hashing the password
    });
    if (user) {
      return res.json({ status: 200, message: "User registered successfully" });
    } else {
      return res.json({ status: 400, message: "User not registered" });
    }
  } catch (error) {
    res.json({
      status: 400,
      message: error.message,
    });
  }
};

exports.logIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ status: 400, message: "Please enter all fields" });
  }

  const emailExists = await userModel.findOne({
    email,
  });
  console.log(emailExists);
  if (!emailExists) {
    return res.json({ status: 400, message: "Email does not exists" });
  }
  const passwordMatch = await bcrypt.compare(password, emailExists.password);
  console.log(passwordMatch);
  if (!passwordMatch) {
    return res.json({ status: 400, message: "Password does not match" });
  }
  return res.json({
    status: 200,
    message: "Login successful",
    token: emailExists._id,
    emailExists,
  });
};

exports.registerAsVendor = async (req, res) => {
  try {
    const { name, email, designation, service, contact, address } = req.body;
    const user = await userModel.findOne({
      _id: req.userId,
    });
    if (!user) {
      return res.json({ status: 400, message: "User does not exists" });
    }
    const vendor = await vendorModel.create({
      name,
      email,
      designation,
      service,
      contact,
      address,
      userId: req.userId,
    });
    if (vendor) {
      return res.json({
        status: 200,
        message: "Vendor registered successfully",
      });
    } else {
      return res.json({ status: 400, message: "Vendor not registered" });
    }
  } catch (error) {
    res.json({
      status: 400,
      message: error.message,
    });
  }
};

exports.getAllJobs = async (req, res) => {
  // const jobs = await jobModel.find().populate("postedBy");
  // multiple populate
  const jobs = await jobModel
    .find()
    .populate("category")
    .populate({
      path: "postedBy",
      populate: {
        path: "reviews",
      },
    });
  return res.json({ status: 200, jobs });
};
exports.getSingleJob = async (req, res) => {
  const { id } = req.params;

  const jobs = await jobModel
    .find({
      _id: id,
    })
    .populate("category")
    .populate({
      path: "postedBy",
      populate: {
        path: "reviews",
        populate: {
          path: "author",
          select: ["name", "email"],
        },
      },
    });

  // Loop through jobs and calculate the average rating of reviews for each job
  const jobsWithAvgRating = jobs.map((job) => {
    const reviewRatings = job.postedBy.reviews.map((review) => review.rating);
    const avgRating =
      reviewRatings.reduce((total, rating) => total + rating, 0) /
      reviewRatings.length;
    return {
      ...job.toJSON(),
      avgRating,
    };
  });
  return res.json({ status: 200, jobs: jobsWithAvgRating[0] });
};

// get job according to category

exports.getJobByCategories = async (req, res) => {
  const { id } = req.params;

  const jobs = await jobModel
    .find({
      category: id,
    })
    .populate("category")
    .populate({
      path: "postedBy",
      populate: {
        path: "reviews",
        populate: {
          path: "author",
          select: ["name", "email"],
        },
      },
    });

  // Loop through jobs and calculate the average rating of reviews for each job
  const jobsWithAvgRating = jobs.map((job) => {
    const reviewRatings = job.postedBy.reviews.map((review) => review.rating);
    const avgRating =
      reviewRatings.reduce((total, rating) => total + rating, 0) /
      reviewRatings.length;
    return {
      ...job.toJSON(),
      avgRating,
    };
  });

  return res.json({ status: 200, jobs: jobsWithAvgRating });
};

exports.applyJob = async (req, res) => {
  try {
    const { jobId, location, contact } = req.body;
    const cv = req.file.filename;

    const job = await jobModel
      .findOne({
        _id: jobId,
      })
      .populate("postedBy");
    if (!job) {
      return res.json({ status: 400, message: "Job does not exists" });
    }
    const user = await userModel.findOne({
      _id: req.userId,
    });
    if (!user) {
      return res.json({ status: 400, message: "User does not exists" });
    }
    const appliedJob = await appliedJobModel.create({
      jobId,
      userId: req.userId,
      cv,
      location,
      contact,
    });

    if (appliedJob) {
      await sendEmail({
        email: job.postedBy.email,
        subject: "Someone has applied for your job",
        message: "Here is the link to your applicants",
        text: `http://localhost:3000/${cv}`,
      });
      return res.json({ status: 200, message: "Job applied successfully" });
    } else {
      return res.json({ status: 400, message: "Job not applied" });
    }
  } catch (e) {
    console.log(e);
    res.json({
      status: 400,
      message: e.message,
    });
  }
};

exports.rateVendor = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    const review = new Review();
    review.author = req.userId;
    review.message = req.body.message;
    review.rating = req.body.rating;
    user.reviews.push(review);
    await review.save();
    await user.save();
    res.json({ status: 200, message: "Review added successfully" });
  } catch (e) {
    console.log(e);
    res.json({
      status: 400,
      message: e.message,
    });
  }
};

// profile

exports.editProfile = async (req, res) => {
  const image = req.file.filename;
  const user = await userModel.findByIdAndUpdate(req.userId, {
    image: `http://localhost:3000/${image}`,
  });
  if (user) {
    return res.json({ status: 200, message: "Profile updated successfully" });
  } else {
    return res.json({ status: 400, message: "Profile not updated" });
  }
};

exports.getProfile = async (req, res) => {
  const user = await userModel
    .findById(req.userId)
    .populate("reviews")
    .select("-password");
  if (user) {
    return res.json({ status: 200, user });
  } else {
    return res.json({ status: 400, message: "User not found" });
  }
};

exports.getAllAppliedJobs = async (req, res) => {
  try {
    const jobs = await appliedJobModel.find({ userId: req.userId }).populate({
      path: "jobId",
      populate: [{ path: "postedBy" }, { path: "category" }],
    });

    return res.json({ status: 200, jobs });
  } catch (error) {
    return res.json({
      status: 400,
      message: error.message,
    });
  }
};

exports.getSingleAppliedJob = async (req, res) => {
  const { id } = req.params;
  const jobs = await appliedJobModel
    .find({
      _id: id,
    })
    .populate({
      path: "jobId",
      populate: [{ path: "postedBy" }, { path: "category" }],
    });

  return res.json({ status: 200, jobs: jobs[0] });
};
