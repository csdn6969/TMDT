import express from "express";
import authRoutes from "./routes/auth.routes"
const app = express()

const PORT = process.env.PORT || 3001;
app.use(express.json())
app.use('/auth',authRoutes)
app.listen(PORT, async ()=>{
    console.log(`Auth service is running port${PORT}` )
})
