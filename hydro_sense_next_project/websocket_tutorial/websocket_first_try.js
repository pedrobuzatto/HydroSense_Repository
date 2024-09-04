//importa a função "createServer" do módulo "http"
const {createServer} = require("http");
//importa a classe "Server" do módulo "socket.io"
const {Server } = require("socket.io");


//cria um servidor http com a função importada
const httpServer = createServer();
//cria uma instância de servidor websocket da classe "Server", que foi importada
//O servidor websocket é associado ao servidor http "httpServer" criado na linha anterior
const io = new Server(httpServer, { 
    cors: {
        origin:"*",               //qualquer origem pode acessar o servidor
        methods: ["GET", "POST"]  //apenas os métodos GET e POST são permitidos
    }
});

//==================================================================================================================================
//============================================ Aqui Fica toda a lógica do servidor =================================================

io.on("connection", async (socket) => {
    console.log(socket.id)
})
//explicação: o método ".on" é utilizado pra configurar um ouvinte de eventos (listener), que nada mais é
//            do que uma função que fica "escutando" por um evento específico, e quando esse evento acontece,
//            uma função é disparada.
//            nesse caso, o evento que o listener está ouvindo é o "connection", então quando houver uma conexão,
//            a função de callback vai ser executada. Ela recebe como parâmetro o "socket", que representa o cliente
//            que acabou de se conectar, e imprime seu id, com "socket.id"




//==================================================================================================================================
httpServer.listen(5000, () => {
    console.log('Server is listening to the port 5000')
})
//explicação: como o servidor WebSocket (io) foi associado ao servidor http (httpServer),
//            o servidor http passa a também aceitar conexões WebSocket na porta 5000, além
//            das requisições HTTP normais