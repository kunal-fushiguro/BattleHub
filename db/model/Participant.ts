import { Schema, model, models } from "mongoose";

const ParticipantSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  inGameUid: [
    {
      gerne: { type: String },
      gameuid: { type: String },
    },
  ],
  inGameName: {
    type: String,
    required: [true, "inGameName is required."],
  },
  description: {
    type: String,
    required: [true, "description is required."],
  },
  contactLinks: [{ handleName: { type: String }, link: { type: String } }],
  tournamentList: [
    {
      name: { type: String },
      status: { type: String },
      tournamentid: { type: String },
    },
  ],
  tournamentHostedList: [
    {
      name: { type: String },
      status: { type: String },
      tournamentid: { type: String },
    },
  ],
});

export const Participant =
  models.participants || model("participants", ParticipantSchema);
