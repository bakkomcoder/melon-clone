import Song from "../models/Song";
import User from "../models/User";

export const home = async (req, res) => {
  const songs = await Song.find({}).sort({ "meta.views": "desc" });
  return res.render("home", { pageTitle: "Home", songs });
};

export const watch = async (req, res) => {
  return res.render("watch", { pageTitle: "Watch" });
};

export const getEdit = async (req, res) => {
  return res.render("edit", { pageTitle: "Edit" });
};

export const postEdit = async (req, res) => {};

export const getUpload = async (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  const song = await Song.create({
    title,
    description,
    hashtags: Song.formatHashtags(hashtags),
    meta: {
      views: 1,
      rating: 0,
    },
  });
  await song.save();
  return res.redirect("/");
  console.log(song);
};

export const remove = async (req, res) => {};

export const search = async (req, res) => {};
