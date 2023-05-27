import User from '../../../models/users.js';
import Video from '../../../models/videos.js';
/**
 * @openapi
 * /api/videos:
 *  get:
 *   description: return all videos
 *   tags:
 *      - Videos
 *   responses:
 *    200:
 *     description: all video
 *    404:
 *     description: user not found
 *    422:
 *     description: email not valid
 *    500:
 *     description: unknown error  
 */

/**
 * @openapi
 * /api/videos/{emailTeacher}:
 *  get:
 *   description: Return all videos for emailTeacher
 *   tags:
 *      - Videos
 *   parameters:
 *    - in: path
 *      name: emailTeacher
 *      schema:
 *        type: string
 *      required: true
 *   responses:
 *    200:
 *     description: user is ok
 *    404:
 *     description: user not found
 *    422:
 *     description: email not valid
 *    500:
 *     description: unknown error 
 */

/**
 * @openapi 
 *  components:
 *   schemas:
 *    VideoEmail:
 *     type: object
 *     properties:
 *      emailTeacher:
 *        type: string
 *     required:
 *      - email
 *     example:
 *      email: some@example.com
 * 
 */

//Listado de todos los videos del registro
const getAllVideo = async (request, response) => {
  try{
    const {title, url, description, nameStudent, emailStudent, emailTeacher} = request.query;
    const filters = {
      ...title && {title},
      ...url && {url},
      ...description && {description},
      ...nameStudent && {nameStudent},
      ...emailStudent && {emailStudent},
      ...emailTeacher && {emailTeacher}
    };
    const video = await Video.find(filters);
    if(!video){
      return response.status(404).json({message:"user not found"});
    }
    return response.status(200).json(video);
    }catch (error){
    console.log(error);
    return response.status(500).json('unknown error'); 
    }
};

//busca videos por emailTeacher
const getVideoByEmailTeacher = async (request, response) => {
  try{
    const emailTeacher = request.params.emailTeacher;
    const userEmail = await Video.find({emailTeacher});
      if (!userEmail){
      return response.status(422).json({message: "email not valid"});
    }
    return response.status(200).json(userEmail);
    }catch (error){
  console.log(error);
  return response.status(500).json('unknown error'); 
}
};
export {getAllVideo, getVideoByEmailTeacher}; 