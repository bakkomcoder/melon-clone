import "regenerator-runtime";
import "dotenv/config";

import "./db";
import "./models/Song";
import "./models/User";
import "./models/Playlist";
import app from "./server";

const PORT = process.env.PORT || 4005;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
