import { generateToken } from "../utils/jwt";
import { hashPassWord, comparePassWord } from "../utils/bcrypt";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient()
interface RegisterBody{
    email:string,
    password: string,
    role: string
}
export async function register(req:Request<{}, {}, RegisterBody>,res: Response){
    try{
        const {email, password, role} = req.body
        if(!email || !password || !role){
            return res.status(400).json({message: "Thieu email hoac password"})
        }
        const existingUser = await prisma.user.findUnique({where: {email}});
        if(existingUser){
            return res.status(400).json({message: "Tai khoan email da ton tai"})
        }
        const hashed = await hashPassWord(password)
        const user = await prisma.user.create({
            data:{email, password: hashed, role},
        });
        return res.status(200).json({message: "Tao tai khoan thanh cong", user})
    }
    catch(error){
        return res.status(500).json({message: "Khong the ket noi den server"})
    }
}


export async function login() {
    
}