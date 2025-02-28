const isTokenValid = (token: string) => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expirationTime = payload.exp * 1000; // Convert to milliseconds
        return Date.now() < expirationTime;
    } catch {
        return false;
    }
}

export default isTokenValid;