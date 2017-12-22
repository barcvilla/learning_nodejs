//funcion requiere incluye el modulo http y la variable http hace referencia a este modulo.
//este modulo http permite a nuestro programa actuar como servidor.
var http = require("http");

/**
 * 
 * @param {*} req objetc que representa la solicitud (ServerRequest object)
 * @param {*} res object que representa la respuesta pendiente (ServerResponse object)
 */
function process_request(req, res)
{
    var body = 'Gracias por llamar!\n';
    var content_length = body.length;
    
    res.writeHead(200,
    {
        'Content-Length':content_length,
        'Content-Type':'text\plain'
    });

    res.end(body);
}
// funcion que se llama cada vez que alguien haga una conexion al servidor
var s = http.createServer(process_request);
// creado el servidor, le indicamos al server que escuche al puerto 8080 cuando inicia el programa.
s.listen(8080);
// CTRL + C detiene la ejecucion de node.js