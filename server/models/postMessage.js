import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selected_files:String,
    like_count : {
        type:Number,
        default:0
    },
    created_at: {
        type:Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;