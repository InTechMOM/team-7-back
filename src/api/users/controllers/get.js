import mongoose from 'mongoose';
import User from '../../../models/users.js';

/**
 * @openapi
 * /api/users:
 *  get:
 *   description: return all users
 *   tags:
 *      - Users
 *   responses:
 *    200:
 *     description: all users
 *    400:
 *     description: Something went wrong
 *    500:
 *     description: unKwnown error  
 */

/**
 * @openapi
 * /api/users/{email}:
 *  get:
 *   description: return user for email
 *   tags:
 *      - Users
 *   parameters:
 *    - in: path
 *      name: email
 *      schema:
 *        type: string
 *      required: true
 *      description: The user email
 *   responses:
 *    200:
 *     description: user is ok
 *    404:
 *     description: user not found
 *    422:
 *     description: email not valid
 *    500:
 *     description: unKwnown error 
 */

/**
 * @openapi 
 *  components:
 *   schemas:
 *    UserEmail:
 *     type: object
 *     properties:
 *      email:
 *        type: string
 *     required:
 *      - email
 *     example:
 *      email: some@example.com
 * 
 */

//Listado de todos los usuarios del registro
const getAllUser = async (request, response) => {
  try{
    const {name, lastname, email, rol} = request.query;
    const filters = {
      ...name && {name},
      ...lastname && {lastname},
      ...email && {email},
      ...rol && {rol}
    };
    const user = await User.find(filters);
    if(!user){
      return response.status(404).json({message:"user not found"});
    }
    return response.status(200).json(user);
    }catch (error){
    console.log(error);
    return response.status(500).json('unKnown error'); 
    }
};

//buscar suario por mail
const getUserByEmail = async (request, response) => {
  try{
    const email = request.params.email;
    const userEmail = await User.findOne({email});
      if (!userEmail){
      return response.status(422).json({message: "email not valid"});
    }
    return response.status(200).json(userEmail);
    }catch (error){
  console.log(error);
  return response.status(500).json('unKwnown error'); 
}
};
export {getAllUser, getUserByEmail}; 