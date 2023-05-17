import User from '../../../models/users.js';
import { validateUpDateUser } from '../validation/validation.js';
/**
 * @openapi
 * /api/users:
 *  put:
 *    description: Creation API for users
 *    tags:
 *      - Users
 *    parameters:
 *      - name: name
 *        in: formData
 *        type: string  
 *        required: true
 *      - name: lastname
 *        in: formData
 *        type: string
 *        required: true
 *    responses:
 *      200:
 *        description: User created
 *      400:
 *        description: Bad Request 
 */

const putUser = async (request, response) => {
  try{
    const { id } = request.params;
    if (!user) {
      return response.status(404).json({message: "User not found"});
    }
      const user = await User.findById(id);
      const userValidate = validateUpDateUser(request.body);
      if(userValidate.error){
        return response.status(400).json(userValidate.error.details);
      }
      const updatedUser = await User.findByIdAndUpdate(id , request.body, { new: true });
      return response.status(200).json(updatedUser);
  }
    catch(error){
      console.log(error);
      return response.status(500).json('Internal server error');
    }
  }
  
export default putUser;