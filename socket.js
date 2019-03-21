const socket = require('socket.io');

class SocketClass {
    static io(server){
      let serverSocket = socket(server);
      return serverSocket;
    }
}
module.exports = SocketClass;