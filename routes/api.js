var express = require("express");
var apiRouter = express.Router();
const apiController = require("../controllers/apiController");

//Routes for API calls\

// apiRouter.get("/episodes", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

apiRouter.get("/episodes", apiController.get_all_episodes);

apiRouter.get("/all-episodes", apiController.get_all_episodes);

// apiRouter.get("/greys-anatomy", apiController.get_greys_episodes)

module.exports = apiRouter;
