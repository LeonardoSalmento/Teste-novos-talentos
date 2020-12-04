import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
},
  password: String,
  created: Date,
  updated: Date,
}

);

export default model('User', UserSchema);