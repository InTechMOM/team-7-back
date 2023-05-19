import Joi from 'joi';

function validateNewVideo(body){
    const schema = Joi.object({
    title:Joi.string()
        .min(10)
        .max(80)
        .required(),
    url: Joi.string()
        .min(10)
        .regex(/^(https?:\/\/)?(www\.)?youtube\.com|youtu\.be\/watch\?v=[\w-]{11}$/)//validar youtu.be
        .required(),
    description: Joi.string()
        .min(10)
        .max(500)
        .required(),
    nameStudent: Joi.string()
        .min(3)
        .max(80)
        .required(),    
    emailStudent:Joi.string()
        .min(4)
        .max(256)
        .email()
        .required(),
    emailTeacher:Joi.string()
        .min(3)
        .max(256)
        .email()
        .required(),  
});
return schema.validate(body);
}
export default validateNewVideo;
