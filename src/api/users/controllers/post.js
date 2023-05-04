
//crear funcion create user, paraguardar en la BD

import validateNewUser from '../validation/validation.js';
import User from '../../../models/users.js';

const  createUser = async (request, response, error) => {
    const userValidate = validateNewUser(request.body);
    if(userValidate.error){
        response.status(400).json(userValidate.error);        
    }
    const newUser = new User({ ...request.body });
    const user = await newUser.save();
    return response.status(201).json(user); 
  }
    
export default createUser;




