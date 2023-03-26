import session from "express-session";
import { store } from "../../config/Mongodb.js";
import * as dotenv from "dotenv";
dotenv.config();

export default session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 24 * 30 },
  store: store,
});
