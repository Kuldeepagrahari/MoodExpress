import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

// Set up storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${uuidv4()}${path.extname(file.originalname)}`);
  },
});

// File filter function to restrict file types
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Multer middleware setup with storage and file filter configurations
const uploadMiddleware = multer({ storage, fileFilter });

export default uploadMiddleware;
