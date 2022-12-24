const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  airDate: { type: String, required: true },
  show: { type: String, required: true, minLength: 1, maxLength: 50 },
  season: { type: String, data: Buffer, default: "nomad.jpg", required: false },
  episode: { type: String, required: true },
  title: { type: String, required: true },
  directedBy: { type: String, required: true },
  writtenBy: { type: String, required: true },
  // isoDate: { type: Date, required: true },
  // description: { type: Schema.Types.ObjectId },
});

const Episode = mongoose.model("Episode", PostSchema);

module.exports = Episode;
