var fs = require('fs');
var fileName = 'info.txt';

fs.exists(fileName, function(exists)
{
    if(exists)
    {
        // obtenemos info del archivo
        fs.stat(fileName, function(error, stats){
            //abrimos el archivo(obtenemos un file descriptor)
            fs.open(fileName, "r", function(error, fd){
                var buffer = new Buffer(stats.size);

                //leemos el contenido en el buffer
                fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer){
                    var data = buffer.toString("utf-8", 0, buffer.length);

                    console.log(data);
                    fs.close(fd);
                });
            });
        });
    }
});