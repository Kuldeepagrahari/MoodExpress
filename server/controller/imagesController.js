import Posts from "../model/postSchema.js"
const imagesController = async (req, res) => {
    try{
        const response = await Posts.find().sort({createdAt:-1})
         console.log(response)
        if(response){
            
            res.status(200).json(response)
        }else{
            res.status(400).json("error in fetching images")
        }

    }catch(err){
        
    }
}
export default imagesController