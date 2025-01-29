const jwt = require("jsonwebtoken");
const { jwt_admin_password } = require("../config");

function adminMiddleware(req, res, next){
    const token = req.header.token;
    const decoded = jwt.verify(token, jwt_admin_password);
    if( decoded ){
        req.userId = decoded.indexOf;
        next()
    }else{
        res.status(403).json({
            message: "you are not signed in"
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}