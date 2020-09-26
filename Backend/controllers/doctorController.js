//File Handler
const cloudinary = require("../utils/cloudinary");
const Doctor = require("../models/doctor");

module.exports = {
  uploadDoc: async (req, res, next) => {
    try {
      //reading the data from the body
      const { name, desc } = req.body;
      //reading the image file
      const file = req.files.image;
      //console.log(file);
      cloudinary.uploader.upload(
        file.tempFilePath,
        { resource_type: "image" },
        async function (err, result) {
          //console.log(result);
          //Data is saved to the database with image url
          const newDoc = await Doctor.create({
            name: name,
            desc: desc,
            imgUrl: result.secure_url,
          });
          return res.status(200).json({ message: `${newDoc}` });
        }
      );
    } catch (err) {
      console.log("Error in uploadPost", err.message);
      return res
        .status(400)
        .json({ message: `Error in uploadPost ${err.message}` });
    }
  },
};
