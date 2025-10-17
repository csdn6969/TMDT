import jwt,{SignOptions, Algorithm} from "jsonwebtoken";

export const generateToken = (user:{id:any, email: any, role?:any}) =>{
    const payload = {
        sub: user.id,
        email:user.email,
        role:user?.role || 'user'
    };
    const options: SignOptions = {
    algorithm: "HS256" as Algorithm,
    expiresIn: "7d",
  };
    return jwt.sign(payload, process.env.JWT_SECRET || "secret", options);
}