import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name."],
    unique: true,
    trim: true,
    maxlength: [20, "Name must be less than 20 characters."],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
