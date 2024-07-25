import mongoose from "mongoose";

// mongoose.connect()

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDb connected")

    }catch(err){
        console.log('error in connecting mongodb')
        process.exit(0)
    }
}

export default connectDb