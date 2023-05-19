import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { port } from './config/index.js';
import { setDbConnection } from './config/db.js';
import router from './router.js';
import { openApiSpecification } from './config/swagger.js';
import cors from 'cors';

const app = express();

//connection with mongoDb
setDbConnection();

app.use(express.json());
app.use(cors());

app.get('/', (request, response, next) => {
  response.json({message: 'This is CORS-enabled for all origins!'});
})

app.use('/',router);

app.get('/',(request, response, error) =>{
  response.send('status: ok')
})

app.use('/docs', swaggerUi.serve);
app.get('/docs', swaggerUi.setup(openApiSpecification));

app.listen(port, (error)=>{
  if(error){ 
    console.log('Server Error: Failed');
    process.exit(1);
  }
  console.log(`Server listening in port ${port}`);
})
