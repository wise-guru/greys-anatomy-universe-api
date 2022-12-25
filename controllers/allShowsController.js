const Episode = require("../models/episodeModel");

exports.get_allShows_documentation = async (req, res, next) => {
  try {
    return res.render("all_shows", {
      title: "All Shows API Documentation",
    });
  } catch (err) {
    return next(err);
  }
};

//-----------------------------All Shows Episode API Controllers----------------------------//

//Returns all episodes of every show
exports.get_all_episodes = async (req, res, next) => {
  try {
    const allEpisodes = await Episode.find().sort([["isoDate", "descending"]]);
    return res.send(allEpisodes);
  } catch (err) {
    return next(err);
  }
};

//Return random episode of any show
exports.get_random_episode = async (req, res, next) => {
  try {
    const episodes = await Episode.find();
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

//Get any episode of any show by the _id
exports.get_any_episode_by_id = function (req, res, next) {
  Episode.find({
    _id: req.params.id,
  }).exec(function (err, specificEpisode) {
    if (err) {
      return next(err);
    }
    if (specificEpisode == null) {
      const err = new Error("Episode not found");
      err.status = 404;
      return next(err);
    }
    res.json(specificEpisode);
  });
};

//Get any episode of any show by title
exports.get_any_episode_by_title = async (req, res, next) => {
  const { title } = req.query;
  try {
    if (title) {
      const episodes = await Episode.find({ title });
      if (episodes.length == 0)
        return res.status(404).json({
          message: `No episode with the title '${title}' was found`,
        });
      else return res.status(200).json(episodes);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//Get the season of a specific number for every show (Ex. Season 1 of all shows)
exports.get_specific_season_for_allShows = function (req, res, next) {
  Episode.find({ season: req.params.seasonNumber }).exec(function (
    err,
    specificSeason
  ) {
    console.log(req.params.seasonNumber);
    if (err) {
      return next(err);
    }
    if (specificSeason == null || specificSeason.length === 0) {
      const err = new Error("Season not found");
      err.status = 404;
      return next(err);
    }
    res.json(specificSeason);
  });
};

//To query by a season and episode number for all shows at once (e.g. /season-1/episode-4)
exports.get_specific_season_episode_for_allShows = function (req, res, next) {
  Episode.find({
    season: req.params.seasonNumber,
    episode: req.params.episodeNumber,
  }).exec(function (err, specificEpisode) {
    if (err) {
      return next(err);
    }
    if (specificEpisode == null || specificEpisode.length === 0) {
      const err = new Error("Episode not found");
      err.status = 404;
      return next(err);
    }
    res.json(specificEpisode);
  });
};
