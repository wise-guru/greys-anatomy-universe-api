const Episode = require("../models/episodeModel");

//------------------------------Station 19 Controllers-----------------------------//

exports.get_station_19_episodes = async (req, res, next) => {
  try {
    const station19Episodes = await Episode.find({
      show: "Station 19",
    }).sort([["date", "descending"]]);
    return res.send(station19Episodes);
  } catch (err) {
    return next(err);
  }
};

exports.get_random_station_19_episode = async (req, res, next) => {
  try {
    const episodes = await Episode.find({ show: "Station 19" });
    if (episodes.length == 0)
      return res.status(404).json({
        message: "Database Error. No episodes found. Try again later.",
      });
    else {
      const random = Math.floor(Math.random() * episodes.length);
      res.status(200).json(episodes[random]);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.get_station_19_episode_by_id = function (req, res, next) {
  Episode.find({
    _id: req.params.id,
  }).exec(function (err, specificEpisode) {
    if (err) {
      return next(err);
    }
    if (specificEpisode == null || specificEpisode.length === 0) {
      const err = new Error("Station 19 episode not found");
      err.status = 404;
      return next(err);
    }
    res.json(specificEpisode);
  });
};

//Get episode by title
exports.get_station_19_episode_by_title = async (req, res, next) => {
  const { title } = req.query;
  try {
    if (title) {
      const episodes = await Episode.find({ show: "Station 19", title });
      if (episodes.length == 0)
        return res.status(404).json({
          message: `No Station 19 episode with the title '${title}' was found`,
        });
      else return res.status(200).json(episodes);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.get_specific_station_19_season = function (req, res, next) {
  Episode.find({ show: "Station 19", season: req.params.seasonId }).exec(
    function (err, specificSeason) {
      console.log(req.params.seasonId);
      if (err) {
        return next(err);
      }
      if (specificSeason == null || specificSeason.length === 0) {
        const err = new Error("Station 19 episode not found");
        err.status = 404;
        return next(err);
      }
      res.json(specificSeason);
    }
  );
};

//To query by season and episode number (e.g. /season-1/episode-4)
exports.get_specific_station_19_season_episode = function (req, res, next) {
  Episode.find({
    show: "Station 19",
    season: req.params.seasonId,
    episode: req.params.episodeId,
  }).exec(function (err, specificEpisode) {
    if (err) {
      return next(err);
    }
    if (specificEpisode == null || specificEpisode.length === 0) {
      const err = new Error("Station 19 episode not found");
      err.status = 404;
      return next(err);
    }
    res.json(specificEpisode);
  });
};
