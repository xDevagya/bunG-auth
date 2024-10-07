import { sign, verify, type JwtPayload } from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "your-secret-key";

export const signJWT = (payload:object): string => {
    return sign(payload, secret, {expiresIn:"1hr"});
};


export const verifyJWT = (token: string): JwtPayload | string | null => {
    try {
        return verify(token, secret);
    } catch (error) {
        return null;
    }
};