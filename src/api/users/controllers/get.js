import User from '../../../models/users.js';

const getUserByEmail = async (request, response) => {
  try{
    const email = request.params.email;
    const user = await User.find({email});
      if (user === null){
      return response.status(404).json({message: "Forbidden"});
    }
    return response.status(200).json(user);
    }catch (error){
     console.log(error);
     response.status(500).json('Internal server error'); 
}
};

const getAllUser = async (request, response) => {
  try{
    const {name, lastname, email, rol} = request.query;
    
    const filters = {
      ...name && {name},
      ...lastname && {lastname},
      ...email && {email},
      ...rol && {rol}
    }
    const user = await User.find(filters);
      if (user === null){
      return response.status(404).json({message: "Forbidden"});
    }
    return response.status(200).json(user);
    }catch (error){
     console.log(error);
     response.status(500).json('Internal server error'); 
}
};

const getUserById = async (request, response) => {
  try{
    const id = request.params.id;
    const user = await User.find({_id : id});
      if (!id){
      return response.status(404).json({message: "Forbidden"});
    }
    return response.status(200).json(user);
    }catch (error){
     console.log(error);
     response.status(500).json('Internal server error'); 
}
};

export default getAllUser; getUserByEmail; getUserById;
