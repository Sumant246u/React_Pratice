import bcrypt from "bcrypt";
import User from "../models/UserModel.js";
import generateToken from "../utils/GenerateToken.js";


export const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body

        // validation
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All field are required" })
        }

        // Check exiting User
        const exisitingUser = await User.findOne({ email });
        if (exisitingUser) {
            return res.status(409).json({ success: false, message: "User Already exits" })
        }

        // HashPassword
        const hashPassword = await bcrypt.hash(password, 10)

        // Create USer
        const user = await User.create({
            name,
            email,
            password: hashPassword
        });

        res.status(201).json({
            success: true,
            message: "User register Successfully",
            data: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "email and password required" })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password" })
        }

        const token = generateToken(user._id)

        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: false,          // true in production with HTTPS
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return res.status(200).json({
            success: true,
            message: "login Successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export const getProfile = async (req,res)=>{

    return res.status(200).json({ success: true, user: req.user })
}

export const logoutUser = async(req,res)=>{
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    })
    return res.status(200).json({success: true, message: 'Logout successfully'});
}