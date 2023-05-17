import {validateNewUser} from '../validation/validation.js';
import User from '../../../models/users.js';

/**
 * @openapi
 * /api/users:
 *  post:
 *    description: Creation API for users
 *    tags:
 *      - Users
 *    parameters:
 *      - name: name
 *        in: formData
 *        type: string  
 *        required: true
 *      - name: lastName
 *        in: formData
 *        type: string
 *        required: true
 *      - name: email
 *        in: formData
 *        type: string
 *        required: true
 *      - name: rol
 *        in: formData
 *        type: string
 *        required: true    
 *    responses:
 *      200:
 *        description: User created
 *      400:
 *        description: Bad Request 
 */


const  createUser = async (request, response, error) => {
    try{
      const userValidate = validateNewUser(request.body);
      if(userValidate.error){
          return response.status(400).json(userValidate.error.details);        
      }
      const newUser = new User({ ...request.body });
      const user = await newUser.save();
      return response.status(201).json(user); 
    }catch(error){
      console.log(error);
      return response.status(500).json('Internal server error');
    }
   }
    
export default createUser;




