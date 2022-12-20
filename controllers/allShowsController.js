const Episode = require("../models/episodeModel");

//-----------------------------All Shows Controllers----------------------------//

exports.get_all_episodes = async (req, res, next) => {
  try {
    const allEpisodes = await Episode.find().sort([["isoDate", "descending"]]);
    return res.send(allEpisodes);
  } catch (err) {
    return next(err);
  }
};

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

exports.get_specific_season_for_allShows = function (req, res, next) {
  Episode.find({ season: req.params.seasonId }).exec(function (
    err,
    specificSeason
  ) {
    console.log(req.params.seasonId);
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
    season: req.params.seasonId,
    episode: req.params.episodeId,
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
