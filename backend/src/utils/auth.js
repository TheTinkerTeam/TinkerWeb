const { sign, verify } = require("jsonwebtoken");
const User = require("../models/User");

var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://supertinker.firebaseio.com"
});

exports.checkAuth = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) return null;

  if (!authorization.startsWith("Bearer")) return null;

  const split = authorization.split("Bearer ");
  if (split.length !== 2) return null;

  const token = split[1];

  try {
    return admin
      .auth()
      .verifyIdToken(token)
      .then(decodedToken => {
        return decodedToken.uid;
      });
  } catch (err) {
    console.error(`${err.code} -  ${err.message}`);
    return null;
  }
};

exports.createAccessToken = user => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d"
  });
};

exports.createRefreshToken = user => {
  return sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "15m"
  });
};

exports.getUser = req => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    return null;
  }
  try {
    const token = authorization.replace("Bearer ", "");
    const verifiedToken = verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!verifiedToken) {
      throw new Error("Token not verified");
    }
    return User.findById(verifiedToken.userId);
  } catch (err) {
    console.error(err);
    throw new Error("Authentication Error");
  }
};

exports.sendRefreshToken = (res, token) => {};
