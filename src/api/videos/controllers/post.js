import validateNewVideo from "../validation/validation.js";
import Video from "../../../models/videos.js";
import User from "../../../models/users.js";


/**
 * @openapi
 * /api/videos:
 *  post:
 *    description: Creation of video
 *    tags:
 *      - Videos
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/Video'    
 *    responses:
 *      200:
 *        description: User created
 *      400:
 *        description: Bad Request 
 */

/**
 * @openapi 
 *  components:
 *   schemas:
 *    Video:
 *     type: object
 *     properties:
 *      title:
 *        type: string
 *      url:
 *        type: string
 *      description:
 *        type: string
 *      nameStudent:
 *        type: string
 *      emailStudent:
 *        type: string
 *      emailTeacher:
 *        type: string
 *     required:
 *      - title
 *      - url
 *      - description
 *      - nameStudent
 *      - emailStudent
 *      - emailTeacher
 *     example:
 *      title: Documentacion con swagger
 *      url: https://www.youtube.com/watch?v=q43MB_EHm7A
 *      description: Explicacion sobre swagger
 *      nameStudent: Betina Bournissent Vallejo
 *      emailStudent: bourni2012@gmail.com
 *      emailTeacher: karenle0212@gmail.com
 * 
 */

const createVideo = async(request,response,error) => {
  try{
    const videoValidate = validateNewVideo(request.body);
    if(videoValidate.error){
      return response.status(400).json(videoValidate.error);
    }
    const {emailTeacher} = request.body;
    const rol = 'teacher';
    const user = await User.findOne({email: emailTeacher, rol});
    if(user){
        const newVideo = new Video({...request.body});
        const video = await newVideo.save();
        console.log('project save');
        return response.status(201).json(video);
    }
    return response.status(400).json({error: "invalid teacher"});    
  }catch(error){
    console.log(error);
    response.status(500).json('Internal server error');
  }
}

export default createVideo;