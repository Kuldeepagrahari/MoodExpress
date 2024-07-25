import { model, Schema } from "mongoose";

const uploadSchema = new Schema({
  photo: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Posts = model("Post", uploadSchema);
export default Posts;
