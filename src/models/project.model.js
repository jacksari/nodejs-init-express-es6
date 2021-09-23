import { Schema, model } from 'mongoose';

const ProjectSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
}, { collection: 'projects' });

ProjectSchema.method('toJSON', () => {
  const { __v, _id, ...object } = this.toObject();
  // object.uid = _id;
  return object;
});

export default model('Project', ProjectSchema);
