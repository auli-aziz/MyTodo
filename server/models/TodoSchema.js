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
  timestamp: {
    type: String,
    default: Date.now()
  }
})

export default mongoose.model("Todos", TodoSchema);