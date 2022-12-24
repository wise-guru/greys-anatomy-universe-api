const express = require("express");
var station19Router = express.Router();
const s19Controller = require("../controllers/s19Controller");

//API calls
station19Router.get("/episodes", s19Controller.get_station_19_episodes);

//Get Random Episode
station19Router.get(
  "/episodes/random",
  s19Controller.get_random_station_19_episode
);

station19Router.get(
  "/episodes/season-:seasonId",
  s19Controller.get_specific_station_19_season
);

station19Router.get(
  "/episodes/season-:seasonId/episode-:episodeId",
  s19Controller.get_specific_station_19_season_episode
);

//Get Episode by Title
station19Router.get(
  "/episodes/title",
  s19Controller.get_station_19_episode_by_title
);

station19Router.get(
  "/episodes/:id",
  s19Controller.get_station_19_episode_by_id
);

module.exports = station19Router;
