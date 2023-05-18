import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name : { type: String, require:true},
  lastName : { type: String, require:true},
  email :{ type: String, require:true, unique: true},
  rol : { type: String, require:true},
  creationDate: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

export default User;

