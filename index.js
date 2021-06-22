import Client from "./client.js";
import Internet from "./internet.js";

const internet = new Internet();

const me = new Client(internet);
const friend = new Client(internet);

me.generateKey();
me.sendPublicKey(friend);

friend.sendMessage("Hello, World!");

me.decryptMessage(0);
