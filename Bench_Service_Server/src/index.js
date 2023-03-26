import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Session_Middleware from "./api/middlewares/session.js";
import * as dotenv from "dotenv";
import AuthRouter from "./api/routes/Auth.js";
import ContactRouter from "./api/routes/Contacts.js";
import { RegisterUserSchema, LoginUserSchema } from "./api/middlewares/validations/UserValidation.js";
import { validate } from "./api/utilities/validations.js";
import { Homepage } from "./api/controllers/HomeController.js";

//ENVIRONMENT VARIABLES
dotenv.config();

//GLOBAL VARIABLES
const app = express();
const PORT = process.env.PORT || 3001;

//Application Plugin Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Session_Middleware);

app.use("/auth/login", validate(LoginUserSchema));
app.use("/auth/register", validate(RegisterUserSchema));

//Application Endpoints
//Home page route
app.get("/", Homepage);

//route authentication (*login and *signup)
app.use("/auth", AuthRouter);

//route CRUD USER CONTACT
app.use("/contacts", ContactRouter);

//Handle server 400 errors

//Application Server
async function main() {
  await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);

  app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`);
  });
}

main().catch((err) => {
  console.log(err);
});
