import {validateNewUser} from '../validation/validation.js';
import User from '../../../models/users.js';

/**
 * @openapi
 * /api/users:
 *  post:
 *    description: Creation of users
 *    tags:
 *      - Users
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/User'    
 *    responses:
 *      200:
 *        description: User created
 *      400:
 *        description: Bad Request 
 */

/**
 * @openapi 
 *  components:
 *   schemas:
 *    User:
 *     type: object
 *     properties:
 *      nameFull:
 *        type: string
 *      email:
 *        type: string
 *      rol:
 *        type: string
 *     required:
 *      - nameFull
 *      - email
 *      - rol
 *     example:
 *      nameFull: Betina Bournissent Vallejo
 *      email: some@example.com
 *      rol: student
 * 
 */
const  createUser = async (request, response, error) => {
    try{
      const userValidate = validateNewUser(request.body);
      if(userValidate.error){
          return response.status(400).json(userValidate.error.details);        
      }
      //valido que el correo sea unico
      const email = request.body.email
      const emailRegistered = await User.findOne({ email });
      if (emailRegistered) {
        return response.status(400).json({error:"Email Registered"})
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




