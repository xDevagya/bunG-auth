import { hash, compare } from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    return await hash(password, saltRounds);
};

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await compare(await hashPassword(password), hashedPassword);
};