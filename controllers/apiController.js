const Episode = require("../models/episodeModel");

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

exports.get_post_comments = async (req, res, next) => {
  try {
    const postComments = await Comment.find({ post: req.params.postId }).sort([
      ["date", "descending"],
    ]);

    return res.send(postComments);
  } catch (err) {
    return next(err);
  }
};

//----------------------Grey's anatomy controllers----------------------//
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

exports.get_specific_greys_season = function (req, res, next) {
  Episode.find({ show: "Grey's Anatomy", season: req.params.seasonId }).exec(
    function (err, specificSeason) {
      console.log(req.params.seasonId);
      if (err) {
        return next(err);
      }
      if (specificSeason == null) {
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
    if (specificEpisode == null) {
      const err = new Error("Season not found");
      err.status = 404;
      return next(err);
    }
    res.json(specificEpisode);
  });
};

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

exports.get_private_practice_episode_by_id = function (req, res, next) {
  Episode.find({
    _id: req.params.id,
  }).exec(function (err, specificEpisode) {
    if (err) {
      return next(err);
    }
    if (specificEpisode == null) {
      const err = new Error("Season not found");
      err.status = 404;
      return next(err);
    }
    res.json(specificEpisode);
  });
};

exports.get_specific_private_practice_season = function (req, res, next) {
  Episode.find({ show: "Private Practice", season: req.params.seasonId }).exec(
    function (err, specificSeason) {
      console.log(req.params.seasonId);
      if (err) {
        return next(err);
      }
      if (specificSeason == null) {
        const err = new Error("Private Practice Episode not found");
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
    if (specificEpisode == null) {
      const err = new Error("Episode not found");
      err.status = 404;
      return next(err);
    }
    res.json(specificEpisode);
  });
};

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

exports.get_station_19_episode_by_id = function (req, res, next) {
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

exports.get_specific_station_19_season = function (req, res, next) {
  Episode.find({ show: "Station 19", season: req.params.seasonId }).exec(
    function (err, specificSeason) {
      console.log(req.params.seasonId);
      if (err) {
        return next(err);
      }
      if (specificSeason == null) {
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
    if (specificEpisode == null) {
      const err = new Error("Station 19 Episode not found");
      err.status = 404;
      return next(err);
    }
    res.json(specificEpisode);
  });
};
