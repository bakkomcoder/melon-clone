import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  remove,
} from "../controllers/songController";

const songRouter = express.Router();

songRouter.get("/:id([0-9a-f]{24})", watch);
songRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
songRouter.route("/upload").get(getUpload).post(postUpload);
songRouter.get("/delete", remove);

export default songRouter;
