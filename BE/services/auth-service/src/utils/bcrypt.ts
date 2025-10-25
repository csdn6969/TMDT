import bcrypt from "bcryptjs"


export async function hashPassWord(password: string){
    const salt = bcrypt.genSaltSync(10);
    const encodePassword = await bcrypt.hash(password, salt);
    return encodePassword;
}

export async function comparePassWord(password:string, hashPassword:string): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
}