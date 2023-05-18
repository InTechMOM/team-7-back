import Joi from 'joi';

function validateNewVideo(body){
  const schema = Joi.object({
    title:Joi.string()
        .min(10)
        .max(80)
        .required(),
    url: Joi.string()//limite de calidad, el link no se valida?
        .min(10)
        .max(30)
        .dataUri()// ver!
        .required(),
    description: Joi.string()
        .min(10)
        .max(500)
        .required(),
    nameStudent: Joi.string()//se puede extraer directamente de api/user
        .min(10)
        .max(80)
        .required(),
    surNameStudent: Joi.string()//se puede extraer directamente de api/user
        .min(10)
        .max(80)
        .required(),      
    emailStudent:Joi.string()
        .min(4)
        .max(256)
        .required(),
    emailTeacher:Joi.string()
        .min(4)
        .max(256)
        .required(),  
  });
  return schema.validate(body);
}
export default validateNewVideo;
