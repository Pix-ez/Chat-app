
import User from '@/models/User';
import dbConnect from '@/utils/dbconnect';



export default async function handler(req, res){
    const email = req.body.email

    try {  
        if(email){
            await dbConnect()
            const isuser = await User.findOne({email})
            if(isuser){
                return res.status(200).json({msg: true})
            }else{
              return res.status(200).json({msg: false})
                }
        }else{
            return res.status(200).json({msg: "no email given"})
        }
    } catch (error) {
        console.log(error)
    }


}