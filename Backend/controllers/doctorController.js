//File Handler
const bufferConversion = require('../utils/bufferConversion')
const cloudinary = require('../utils/cloudinary')
const Doctor = require('../models/doctor')

module.exports = {
    uploadDoc: async (req, res, next) => {
        try {
            // const { errors, isValid } = validateUploadPost(req.body)
            // if (!isValid) {
            //     console.log("errors",errors)
            //     return res.status(400).json(errors)
            // }
        
            // const { name } = req.user
            const { name, description } = req.body;
            const imgUrl = await bufferConversion(req.file.originalname, req.file.buffer)
            const imgResponse = await cloudinary.uploader.upload(imgUrl)
            // const user = await User.findOne({ email })
            const newDoc = await new Doctor({
                name,
                description,
                imgUrl: imgResponse.secure_url
                
            })
            await newDoc.save()
            // user.posts.push(newDoc._id)
            // await user.save()
            return res.status(200).json({message: newDoc})
        }
        catch (err) {
            console.log("Error in uploadPost", err.message)
            return res.status(400).json({ message: `Error in uploadPost ${err.message}` })
        }
    },
    // deletePost: async (req, res, next) => {
    //     try {
    //         const {_id} = req.user
    //         const { postId } = req.params 
    //         const user = await User.findById(_id)
    //         const { posts}  = user
    //         const postIndex = posts.findIndex((postItem) => {
    //             return postItem.toString() == postId.toString()
    //         })
    //         if (postIndex === -1)
    //             return res.status(400).json({ message: "Invalid request" })
    //         posts.splice(postIndex, 1)
    //         await user.save();
    //         await Post.findOneAndDelete({ _id: postId })
    //         await Comment.deleteMany({ post: postId })
    //         const allPosts = await Post.find({ user: _id }).populate('comments').populate('likes')
    //         res.status(200).json({message: allPosts})
    //     }
    //     catch (err) {
    //         console.log("Error in deletePost", err.message)
    //         return res.status(400).json({ message: `Error in deletePost ${err.message}` })
    //     }
    // },
}