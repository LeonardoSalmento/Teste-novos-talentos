import { Schema, model, SchemaTypes } from 'mongoose';

const TaskSchema = new Schema({
  title: String,
  user: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
  },
  finished: Boolean,
  created: Date,
  updated: Date,
}

);

export default model('Task', TaskSchema);