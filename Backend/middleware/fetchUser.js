const jwt = require("jsonwebtoken");

const fetchUser = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).json({ message: "please authenticate using valid token" });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = data.id;
        next();
    } catch (error) {
        res.status(401).json({ message: "token invalid" })
    }
}

module.exports = fetchUser;