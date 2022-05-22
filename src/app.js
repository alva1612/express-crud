import express from "express";
import indexRoutes from "./routes/index.routes";
import ejs from "ejs";
import {engine} from "express-handlebars";
import path from "path";

const app = express(); 

//-----------------------------SET VIEWS
app.set('views',path.join(__dirname,'views'));

//----------------------------SET VIEW ENGINE
//app.set('view engine','ejs');
app.engine('.hbs', engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: ".hbs",
}));

app.set('view engine', '.hbs');

//----------------------------Rutas para la app
app.use(indexRoutes);

export default app;