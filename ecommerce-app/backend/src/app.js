import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/AuthRoute.js"


const app= express();


app.use(cors({
    origin: "https://glorious-memory-7v75x6pwp4w43xrx4-5173.app.github.dev",
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// });

// Routes
app.use('/api/auth', authRoutes);


app.get("/", (req,res)=>{
    res.json({success: true, message: "Backend Running successfully !"})
})

export default app;