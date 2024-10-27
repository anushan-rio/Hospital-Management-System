//GenerateAccessToken 
export function generateAccessToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRATION_TIME });
}