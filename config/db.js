const { formatArgs } = require("debug/src/browser")
const  mongoose=require("mongoose")

module.exports.connectToMongoDb = async () => {
    mongoose.set('strictQuery', false)
    mongoose.connect("mongodb+srv://yassminem458:LTvetSsDqHWG0HWC@cluster0.u6aaknx.mongodb.net/").then(()=>{
        console.log("connect to db ");
    })
    .catch((error) => {
        console.log(error);
    });
};
// mode passe mongoo: LTvetSsDqHWG0HWC