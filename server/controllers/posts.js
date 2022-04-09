import PostMessage from "../models/postMessage.js";

//Get data from database
export const getPosts = async (req,res)=> {
    try {
        const postMessages = await PostMessage.find();
        console.log('Post found====> '+postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
};

// Save data to database
export const createPost = async (req,res)=> {
    const post = req.body;
    const new_post  = new PostMessage(post);
    try {
        await new_post.save();
        res.status(200).json({message:'Post saved to database successfully',data:new_post})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
};