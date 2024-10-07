import { verifyJWT } from "../utils/jwt";

export const authenticate = async (req: Request) => {
    const token = req.headers.get("auth-token");
    console.log(token);

    if (!token) return null;
    
    try{
        return verifyJWT(token);
    }
    catch(error){
        console.log(error)
        return null;
    }

}