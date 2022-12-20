const Episode = require("../models/episodeModel");

//------------------------------Private Practice Controllers-----------------------------//

exports.get_private_practice_episodes = async (req, res, next) => {
  try {
    const privPracEpisodes = await Episode.find({
      show: "Private Practice",
    }).sort([["date", "descending"]]);
    return res.send(privPracEpisodes);
  } catch (err) {
    return next(err);
  }
};

exports.get_random_private_practice_episode = async (req, res, next) => {
  try {
    const episodes = await Episode.find({ show: "Private Practice" });
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

exports.get_private_practice_episode_by_id = function (req, res, next) {
  Episode.find({
    _id: req.params.id,
  }).exec(function (err, specificEpisode) {
    if (err) {
      return next(err);
    }
    if (specificEpisode == null || specificEpisode.length === 0) {
      const err = new Error("Private Practice episode not found");
      err.status = 404;
      return next(err);
    }
    res.json(specificEpisode);
  });
};

//Get episode by title
exports.get_private_practice_episode_by_title = async (req, res, next) => {
  const { title } = req.query;
  try {
    if (title) {
      const episodes = await Episode.find({ show: "Private Practice", title });
      if (episodes.length == 0)
        return res.status(404).json({
          message: `No Private Practice episode with the title '${title}' was found`,
        });
      else return res.status(200).json(episodes);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.get_specific_private_practice_season = function (req, res, next) {
  Episode.find({ show: "Private Practice", season: req.params.seasonId }).exec(
    function (err, specificSeason) {
      console.log(req.params.seasonId);
      if (err) {
        return next(err);
      }
      if (specificSeason == null) {
        const err = new Error("Private Practice episode not found");
        err.status = 404;
        return next(err);
      }
      res.json(specificSeason);
    }
  );
};

//To query by season and episode number (e.g. /season-1/episode-4)
exports.get_specific_private_practice_season_episode = function (
  req,
  res,
  next
) {
  Episode.find({
    show: "Private Practice",
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
