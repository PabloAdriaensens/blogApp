/*
1. Con la clase controller, conseguimos que todos los controladores que extiendan de aquí,
no necesiten escribir el constructor repetidamente
2. Simplemente extendiendo y agregando un super y pasandole req, res, next y ya lo cogerá
*/

class Controller{

    constructor(req,res,next){
        this.req = req;
        this.res = res;
        this.next = next;
    }

    //Este método nos permitirá devolver los códigos de resultado 200, 201, 202, 204 y 500.
    returnJson(code, param)
    {
        this.res.statusCode = code;
        /*
        CORS - esto es para evitar el cors del navegador para poder recibir peticiones
        desde otros dominios distintos al del backend
        this.res.header = ('Access-Controll-Allow-Origin','*');
        this.res.header = ('Access-Controll-Allow-Methods','GET, POST, DELETE UPDATE, OPTIONS  );
        this.render.header = ('Access-Controll-Allow-Methods','Origin, x-Requested-With, Content-Type, Accept');
        */
        this.res.send(param);
    }

}

module.exports=Controller;
