import express, { request, response } from 'express';
import { port } from "./config/index.js";
import { setDbConnection } from './config/db.js';

const app = express();

setDbConnection();

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
