const { Schema, model, SchemaTypes } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reactions: [reactionSchema],
  }
  // reactionCount virtual
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
