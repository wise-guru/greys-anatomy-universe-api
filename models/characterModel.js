const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    char_id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    born: {
      type: String,
      required: true,
    },
    occupation: {
      type: Array,
      required: true,
    },

    img: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    firstAppearance: {
      type: String,
      required: true,
    },
    lastAppearance: {
      type: String,
      required: false,
    },
    nickname: {
      type: Array,
      required: true,
    },
    portrayed: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
