import Joi from 'joi';

function validateNewUser(body){
  const schema = Joi.object({
    nameFull: Joi.string()
        .min(3)
        .max(80)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}}),
    rol: Joi.string()
        .valid('student','teacher')
        .required(),
  });
  return schema.validate(body);
}
function validateUpDateUser(body){
    const schema = Joi.object({
      nameFull: Joi.string()
          .min(3)
          .max(30)
          .required(),
    });
    return schema.validate(body);
  }
export { validateNewUser, validateUpDateUser};
