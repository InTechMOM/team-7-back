import Joi from 'joi';

function validateNewUser(body){
  const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    lastname: Joi.string()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}}),
    rol: Joi.string()
        .valid('student','teacher')
        .required(),
  });
  return schema.validate(body);
}
export default validateNewUser;
