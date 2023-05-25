import User from '../../../models/users.js';
import { validateUpDateUser } from '../validation/validation.js';

/**
 * @openapi
 * /api/users/{id}:
 *  put:
 *    description: Update user
 *    tags:
 *      - Users
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/UserUpdate'    
 *    responses:
 *      200:
 *        description: user update
 *      404:
 *        description: user not found
 *      500:
 *        description: unknown error 
 */

/**
 * @openapi 
 *  components:
 *   schemas:
 *    UserUpdate:
 *     type: object
 *     properties:
 *      nameFull:
 *        type: string
 *     required:
 *      - nameFull
 *     example:
 *      nameFull: Betina Bournissent Vallejo
 */

const putUser = async (request, response) => {
  try{
    const id = request.params.id;
    const userId = await User.findById({_id: id});
    if (!userId) {
      return response.status(404).json({message: "user not found"});
    }
      const userValidate = validateUpDateUser(request.body);
      if(userValidate.error){
        return response.status(400).json(userValidate.error.details);
      }
      const updatedUser = await User.findByIdAndUpdate(id , request.body, { new: true });
      return response.status(200).json(updatedUser);
  }catch(error){
    console.log(error);
    return response.status(500).json('unknown error');
    }
  }
  
export default putUser;