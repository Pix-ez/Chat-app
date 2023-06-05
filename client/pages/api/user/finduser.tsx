
import User from '@/models/User';
import dbConnect from '@/utils/dbconnect';

export default async function handler(req, res) {
 
    const tag = req.body.tag
    // const tag = "rahul12"

    try {
        if(tag){
            await dbConnect()

            const user = await User.findOne({tag})
            const userinfo = user
            if (user) {
                return res.status(200).json(user);
              } else {
                return res.status(404).json({ message: "User not found" });
              }
            }
          } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
          }
}