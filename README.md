# **BunG-auth [WIP]**
Fully functional, minimal, modular authentication api built using Bun.js and PostgreSQL. Goal of this project is to provide a base API wriiten in Bun.js, with foundational features done right for any starter project.

## Features
- Minimal: Less is more — focused on keeping the codebase lean with fewer dependencies.
- Modular: Easy to understand, scale and debug.
- Safe, secure and reliable: Built with security and reliability in mind.
- Prioritizes speed and performance.

## Technologies
- Server: Bun.js(Typescript)
- Database: PostgreSQL

## Base Models
### **User**

| **Field**  | **Type**    | **Description**                           |
|------------|-------------|-------------------------------------------|
| `id`       | `SERIAL`    | Primary key, unique user identifier       |
| `username` | `VARCHAR`   | Unique username                           |
| `password` | `VARCHAR`   | Hashed user password                      |
| `role`     | `VARCHAR`   | Role of the user (`admin` or `user`)      |
| `disabled` | `BOOLEAN`   | Account disabled / Verification pending   |

## Goals
- API endpoints
  - [x] /login    - handle login and return token and role.
  - [x] /register - register user
  - [ ] /logout   - logout user
- [x] Role Based Acess Control (RBAC)
- [x] Password Hashing
- [x] Validation
- [x] JWT
- [ ] Email / Phone Verification
- [ ] Middleware
- [ ] Rate limiting
- [ ] Password reset

## **Setup Instructions**

### **1. Clone the repository**

```bash
git clone https://github.com/xdevagya/bung-auth.git
cd bung-auth
```

### **2. Install dependencies**

Ensure you have Bun.js installed. Then run:

```bash
bun install
```
### **3. Setup Environment**

Make sure you have PostgreSQL running. Create a database and update the environment variables in `.env`:

```
DB_USER=<your_database_user>
DB_PASSWORD=<your_database_password>
DB_HOST=localhost
DB_PORT=5432
DB_NAME=<your_database_name>
JWT_SECRET=<your_jwt_secret>
```

### **4. Run the server**

```bash
bun --hot index.ts
```


## **Contributing**

Feel free to contribute to this project by opening issues or submitting pull requests. Be sure to follow the coding style and include relevant tests.