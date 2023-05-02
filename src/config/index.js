import * as doctenv from 'dotenv';

doctenv.config();

export const port = process.env.PORT;
export const DB_URI = process.env.DB_URI;