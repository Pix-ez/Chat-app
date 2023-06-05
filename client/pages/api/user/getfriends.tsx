import User from '@/models/User';
import dbConnect from '@/utils/dbconnect';

export default async function handler(req, res) {
    const name = req.query.name;
    console.log(name)
    try {
        await dbConnect()
        const user = await User.findOne({ name: name })

        const friends = user.friends

        // Fetch details for each friend and create new objects
        const friendsWithData = await Promise.all(
            friends.map(async (friend) => {
                const friendData = await User.findOne({ name: friend });

                return {
                    name: friendData.name,
                    img: friendData.img,
                    uid: friendData.uid,
                };
            })
        );

        // console.log(friendsWithData);
        // console.log(friends)

        return res.status(200).json(friendsWithData);

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }

}