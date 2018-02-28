var fs = require('fs');
/* funcion asincrona que se retorna inmediatamente, antes que el archivo haya sido abierto y
   se haya invocado a la funcion callback*/
fs.open('info.txt', 'r', (err, handle) =>
{
    var buf = new Buffer(100000);    
    
    fs.read(handle, buf, 0, 100000, null, (err, length) =>
    {
        console.log(buf.toString('utf-8', 0, length));
        fs.close(handle, () => {/*dont care*/});
    });
});

