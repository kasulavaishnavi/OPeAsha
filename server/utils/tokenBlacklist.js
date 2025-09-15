// utils/tokenBlacklist.js

const blacklistedTokens = new Set();

export const addTokenToBlacklist = (token) => blacklistedTokens.add(token);
export const isTokenBlacklisted = (token) => blacklistedTokens.has(token);
