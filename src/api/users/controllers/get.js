import User from '../../../models/users.js';

 /**
   * @swagger
   * /api/users/{email}:
   *   get:
   *     description: Return users by email
   *     tags:
   *      - Users
   *     parameters:
   *      - name: email
   *        in: formData
   *        type: string  
   *        required: true
   *     responses:
   *       200:
   *         description: users
   */
   /**
   * @swagger
   * /api/users:
   *   get:
   *     description: Returns all users
   *     tags:
   *      - Users
   *     responses:
   *       200:
   *         description: users
   */
   /**
   * @swagger
   * /api/users/{id}:
   *   get:
   *     description: Returns users by id
   *     tags:
   *      - Users
   *     parameters:
   *      - name: id
   *        in: formData
   *        type: string  
   *        required: true
   *     responses:
   *       200:
   *         description: users
   */

const getUserByEmail = async (request, response) => {
  try{
    const email = request.params.email;
    const user = await User.findOne({email});
      if (!user){
      return response.status(404).json({message: "Forbidden"});
    }
    return response.status(200).json(user);
    }catch (error){
     console.log(error);
     return response.status(500).json('Internal server error'); 
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
    return response.status(200).json(user);
    }catch (error){
     console.log(error);
     response.status(500).json('Internal server error'); 
    }
};

const getUserById = async (request, response) => {
  try{
    const id = request.params.id;
    const user = await User.findOne({_id : id});
      if (!user){
      return response.status(404).json({message: "Forbidden"});
    }
    return response.status(200).json(user);
    }catch (error){
     console.log(error);
     return response.status(500).json('Internal server error'); 
}
};

export {getAllUser, getUserByEmail, getUserById};
