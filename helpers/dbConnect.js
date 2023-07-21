
require("dotenv").config()

const connect =()=>{
    try {

        mongoose.connect(process.env.MONGOURL)
        console.log("conncted")
        
    } catch (error) {
        console.log("erreur")
    }
}
module.exports=connect