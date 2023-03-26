import { addContactInDatabase } from "../services/UserService.js";

export const addNewContact = async (req, res) => {
  const NewContactInfo = req.body;
  const accountUserDetails = req.session.my_profile;
  NewContactInfo.contactPhonenumber = parseInt(NewContactInfo.contactPhonenumber);
  const newContact = await addContactInDatabase(NewContactInfo, accountUserDetails);
  res.send("Contact Added Successfully!");
};
