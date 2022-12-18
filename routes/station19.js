const express = require("express");
var station19Router = express.Router();
const apiController = require("../controllers/apiController");

//API calls
station19Router.get("/episodes", apiController.get_station_19_episodes);

station19Router.get(
  "/episodes/season-:seasonId",
  apiController.get_specific_station_19_season
);

station19Router.get(
  "/episodes/season-:seasonId/episode-:episodeId",
  apiController.get_specific_station_19_season_episode
);

station19Router.get(
  "/episodes/:id",
  apiController.get_station_19_episode_by_id
);

module.exports = station19Router;
