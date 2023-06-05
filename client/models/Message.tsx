import { Schema, model, models } from "mongoose";


const messageSchema = new Schema({
    sender: {
      type: String,
      required: true
    },
    receiver: {
      type: String,
      required: true
    },
    content: {
      type: String
    },
    fileUrl: {
      type: String
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  });

  const Message = models.Message || model('Message' , messageSchema);

  export default Message;