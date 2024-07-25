import express from "express"
const uploadRouter = express.Router()
import uploadMiddleware from "../middleware/multerMiddleware.js"
import uploadController from "../controller/uploadController.js"
import imagesController from "../controller/imagesController.js"
uploadRouter.route("/").get((req,res)=>{
    res.send("hi sam")
})

uploadRouter.route("/upload").post(uploadMiddleware.single("photo"), uploadController)

uploadRouter.route("/images").get(imagesController)



export default uploadRouter