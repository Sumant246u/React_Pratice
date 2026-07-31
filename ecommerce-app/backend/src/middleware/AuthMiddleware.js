
import jwt from "jsonwebtoken"
import User from "../models/UserModel.js"

export const authMiddleware = async (req, res, next) => {

    try {

        // Get token from HttpOnly cokkie
        const token = req.cookies.accessToken
        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized please login' })
        }

        // verify token 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // find user
        const user = await User.findById(decoded.id).select("-password")

        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' })
        }

        // Attach user to request
        req.user = user;

        next()
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid or expire token' })
    }
}