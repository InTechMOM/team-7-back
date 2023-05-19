import mongoose from 'mongoose';

const { Schema } = mongoose;

const videoSchema = new Schema({
  title : {type: String, require: true},
  url : {type: String, require: true, unique: true},
  description: {type: String, require: true},
  nameStudent: {type: String, require: true},
  emailStudent: {type: String, require: true},
  emailTeacher: {type: String, require: true}
},{
  timestamps: true //registra la creacion y actualizacion
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
