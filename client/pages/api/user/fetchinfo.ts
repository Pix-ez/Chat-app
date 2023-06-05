import User from '@/models/User';
import dbConnect from '@/utils/dbconnect';

export default async function handler(req, res) {
    const name = req.query.name;
    console.log(name)
    try {
        await dbConnect()
        const user = await User.findOne({ name: name })
        const uid = await user.uid
        // console.log(uid)

        

      

        // console.log(friendsWithData);
        // console.log(friends)

        return res.status(200).json(uid);

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }

}