// connexion avec base de donnée en le faire une seul fois dans tout le projet 
const { formatArgs } = require("debug/src/browser")
const  mongoose=require("mongoose")
//module.exports nom de fonction l'exportation de fonction 
module.exports.connectToMongoDb = async () => {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.url_Db)
        .then(()=>{
        console.log("connect to db ");
    })
    .catch((error) => {
        console.log(error);
    });
};
// mode passe mongoo: LTvetSsDqHWG0HWC