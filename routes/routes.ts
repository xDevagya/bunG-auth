import { login, register } from "../controllers/auth"
import { authenticate } from "../middlewares/auth";

export const routes = async (req: Request): Promise<Response> =>  {
    
    const url = new URL(req.url);

    if (req.method === "POST"){
        if (url.pathname === "/login")      return login(req);
        if (url.pathname === "/register")   return register(req);
    }

    if (req.method === "GET"){
        if (url.pathname === "/"){
            console.log( await authenticate(req));
        }
    }
    
    else return new Response("Method Not Allowed", {status: 405})
    return new Response("Not Found", { status: 404 });
}