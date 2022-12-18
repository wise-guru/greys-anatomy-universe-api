const express = require("express");
var greysRouter = express.Router();
const apiController = require("../controllers/apiController");

//API calls
greysRouter.get("/episodes", apiController.get_greys_episodes);

greysRouter.get(
  "/episodes/season-:seasonId",
  apiController.get_specific_greys_season
);

greysRouter.get(
  "/episodes/season-:seasonId/episode-:episodeId",
  apiController.get_specific_greys_season_episode
);

greysRouter.get("/episodes/:id", apiController.get_greys_episode_by_id);

module.exports = greysRouter;
