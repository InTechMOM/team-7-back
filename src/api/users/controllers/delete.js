import User from '../../../models/users.js';

const deleteUserById = async (request, response) => {
  const { id } = request.params;
  const user = await User.findById(id);
  if (!user) {
    return response.status(404).json('user does not exist');
  }
  const deletedUserById = await User.findByIdAndDelete(id);
  return response.status(200).json(deletedUserById);
};

 export default deleteUserById;