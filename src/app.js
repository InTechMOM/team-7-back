import express, { request, response } from 'express';
import * as mongoose from 'mongoose';
import { port } from "./config/index.js";
import { DB_URI } from "./config/db.js";

const app = express();

setDbConnection(DB_URI);

async function setDbConnection(DB_URI) {

  await mongoose.connect(DB_URI)
                .then(() => console.log('Connection to DB successful'))
                .catch((err) => console.log('Connection error', err));

}

app.get('/',(request, response, error) =>{
 
  response.send('status: ok')

})

app.listen(port, (error)=>{

  if(error){
    
    console.log('Server Error: Failed');
    
    process.exit(1);
  }

  console.log(`Server listening in port ${port}`);

})
