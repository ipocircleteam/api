// check type of token
// verify token
// if access token expired, check for refresh token in active session table
// refrsh token not expired -> authorize request and set new access token in headers
// otherwise respond with "token expired!"

const verifyToken = async () => {};

export default verifyToken;
