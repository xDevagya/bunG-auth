const vUsername = (username:string): boolean => {
    // username constraints: length between 4 and 20, allowed characters - [a-z],[A-Z],[0-9], [_]
    const checkRegex = /^[a-zA-Z0-9_]+$/;
    return username.length >= 4 && username.length <= 20 && checkRegex.test(username);
}

const vPassword = (password:string): boolean => {
    // password constraints: length between 8 and 30
    // allowed characters - [a-z],[A-Z],[0-9]
    // allowed symbols - [!@#$%^&*()-+=]
    const checkRegex = /^[a-zA-Z0-9_!@#$%^&*()-+=]+$/;
    return typeof password === 'string' && password.length >= 8 && password.length <= 30 && checkRegex.test(password);
}

export const validateUser = ( username:string, password:string ): boolean =>{
    return (vUsername(username) && vPassword(password));
}