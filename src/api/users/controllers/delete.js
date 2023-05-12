import { response } from 'express';
import User from '../../../models/users.js';
import { request } from 'http';

const deleteUserById = async (request, response) => {
  const { id } = request.params;
  const user = await User.findById(id);
  if (!user) {
    return response.status(404).json('user does not exist');
  }
  const deletedUserById = await User.findByIdAndDelete(id);
  return response.status(200).json('user deleted');
};

 export default deleteUserById;