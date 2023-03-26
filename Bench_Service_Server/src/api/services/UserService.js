import UserModel from "../models/Users.js";

export const createUserInDatabase = async (NewUserInstance) => {
  try {
    const newUser = await UserModel.create(NewUserInstance);
    return newUser;
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

export const findUserInDatabase = async (FindUserInstance) => {
  try {
    const foundUser = await UserModel.findOne({ email: FindUserInstance });
    console.log(foundUser);
    return foundUser;
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

export const addContactInDatabase = async (NewContactInfo, accountUserDetails) => {
  try {
    const newContact = await UserModel.findOneAndUpdate({ email: accountUserDetails }, { $push: { contacts: NewContactInfo } });
    return newContact;
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

export const GetContactsInDatabase = async (accountUserDetails) => {
  try {
    const accountUserContacts = await UserModel.find({ email: accountUserDetails }, "contacts");
    return accountUserContacts;
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};
