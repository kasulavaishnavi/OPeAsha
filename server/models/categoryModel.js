import mongoose from 'mongoose';
import { nanoid } from 'nanoid/non-secure';

const categorySchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      default: () => nanoid(10),
      unique: true,
      index: true,
    },
    name: { type: String, required: true, trim: true, unique: true },
    doctors: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Category', categorySchema);
