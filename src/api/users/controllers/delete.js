import User from '../../../models/users.js';

/**
 * @openapi
 * /api/users/{id}:
 *  delete:
 *    description: Delete user for id
 *    tags:
 *      - Users
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *    responses:
 *      200:
 *        description: user delete
 *      404:
 *        description: user not found
 *      500:
 *        description: unknown error
*/

const deleteUserById = async (request, response) => {
  try{
    const { id } = request.params;
    const user = await User.findById(id);
    if (!user) {
      return response.status(404).json('user not found');
    }
    const deletedUserById = await User.findByIdAndDelete(id);
    return response.status(200).json(deletedUserById);
  }catch(error){
    console.log(error);
    return response.status(500).json('unknown error');
  }
  };

  export default deleteUserById;