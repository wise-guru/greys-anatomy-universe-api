// function scrolltoElement() {
const allEpisodes = document.querySelector("#all-episodes");
const specificSeason = document.querySelector("#specific-season");
const randomEpisode = document.querySelector("#random-episode");
const episodeId = document.querySelector("#episode-id");
const episodeTitle = document.querySelector("#episode-title");
const episodeSeasonEpisode = document.querySelector("#season-episode-number");

const allEpisodesLink = document.querySelector("#all-episodes-link");
const specificSeasonLink = document.querySelector("#specific-season-link");
const randomEpisodeLink = document.querySelector("#random-episode-link");
const episodeIdLink = document.querySelector("#episode-id-link");
const episodeTitleLink = document.querySelector("#episode-title-link");
const episodeSeasonEpisodeLink = document.querySelector(
  "#season-episode-number-link"
);

allEpisodesLink.addEventListener("click", function () {
  allEpisodes.scrollIntoView();
  console.log("all episodes");
});

specificSeasonLink.addEventListener("click", function () {
  specificSeason.scrollIntoView();
});

randomEpisodeLink.addEventListener("click", function () {
  randomEpisodeLink.scrollIntoView();
});

episodeIdLink.addEventListener("click", function () {
  episodeIdLink.scrollIntoView();
});

episodeTitleLink.addEventListener("click", function () {
  episodeTitle.scrollIntoView();
});

episodeSeasonEpisodeLink.addEventListener("click", function () {
  episodeSeasonEpisode.scrollIntoView();
  console.log("episode season number");
});

//   if (e === "all-episodes") {
//     allEpisodes.scrollIntoView();
//   } else if (e === "specific-season") {
//     specificSeason.scrollIntoView();
//     console.log("specific season");
//   } else if (e === "random-episode") {
//     randomEpisode.scrollIntoView();
//     console.log("Random episode");
//   } else if (e === "episode-id") {
//     episodeId.scrollIntoView();
//     console.log("Episode ID");
//   } else if (e === "episode-title") {
//     episodeTitle.scrollIntoView();
//     console.log("episode title");
//   } else if (e === "season-episode-number") {
//     episodeSeasonEpisode.scrollIntoView();
//     console.log("season episode number");
//   }
// }
