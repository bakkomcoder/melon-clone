import Song from "../models/Song";
import User from "../models/User";

export const home = async (req, res) => {
  const songs = await Song.find({});
  return res.render("home", { pageTitle: "Home", songs });
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const song = await Song.findById(id);
  return res.render("watch", { pageTitle: "Watch", song });
};

export const getUpload = async (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const { songTitle, artist, youtubeUrl } = req.body;
  try {
    await Song.create({
      songTitle,
      artist,
      meta: {
        views: 1,
        rating: 0,
      },
    });
    return res.redirect("/");
  } catch (error) {
    return res.status(400).render("upload", {
      pageTitle: "노래 등록",
      errorMessage: error._message,
    });
  }
};

// export const remove = async (req, res) => {};

// export const search = async (req, res) => {};
