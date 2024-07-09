import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  setParticipant: {
    type: Boolean,
    default: false,
  },
  participantId: {
    type: String,
  },
});

export const User = models.users || model("users", UserSchema);
