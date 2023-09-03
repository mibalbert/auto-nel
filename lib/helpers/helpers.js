/**
 * helpers/hash.js
 */
import * as bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import crypto from 'crypto'

export function compareHash(plainPassword, hash) {
  return bcrypt.compareSync(plainPassword, hash)
}

export function generateHash(password) {
  const saltRounds = 10
  return bcrypt.hashSync(password, saltRounds)
}

export function nextAuthInclude(include) {
  return req.query.nextauth?.includes(include)
}

// Generate a random string of a given length
export function generateAccessToken() {
  const buffer = crypto.randomBytes(100);
  return buffer.toString('hex');
}

export function generateRandToken() {
  const buffer = crypto.randomBytes(40);
  return buffer.toString('hex');
}

// export function generateExpirationTimestamp() {
//   // Calculate the expiration time, for example, 1 hour from now
//   const expirationTime = new Date();
//   expirationTime.setHours(expirationTime.getHours() + 1); // Set 1 hour from now
//   return Math.floor(expirationTime.getTime() / 1000); // Convert to UNIX timestamp
// }

export function generateRandomBigIntAsString() {
  const minStr = "100000000000000000000"; // Minimum value (inclusive)
  const maxStr = "999999999999999999999"; // Maximum value (inclusive)
  const min = BigInt(minStr);
  const max = BigInt(maxStr);
  const range = max - min + BigInt(1);
  const randomValue = min + BigInt(Math.floor(Math.random() * range));
  return randomValue.toString();
}


const DEFAULT_SIGN_OPTION = {
  expiresIn: "1h",
};

export function signJwtAccessToken(payload, options = DEFAULT_SIGN_OPTION) {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key, options);
  return token;
}

export function verifyJwt(token) {
  try {
    const secret_key = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secret_key);
    return decoded;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function resMessage(message, status) {
  return {
    message: message,
    status: status
  }
}

export function getDateTimeWithDaysOffset(daysToAdd = 0) {
  const now = new Date();
  now.setDate(now.getDate() + daysToAdd);
  return now;
}