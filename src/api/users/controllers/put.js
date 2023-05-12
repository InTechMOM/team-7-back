import User from '../../../models/users.js';

const putUser = async (request, response) => {
  const { id } = request.params;
  const user = await User.findById(id);
  if (!user) {
    return response.status(404).json({message: "User not found"});
  }
  const updatedUser = await User.findByIdAndUpdate(id , request.body, { new: true });
  return response.status(200).json(updatedUser);
};

export default putUser;