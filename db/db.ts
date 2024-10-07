import { Client } from "pg";

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});

await client.connect();

const initDB = async () => {
    const createUser = `
        CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(10) NOT NULL CHECK (role IN ('admin', 'user')),
        disabled BOOLEAN DEFAULT true
    );`;
    await client.query(createUser);
}

await initDB();

export const query = async (text: string, params?: any[]) => {
    const res = await client.query(text, params);
    return res;
}

import { hashPassword } from "../utils/hash";

export const getUser = async (username: string) => {
    const result = await query("SELECT * FROM users WHERE username = $1", [username]);
    return result.rows[0];
};

export const createUser = async (username: string, password: string) => {
    const result = await query(
        "INSERT INTO users (username, password, role) VALUES ($1, $2, 'user') RETURNING *",
        [username, await hashPassword(password)]
    );
    return result.rows[0];
};