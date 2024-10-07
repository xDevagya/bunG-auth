import { serve } from "bun";
import { routes } from "./routes/routes";

const app = serve({
    fetch(req){ return routes(req) }
})