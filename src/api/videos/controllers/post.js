import validateNewVideo from "../validation/validation";
import Video from "../../../models/videos";

const createVideo = async(request,response,error) => {
  try{
    const videoValidate = validateNewVideo(request.body);
    if(videoValidate.error){
      response.status(400).json(videoValidate.error);
    }
    const newVideo = new Video({...request.body});
    const video = await newVideo.save();
  }catch(error){
    console.log(error);
    response.status(500).json('Internal server error');
  }
}

export default createVideo;