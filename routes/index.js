var express = require("express");
var router = express.Router();
var greysController = require("../controllers/greysController");
var privPracController = require("../controllers/privPracController");
var s19Controller = require("../controllers/s19Controller");
var allShowsController = require("../controllers/allShowsController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Grey's Anatomy Universe API" });
});

// Documentation Routes
router.get("/all-shows", allShowsController.get_allShows_documentation);

router.get("/greys-anatomy", greysController.get_greys_documentation);

router.get(
  "/private-practice",
  privPracController.get_private_practice_documentation
);

router.get("/station-19", s19Controller.get_station_19_documentation);

module.exports = router;
