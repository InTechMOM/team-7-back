
import User from '../../../models/users.js';


const getUser = async (request, response) => {
  try{
    const id = request.params._id;
    const user = await User.findOne({id : id});
      if (user === null){
      return response.status(404).json({menssage: "User not found"});
    }
    return response.status(200).json(user);
    }catch (error){
     console.log(error);
     response.status(500).json('Internal server error'); 
}
};

export default getUser;
