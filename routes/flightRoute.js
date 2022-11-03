const express = require('express');

const router = express.Router();
const { getAllFlight, bookFlight, getById, deleteFlight, updateFlight } = require('../controllers/flightController');

router.route("/").get(getAllFlight).post(bookFlight)
router.route("/:id").get(getById).delete(deleteFlight).put(updateFlight)

module.exports = router;

