import Joi from 'joi';

function validateNewQualification(body){
    const schema = Joi.object({
    nameFullStudent: Joi.string()
        .min(3)
        .max(30)
        .required(),
    url: Joi.string()
        .max(254)
        .required(),
    collaboration: Joi.number()
        .valid(20,40,60,80,100)
        .required(),
    communication:Joi.number()
        .valid(20,40,60,80,100)
        .required(),
    criticalThinking: Joi.number()
        .valid(20,40,60,80,100)
        .required(),
    creativity: Joi.number()
        .valid(20,40,60,80,100)
        .required(),
    emailTeacher: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}})
        .required(),
    emailStudent: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}})
        .required(),
    });
    return schema.validate(body);
}

export default validateNewQualification;
