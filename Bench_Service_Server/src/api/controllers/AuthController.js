import { createUserInDatabase, findUserInDatabase } from "../services/UserService.js";
import { passwordHash, compareHash } from "../utilities/passwordHash.js";

export const getLoginUserPage = (req, res) => {
  //check if the session data is authenticated before displaying the loginpage
  res.send("Login page");
};

export const getRegisterUserPage = (req, res) => {
  //check if the session data is authenticated before displaying the registerpage
  res.send("Register page");
};

export const createNewUser = async (req, res) => {
  let registerData = req.body;

  //check in the database if the required provided data is not a duplicate in the database.

  registerData.phonenumber = parseInt(registerData.phonenumber);
  registerData.password = await passwordHash(registerData.password);
  const newUserInfo = await createUserInDatabase(registerData);
  if (newUserInfo) {
    req.session.auth = true;
    req.session.my_profile = newUserInfo.email;
    res.redirect("/");
  } else {
    req.session.auth = false;
    res.send("Error Define *Internal Error!");
    return;
  }
};

export const loginUser = async (req, res) => {
  let loginData = req.body;
  let loginEmailData = loginData.email;
  let loginPasswordData = loginData.password;
  const foundUser = await findUserInDatabase(loginEmailData);

  if (foundUser == null) {
    res.send("Incorrect email or password. Enter your sign in information again, or request an email to gain access to your account.");
    return;
  }

  //if foundUser is not null then, get the hashed password from the foundUser
  const userPasswordHash = foundUser.password;

  //compare data-input password with hashed password in database.
  let comparedValue = await compareHash(loginPasswordData, userPasswordHash);
  if (userPasswordHash != null && comparedValue) {
    req.session.auth = true;

    //populate the client session in session_database with client - details
    if (!req.session.my_profile) {
      req.session.my_profile = foundUser.email;
    }

    res.redirect("/");
  } else {
    res.send("Incorrect email or password. Enter your sign in information again, or request an email to gain access to your account.");
  }
};
