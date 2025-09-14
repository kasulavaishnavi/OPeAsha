import jwt from "jsonwebtoken"

//user authentication 
const authUser = async (req,res, next) =>{

    try{

const {token} = req.headers
if (!token) {
    return res.json({success: false, message: " not authorized"})
}

const decodeToken = jwt.verify(token, process.env.JWT_SECRET)

req.user = {userID : decodeToken.id}

next()
    }catch(error){
        console.log(error)
res.json({success: false, message: error.message})
    }
}

export default authUser