import youtube from "../utils/youtubeUtils";
import { Command } from '../ICommands';

const heheboy: Command = {
  name: "heheboy",
  description: "Hehe boy!",
  async execute(message, args) {
    const channel = message.member?.voice.channel;

    if (channel) {
      const connection = await channel.join();
      youtube.play(connection, "https://www.youtube.com/watch?v=BEPAsD0PXbw");
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }
};

module.exports = heheboy;
