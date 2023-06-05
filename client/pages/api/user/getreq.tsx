import User from '@/models/User';
import dbConnect from '@/utils/dbconnect';

export default async function handler(req, res) {
 
    const name = req.body.name
    // const tag = "rahul12"

    try {
        if(name){
            await dbConnect()

            const user= await User.findOne({name})
            const requests = user.requests

            return res.status(200).json({requests})
            
         
            }
          } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
          }
}