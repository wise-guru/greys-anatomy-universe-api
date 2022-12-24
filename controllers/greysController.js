const Episode = require("../models/episodeModel");

exports.get_greys_documentation = async (req, res, next) => {
  try {
    return res.render("greys_anatomy", {
      title: "Grey's Anatomy API Documentation",
    });
  } catch (err) {
    return next(err);
  }
};

//------------------------Episode controllers----------------------//

exports.get_greys_episodes = async (req, res, next) => {
  try {
    const greysEpisodes = await Episode.find({ show: "Grey's Anatomy" }).sort([
      ["date", "descending"],
    ]);
    return res.send(greysEpisodes);
  } catch (err) {
    return next(err);
  }
};

exports.get_random_greys_episode = async (req, res, next) => {
  try {
    const episodes = await Episode.find({ show: "Grey's Anatomy" });
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

//Get Grey's Anatomy episode by ID
exports.get_greys_episode_by_id = function (req, res, next) {
  Episode.find({
    show: "Grey's Anatomy",
    _id: req.params.id,
  }).exec(function (err, specificGreysEpisode) {
    if (err) {
      return next(err);
    }
    if (specificGreysEpisode == null) {
      const err = new Error("Grey's Anatomy episode not found");
      err.status = 404;
      return next(err);
    }
    res.json(specificGreysEpisode);
  });
};

//Get Grey's Anatomy episode by title
exports.get_greys_episode_by_title = async (req, res, next) => {
  const { title } = req.query;

  try {
    if (title) {
      const episodes = await Episode.find({ show: "Grey's Anatomy", title });
      if (episodes.length == 0)
        return res.status(404).json({
          message: `No Grey's Anatomy episode with the title '${title}' was found`,
        });
      else return res.status(200).json(episodes);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//Get all episodes for a specific season of this show (Ex. All episodes of Season 6)
exports.get_specific_greys_season = function (req, res, next) {
  Episode.find({ show: "Grey's Anatomy", season: req.params.seasonId }).exec(
    function (err, specificSeason) {
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
    }
  );
};

//To query by season and episode number (e.g. /season-1/episode-4)
exports.get_specific_greys_season_episode = function (req, res, next) {
  Episode.find({
    show: "Grey's Anatomy",
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
