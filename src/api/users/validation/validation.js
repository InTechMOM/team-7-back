import Joi from 'joi';

function validateNewUser(body){
  const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    lastName: Joi.string()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}})
        .required(),
    rol: Joi.string()
        .valid('student','teacher')
        .required(),
  });
  return schema.validate(body);
}
function validateUpDateUser(body){
    const schema = Joi.object({
      name: Joi.string()
          .min(3)
          .max(30)
          .required(),
      lastName: Joi.string()
          .min(3)
          .max(30)
          .required(),
    });
    return schema.validate(body);
  }
export { validateNewUser, validateUpDateUser};
