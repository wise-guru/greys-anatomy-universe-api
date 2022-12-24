var express = require("express");
var allShowsRouter = express.Router();
const allShowsController = require("../controllers/allShowsController");

allShowsRouter.get("/episodes", allShowsController.get_all_episodes);

// allShowsRouter.get("/all-episodes", allShowsController.get_all_episodes);

//Get Random Episode
allShowsRouter.get("/episodes/random", allShowsController.get_random_episode);

//Get Episode by season
allShowsRouter.get(
  "/episodes/season-:seasonNumber",
  allShowsController.get_specific_season_for_allShows
);
//Get episode by season and episode number
allShowsRouter.get(
  "/episodes/season-:seasonNumber/episode-:episodeNumber",
  allShowsController.get_specific_season_episode_for_allShows
);

//Get Episode by Title
allShowsRouter.get(
  "/episodes/title",
  allShowsController.get_any_episode_by_title
);

//Get Episode by ID
allShowsRouter.get("/episodes/:id", allShowsController.get_any_episode_by_id);

module.exports = allShowsRouter;
