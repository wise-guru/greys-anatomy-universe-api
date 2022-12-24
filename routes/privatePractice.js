const express = require("express");
var privatePracticeRouter = express.Router();
const privPracController = require("../controllers/privPracController");

//Get  all episodes
privatePracticeRouter.get(
  "/episodes",
  privPracController.get_private_practice_episodes
);

//Get Random Episode
privatePracticeRouter.get(
  "/episodes/random",
  privPracController.get_random_private_practice_episode
);

//Get Episode by Season Number
privatePracticeRouter.get(
  "/episodes/season-:seasonId",
  privPracController.get_specific_private_practice_season
);

//Get all episodes of a specific season
privatePracticeRouter.get(
  "/episodes/season-:seasonId/episode-:episodeId",
  privPracController.get_specific_private_practice_season_episode
);

//Get Episode by Title
privatePracticeRouter.get(
  "/episodes/title",
  privPracController.get_private_practice_episode_by_title
);

//Get a specific episode by ID
privatePracticeRouter.get(
  "/episodes/:id",
  privPracController.get_private_practice_episode_by_id
);

module.exports = privatePracticeRouter;
