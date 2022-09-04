const firebaseapp = require('./firebaseConfig');

const authMiddleware = async (req, res, next) => {
  const reqAuthorization = req.headers.authorization;

  let decodedUser = null;
  if (reqAuthorization && reqAuthorization.startsWith('Bearer-')) {
    const clientToken = reqAuthorization.replace('Bearer-', '');
    decodedUser = await firebaseapp.auth().verifyIdToken(clientToken);
  }
  if (decodedUser) {
    return next();
  }
  return res.sendStatus(401);
}

module.exports = {
  authMiddleware
}