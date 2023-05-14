import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  coverUrl: { type: String, default: "None" },
  createdAt: { type: Date, required: true, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  songs: { type: mongoose.Schema.Types.ObjectId, ref: "Song" },
});
