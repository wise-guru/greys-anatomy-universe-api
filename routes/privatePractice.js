const express = require("express");
var privatePracticeRouter = express.Router();
const apiController = require("../controllers/apiController");

//API calls
privatePracticeRouter.get(
  "/episodes",
  apiController.get_private_practice_episodes
);

privatePracticeRouter.get(
  "/episodes/season-:seasonId",
  apiController.get_specific_private_practice_season
);

privatePracticeRouter.get(
  "/episodes/season-:seasonId/episode-:episodeId",
  apiController.get_specific_private_practice_season_episode
);

privatePracticeRouter.get(
  "/episodes/:id",
  apiController.get_private_practice_episode_by_id
);

module.exports = privatePracticeRouter;
