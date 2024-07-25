import Posts from "../model/postSchema.js";

const uploadController = async (req, res) => {
  try {
    const photo = req.file.filename;

    console.log(photo);

    const response = await Posts.create({ photo });

    if (response) {
      res.status(200).json("Uploaded successfully");
    } else {
      res.status(400).json("Upload failed");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal server error");
  }
};

export default uploadController;
