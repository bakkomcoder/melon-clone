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

// export const home = async (req, res) => {
//   try {
//     const songsTop10 = await Song.find({}).sort({ "meta.play": "desc" });
//     return res.render("home", { pageTitle: "HOME", songsTop10 });
//   } catch (error) {
//     console.log(error);
//     return res.send("Error");
//   }
// };

// export const home = async (req, res) => {
//   const songs = await Song.find({}).sort({ "meta.play": "desc" });
//   return res.render("home", { pageTitle: "Home", songs });
// };

// export const getEdit = async (req, res) => {
//   return res.render("edit", { pageTitle: "Edit" });
// };

// export const postEdit = async (req, res) => {};

export const getUpload = async (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const { songTitle, artist, youtubeUrl } = req.body;
  const song = await Song.create({
    songTitle,
    artist,
    meta: {
      views: 1,
      rating: 0,
    },
  });
  await song.save();
  return res.redirect("/");
  console.log(song);
};

// export const remove = async (req, res) => {};

// export const search = async (req, res) => {};
