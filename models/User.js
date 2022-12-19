const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const thoughtSchema = require("./Thought");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: [true, "User email required"],
      },
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
  }
  // friendcount virtual here
);

const User = model("user", userSchema);

module.exports = User;
