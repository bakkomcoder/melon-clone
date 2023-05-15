import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 1,
    maxLength: 10,
  },
  email: { type: String, required: true, unique: true },
  avatarUrl: String,
  password: { type: String, required: true, minLength: 4 },
  createdAt: { type: Date, required: true, default: Date.now },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);

export default User;
