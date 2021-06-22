class Internet {
  constructor() {
    this.connectedClients = [];
  }

  broadcastMessage(message) {
    this.connectedClients.map((client) => {
      client.messages.push(message);
    });
  }

  addUser(client) {
    this.connectedClients.push(client);
  }
}

export default Internet;
