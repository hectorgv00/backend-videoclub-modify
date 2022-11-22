const { isValidUserAndPassword } = require("../services/authorization.services");
const jsonwebtoken = require("jsonwebtoken");

const authBearerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  // 'Bearer 1234'.split(' ') -> ['Bearer','1234']
  const [strategy, jwt] = authorization.split(" ");
  try {
    if (strategy.toLowerCase() !== "bearer") {
      throw new Error("Invalid strategy");
    }
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    const created = payload.iat*1000;
    const timeElapsed = Date.now() - created;
    const MAX_TIME = Number(process.env.MAX_TIME_JWT_CADUCITY) ||
      1000 * 60 * 60 * 24; // 1 day
      const isValid = timeElapsed && created && MAX_TIME &&
      (timeElapsed < MAX_TIME);
    if (!isValid) {
      throw new Error("Token expired");
    }

    // expose the payload to the next middlewares and controllers
    req.auth = payload;
    next();

  } catch (error) {
    res.status(401).json({ message: "You are not authenticated. Please log in again"});
    return;
  }

};


const isValidRoleAdmin =  (req, res, next) => {
  if (req.auth?.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: "You are not authorized" });
  }
}


const isValidRole = (role)  =>  (req, res, next) => {
  if (req.auth?.role === role) {
    next();
  } else {
    res.status(403).json({ message: "You are not authorized" });
  }
}

const isAdmin = (req,res,next) =>{
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
  if (payload.rolIdRol === 1) {
      next();
    } else {
      res.status(403).json({ message: "You are not authorized" });
    }
}

module.exports = { authBearerMiddleware,isValidRoleAdmin , isValidRole, isAdmin};
