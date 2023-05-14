import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  songTitle: { type: String, required: true, maxlength: 80 },
  artist: { type: String, required: true },
  coverUrl: {
    type: String,
    default: "/public/client/img/defaultSongCover.jpeg",
  },
  createdAt: { type: Date, required: true, default: Date.now },
  meta: {
    views: { type: Number, default: 0, required: true },
    likes: { type: Number, default: 0, required: true },
  },
});

const Song = mongoose.model("Song", songSchema);

export default Song;
