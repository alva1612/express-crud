import express from "express";
import indexRoutes from "./routes/index.routes";
import ejs from "ejs";
import path from "path";

const app = express(); 

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.use(indexRoutes);



export default app;