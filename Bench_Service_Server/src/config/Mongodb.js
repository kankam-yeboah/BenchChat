import session from "express-session";
import connect_mongodb_session from "connect-mongodb-session";
import * as dotenv from "dotenv";

// Load ---- Application environment constants into process.env
dotenv.config();

// create mongodb store for application session collection
const Mongodb_Store = connect_mongodb_session(session);

export const store = new Mongodb_Store(
  {
    uri: process.env.DATABASE_CONNECTION_STRING,
    connectionOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
    },
  },
  (err) => {
    if (err) console.log(err);
  }
);
