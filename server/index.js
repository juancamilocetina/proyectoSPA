const mongoose = require("mongoose"); //Importar el paquete
const app = require("./app");          
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");


mongoose.set("useFindeAndModify", false); //Evita errores cuando se hace una peticion a la base de datos
// mongoose.connect(`mongodb://localhost:27017/baseDatos`);
mongoose.connect( //Conectar con nuestra base datos
    `mongodb://${IP_SERVER}:${PORT_DB}/baseDatos`,
    { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if(err){
        throw err;
    }else {
        console.log("La conexion a la base de datos es correcta.");

        app.listen(port, () => {
            console.log("#######################");
            console.log("###### API REST #######");
            console.log("#######################");
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`)
        });
    }
});

