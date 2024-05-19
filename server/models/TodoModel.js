import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  user_id: {
    type: String,
    require: true
  }
}, { timestamps: true });

export default mongoose.model("Todos", TodoSchema);