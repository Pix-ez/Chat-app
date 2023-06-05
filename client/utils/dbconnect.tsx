import mongoose from "mongoose";



// const connection = {}

// const dbConnect = async () => {
//     if (connection.isConnected) return

//     const db = await mongoose.
//         connect(process.env.MONGO_URI as string , { useNewUrlParser: true, useUnifiedTopology: true })

//     connection.isConnected = db.connections[0].readyState
// }

// const dbConnect =async () => mongoose.connect(process.env.MONGO_URI as string)
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }); 
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  };
  

export default dbConnect