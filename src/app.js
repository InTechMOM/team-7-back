import express from 'express';
import { port } from './config/index.js';
import { setDbConnection } from './config/db.js';
import router from './router.js';

const app = express();

//connet with mongoDb
setDbConnection();

app.use(express.json());

app.use('/',router);

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
