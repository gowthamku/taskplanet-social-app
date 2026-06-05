const express = require("express");
const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const {
  createPost,
  getPosts,
  likePost,
  commentPost,
} = require("../controllers/postcontroller");

const router = express.Router();

router.post(
  "/",
  protect,
  upload.single("image"),
  createPost
);

router.get("/", getPosts);

router.put("/like/:id", protect, likePost);

router.post("/comment/:id", protect, commentPost);

module.exports = router;