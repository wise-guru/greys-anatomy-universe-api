const express = require("express");
var greysRouter = express.Router();
const greysController = require("../controllers/greysController");
const Episode = require("../models/episodeModel");

//Get all episodes
greysRouter.get("/episodes", greysController.get_greys_episodes);

//Get Random Episode
greysRouter.get("/episodes/random", greysController.get_random_greys_episode);

//Get Episode by season
greysRouter.get(
  "/episodes/season-:seasonId",
  greysController.get_specific_greys_season
);

//Get episode by season and episode number
greysRouter.get(
  "/episodes/season-:seasonId/episode-:episodeId",
  greysController.get_specific_greys_season_episode
);

//Get Episode by Title
greysRouter.get("/episodes/title", greysController.get_greys_episode_by_title);

//Get Episode by ID
greysRouter.get("/episodes/:id", greysController.get_greys_episode_by_id);

module.exports = greysRouter;
