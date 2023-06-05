import { Schema, model, models } from 'mongoose';


const UserSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    uid: {
        type:String,
        required: true,
    },
    tag: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    img: {
        type:String,
        
    },
    requests: {
        type:Array,
        
    },
    friends: {
        type:Array,
        
    },
    groups: {
        type:Array,
        
    },

},{timestamps : true})


const User = models.User || model("User", UserSchema);


export default User;

// export default model('User', UserSchema);