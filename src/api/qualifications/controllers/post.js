import validateNewQualifications from '../validation/validation.js';
import Qualification from '../../../models/qualifications.js'
import User from '../../../models/users.js';
import Video from "../../../models/videos.js";

/**
 * @openapi
 * /api/qualifications:
 *  post:
 *    description: Qualification of video
 *    tags:
 *      - Qualifications
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/Qualification'    
 *    responses:
 *      200:
 *        description: Qualification saved
 *      400:
 *        description: Bad Request 
 */

/**
 * @openapi 
 *  components:
 *   schemas:
 *    Qualification:
 *     type: object
 *     properties:
 *      nameFullStudent:
 *        type: string
 *      url:
 *        type: string
 *      collaboration:
 *        type: number
 *      communication:
 *        type: number
 *      criticalThinking:
 *        type: number
 *      creativity:
 *        type: number
 *      emailTeacher:
 *        type: string
 *      emailStudent:
 *        type: string
 *     required:
 *      - nameFullStudent
 *      - url
 *      - collaboration
 *      - communication
 *      - criticalThinking
 *      - creativity
 *      - emailTeacher
 *      - emailStudent
 *     example:
 *      nameFullStudent: Betina Bournissent Vallejo
 *      url: https://www.youtube.com/watch?v=q43MB_EHm7A
 *      collaboration: 80
 *      communication: 60
 *      criticalThinking: 100
 *      creativity: 100
 *      emailTeacher: ja_perez@gmail.com 
 *      emailStudent: bourni2012@gmail.com
 * 
 */
const createQualification = async (request, response, error) => {
    try{
      const qualificationValidate = validateNewQualifications(request.body);
      if(qualificationValidate.error){
          return response.status(400).json(qualificationValidate.error.details);        
      }
      //valido el correo del profesor
      const email = request.body.emailTeacher
      const emailValid = await User.findOne({ email });
      if (!emailValid) {
        return response.status(400).json({error:"email teacher not found"});
      }
      //valido que el video este cargado en la DB
      const url = request.body.url
      const urlValid = await Video.findOne({ url });
      if(!urlValid){
        return response.status(400).json({error:"video does not exist in the DB"});
      }
      //se guardan las calificaciones del video
      const newQualification = new Qualification({ ...request.body });
      const qualification = await newQualification.save();
      return response.status(201).json(qualification); 
    }catch(error){
      console.log(error);
      return response.status(500).json('unknown error');
    } 
  }
    
export default createQualification;