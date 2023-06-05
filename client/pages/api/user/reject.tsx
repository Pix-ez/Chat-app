import User from '@/models/User';
import dbConnect from '@/utils/dbconnect';

export default async function handler(req, res) {

    const my_name = req.body.my_name
    const user_name = req.body.user_name
    try {

        await dbConnect()
        const user1 = await User.findOne({ name: my_name })


        // Find the index of the object with the matching name
        const index = user1.requests.findIndex((request) => request.name === user_name);
        if (index !== -1) {
            // Remove the object at the found index
            user1.requests.splice(index, 1);
            // console.log(user1)
            await user1.save(); // Save the updated user document
            return res.status(200).json({ message: "Request deleted successfully." });
        } else {
            return res.status(404).json({ message: "Request not found." });
        }





    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }
}