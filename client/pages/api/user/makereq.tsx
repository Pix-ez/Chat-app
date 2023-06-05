import User from '@/models/User';
import dbConnect from '@/utils/dbconnect';

export default async function handler(req, res) {
 
  //tag of whom to make request
    const tag = req.body.tag
    //name of who is making request
    const name1 = req.body.name
    // const tag = "rahul12"
    console.log(tag ,name1)
     


    try {
        if (tag) {
          await dbConnect();
          const user1 = await User.findOne({ tag });
          if (user1) {
            const img = user1.img;
            const name = user1.name;
         

            const user2 = await User.findOne( {name:name1});
            


     
            user2.requests.push(  { img, name });  // Store values in the requests array

            await user2.save(); // Save the updated user document

            return res.status(200).json({ message: "Request sent sucess" });
          } else {
            return res.status(404).json({ message: "User not found" });
          }
        } else {
          return res.status(400).json({ message: "Invalid request" });
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
}