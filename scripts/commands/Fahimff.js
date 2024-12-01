const fs = require("fs");
module.exports.config = {
  name: "fahimff",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("❬❰༈⸙༆𝐊𝐈𝐍𝐆༒𝐒𝐇𝐎𝐔𝐑𝐎𝐕༆⸙༈❱❭ ________________ ")==0 || (event.body.indexOf("Shourov")==0 || (event.body.indexOf("fahim")==0 || (event.body.indexOf("সৌরভ")==0)))) {
		var msg = {
				body: " কিরে এতো ডাকিস কেন আমার বস বিজি আসে দেখস না গা্ৃ্ঁধা্ঁ 🤬:))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
