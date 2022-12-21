const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  getRandomUsername,
  getRandomThought,
  getRandomReactions,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await Thought.deleteMany({});

  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 20; i++) {
    const thoughts = getRandomThought(2);

    const username = getRandomUsername();
    const email = `${getRandomUsername()}@fakeemail.com`
    const friends = 
  }
});
