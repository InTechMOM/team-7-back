import mongoose from 'mongoose';

const { Schema } = mongoose;

const qualificationSchema = new Schema({
  nameFullStudent: {type: String, require: true},
  url : {type: String, require: true, unique: true},
  collaboration: {type: Number, require: true},  
  communication: {type: Number, require: true},  
  criticalThinking: {type: Number, require: true},  
  creativity: {type: Number, require: true},  
  emailTeacher: {type: String, require: true},
  emailStudent: {type: String, require: true}
},{
  timestamps: true //registra la creacion y actualizacion
});

const Qualification = mongoose.model('Qualification', qualificationSchema);
export default Qualification;