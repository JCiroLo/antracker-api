import admin from "firebase-admin";
import { firebase as firebaseEnv } from "./env";

admin.initializeApp({
  credential: admin.credential.cert(firebaseEnv),
});

export default admin;
