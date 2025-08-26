const os = require("os");
module.exports.getData =async()=>{
    try {
        const OsInformation = {
          hostname: os.hostname(),
          platform: os.platform(),
          type: os.type(),
          release: os.release()
        };
        console.log(OsInformation)
        return (OsInformation)
    
        // ✅ renvoyer l'objet en JSON
        res.json('/OsInformation');
      } catch (error) {
        throw new error('erreur lors de la recuperation des osInformation ')
      }
}