import User from '@/models/User';
import dbConnect from '@/utils/dbconnect';

export default async function handler(req, res) {

    const my_name = req.body.my_name
    const  user_name = req.body.user_name
    // console.log(my_name, user_name)

    try {
        await dbConnect()
        //first adding freind to 1st user
        const user1 = await User.findOne({name:my_name})
        await user1.friends.push(user_name);
        await user1.save(); // Save the changes to the database
        // console.log(user1)

        //adding into 2nd user
        const user2 = await User.findOne({name:user_name})
        await user2.friends.push(my_name);
        await user2.save(); // Save the changes to the database

        return res.status(200).json({ message: "sucess" });
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }
}