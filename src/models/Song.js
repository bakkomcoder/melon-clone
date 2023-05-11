import mongoose from "mongoose";
import fs from "fs/promises"; // fs(file system).promise API : 다른 비동기 파일 시스템 제공

const songSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 80 },
  artist: { type: String, required: true },
  albumTitle: { type: String, required: true },
  albumImg: { type: String },
  src: { type: String },
  meta: {
    play: { type: Number, required: true },
    likes: { type: Number, required: true },
  },
});

const Song = mongoose.model("Song", songSchema);

const dataFilePath = "src/models/data/Song.json";
async function saveData() {
  const data = JSON.parse(await fs.readFile(dataFilePath));
  data.map((i) => {
    Song.create(i, (error) =>
      error ? console.log(error) : console.log("Data inserted successfully")
    );
  });
}

async function deleteData() {
  Song.deleteMany({}, (err) =>
    err ? console.log(err) : console.log("Data cleared successfully!")
  );
}

// saveData();

export default Song;
