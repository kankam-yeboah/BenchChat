import { GetContactsInDatabase } from "../services/UserService.js";

export const Homepage = async (req, res) => {
  let isAuth = req.session.auth;
  if (isAuth) {
    //PULL ALL THE RELATED CONTACT LIST OF THE USER
    //Get user's profile details from session
    const accountUserDetails = req.session.my_profile;
    const accountUserContacts = await GetContactsInDatabase(accountUserDetails);
    res.send(accountUserContacts[0].contacts);
    return;
  }
  res.send("Hello World");
};
