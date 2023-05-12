import validateNewUser from '../validation/validation.js';
import User from '../../../models/users.js';

const  createUser = async (request, response, error) => {
    try{
      const userValidate = validateNewUser(request.body);
      if(userValidate.error){
          response.status(400).json(userValidate.error);        
      }
      const newUser = new User({ ...request.body });
      const user = await newUser.save();
      return response.status(201).json(user); 
    }catch(error){
      console.log(error);
      response.status(500).json('Internal server error');
    }
   }
    
export default createUser;




