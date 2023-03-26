import { Router } from "express";
import { addNewContact } from "../controllers/ContactsController.js";

const router = Router();

// POST /contacts/adduser
//Receive: email / phonenumber data from client
//Reminder: validate the data received from the client to be an email / phonenumber
router.post("/addtocontacts", addNewContact);

export default router;
