
const path = require("path")



const validateImage = (data) =>{
    

    const fileName = data.name;
    const extension = path.extname(fileName);

    const allowedExtensions = /png|jpeg|jpg|gif/;
    

    if (!allowedExtensions.test(extension)){
    
    return "Unsupported extension!";
    } 




      
}

module.exports = validateImage;

