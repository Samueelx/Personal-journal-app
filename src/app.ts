import express from "express";
import bodyParser, { json } from "body-parser";
import sequelize from "./config/database";
//import userRoutes from './routes/userRoutes';

const app = express();
app.use(bodyParser.json());
//app.use('/api/users', userRoutes);

sequelize.sync().then(() => {console.log('Database Synced')})

export default app;