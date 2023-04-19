import * as mongoose from 'mongoose';
import { DB_URI } from "./index.js";

export async function setDbConnection(){
  await mongoose.connect(DB_URI)
                .then(() => console.log('Connection to DB successful'))
                .catch((err) => console.log('Connection error', err));
}



