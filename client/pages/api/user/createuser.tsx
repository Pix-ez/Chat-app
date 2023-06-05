import { v4 as uuidv4 } from 'uuid';
import User from '@/models/User';
import dbConnect from '@/utils/dbconnect';



export default async function handler(req, res){
    const email = req.body.email
    const name = req.body.name
    const img = req.body.img
    const tag = req.body.tag
    const uid = uuidv4()

    try {  
        if(email){
            
                try {
                    await dbConnect()
                    let user = new User({
                      name: name,
                      uid: uid,
                      tag:tag,
                      email: email,
                      img: img
                    });
                  
                    // Save the user
                    await user.save();
                  
                    // Handle success response
                    return res.status(200).json({ msg: "User created successfully" });
                  } catch (error) {
                    // Handle error
                    console.error(error);
                    return res.status(500).json({ error: "Failed to create user" });
                  }
                
        }
    } catch (error) {
        
    }


}