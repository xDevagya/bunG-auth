import { getUser, createUser } from "../db/db";
import { verifyPassword } from "../utils/hash";
import { signJWT } from "../utils/jwt";
import { validateUser } from "../utils/validate";


export const register = async (req: Request) : Promise<Response> => {
    try{  
        const {username, password} = await req.json();
        if (!validateUser(username, password))
            return new Response("Invalid Username or password", {status : 400});

        if ( await getUser(username) ) // check username
            return new Response("Username already exists", { status: 409 });

        if ( await createUser(username, password) ) // create user
            return new Response("User created successfully",{status: 201});

        return new Response("Failed to create user", { status : 500 });
    }
    catch(error){
        return new Response("Error during registration", { status: 500 });
    }
}

export const login = async (req: Request) : Promise<Response> => {
    try{
        const {username, password} = await req.json();
        if (!validateUser(username, password))
            return new Response("Invalid username or password", {status : 400});

        const user = await getUser(username);
        if ( !user || await verifyPassword(password, user.password) ) // check username
            return new Response("Invalid username or password", { status: 401 });
        
        const token = signJWT({username: user.username, role:user.role});
        
        return new Response(
            JSON.stringify({ token:token, role:user.role }),
            {
                status:200,
                headers: { "Content-Type":"application/json"}
            }
        );
    }
    catch(error){
        console.log(error);
        return new Response("Server Error");
    }
}