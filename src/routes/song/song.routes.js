const { Router } = require("express");
const { getSongs, getSongById } = require("../../controllers/songController");

const router = Router();

router.get("/", getSongs);

router.get("/:id", getSongById);

module.exports = router;
