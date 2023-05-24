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
   *      - name: id
   *        in: formData
   *        type: string  
   *        required: true
   *     responses:
   *       200:
   *         description: users
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
    //se valida que el mail 
    const {emailTeacher} = request.params.emailTeacher;
    console.log(emailTeacher);
    const video = await Video.findOne(emailTeacher);
      if(!video){
      return response.status(404).json({message: "teacher without graded videos "});
    }
    return response.status(200).json(video);
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
/*
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
*/
//export {getAllUser, getQualificationByEmail, getUserById};
export {getQualificationByEmail, getAllQualifications};