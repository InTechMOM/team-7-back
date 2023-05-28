import Qualification from '../../../models/qualifications.js';
import Video from '../../../models/videos.js';

/**
   * @swagger
   * /api/qualifications/{emailTeacher}:
   *   get:
   *     description: Return video by email
   *     tags:
   *      - Qualifications
   *     parameters:
   *      - name: emailTeacher
   *        in: formData
   *        type: string  
   *        required: true
   *     responses:
   *       200:
   *         description: Videos for teacher
   *       404:
   *         description: User not found
   *       500:
   *         description: unknown error
   */
    /**
   * @swagger
   * /api/qualifications:
   *   get:
   *     description: Returns all students with graded videos
   *     tags:
   *      - Qualifications
   *     responses:
   *       200:
   *         description: Return ok
   *       404:
   *         description: User not found
   *       500:
   *         description: unknown error
   */

const getQualificationByEmail = async (request, response) => {
  try{
    //se valida  el mail del profesor
    const {emailTeacher} = request.params.emailTeacher;
    const filter ={
      ...emailTeacher && {emailTeacher}
    }
    console.log(filter);
    const qualification = await Qualification.findOne(filter);
      if(!filter){
      return response.status(404).json({message: "There are no videos registered for the indicated user"});
    }
    return response.status(200).json(qualification);
    }catch (error){
    console.log(error);
    return response.status(500).json('unknown error'); 
}
};

const getAllQualifications = async (request, response) => {
  try{
    const {nameFullStudent, url, collaboration, communication,criticalThinking, creativity,emailTeacher, emailStudent} = request.query;
    const filters = {
      ...nameFullStudent && {nameFullStudent},
      ...url && {url},
      ...collaboration && {collaboration},
      ...communication && {communication},
      ...criticalThinking && {criticalThinking},
      ...creativity && {creativity},
      ...emailTeacher && {emailTeacher},
      ...emailStudent && {emailStudent}
    }
    const qualification = await Qualification.find(filters);
    return response.status(200).json(qualification);
    }catch (error){
    console.log(error);
    response.status(500).json('Internal server error'); 
    }
};

export {getQualificationByEmail, getAllQualifications};