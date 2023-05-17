import User from '../../../models/users.js';

/**
* @swagger
* /api/users/{id}:
*   delete:
*     description: Return updated delete by Id
*     tags:
*      - Users
*     parameters:
*       - name: id
*         in: formDate
*         type: string
*         required: true
*     responses:
*       200:
*         description: user delete successful 
*/

const deleteUserById = async (request, response) => {
  try{
    const { id } = request.params;
    const user = await User.findById(id);
    if (!user) {
      return response.status(404).json('user does not exist');
    }
    const deletedUserById = await User.findByIdAndDelete(id);
    return response.status(200).json(deletedUserById);
  }catch(error){
    console.log(error);
     return response.status(500).json('Internal server error');
  }
  };

 export default deleteUserById;