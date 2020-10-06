const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

//model
const User = require("../models/user");
const Admin = require("../models/admin");
const superAdmin = require("../models/superadmin");

//secret key
const keys = require("./keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKey;

module.exports = (passport) => {
  try {
    passport.use(
      new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if (user) {
          return done(null, user);
        }
        const admin = await Admin.findById(jwt_payload.id);
        if (admin) {
          return done(null, admin);
        }
        const superadmin = await superAdmin.findById(jwt_payload.id);
        if (superadmin) {
          return done(null, superadmin);
        }
      })
    );
  } catch (error) {
    console.log("Error");
  }
};
