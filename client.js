import rsaKeygen from "./rsaKeygen.js";
import BigInt from "big-integer";

class Client {
  constructor(internet) {
    this.messages = [];
    this.privateKey;
    this.publicKey;
    this.othersPublicKeys;
    this.internet = internet;
    this.subscribeInternet = () => {
      internet.addUser(this);
    };
    this.subscribeInternet();
  }

  generateKey() {
    const key = rsaKeygen();
    this.privateKey = key.privateKey;
    this.publicKey = key.publicKey;
  }

  sendPublicKey(client) {
    client.othersPublicKeys = this.publicKey;
  }

  sendMessage(message) {
    let messageSplit = message.split("");

    // Urghh, here what it does, it convert the message into
    // number
    let messageCharCode = messageSplit.map((letter) => letter.charCodeAt(0));
    let encrptMessage = messageCharCode.map(
      (letter) =>
        Math.pow(letter, this.othersPublicKeys.e) % this.othersPublicKeys.n
    );

    this.internet.broadcastMessage(encrptMessage);
  }

  decryptMessage(i) {
    let message = this.messages[i];
    message = message.map((charCode) => {
      charCode = BigInt(charCode).pow(this.privateKey).mod(this.publicKey.n);
      return String.fromCharCode(charCode.toString());
    });

    // eslint-disable-next-line no-undef
    console.log(message.join(""));
  }
}

export default Client;
