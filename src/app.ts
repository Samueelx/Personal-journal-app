import express from "express";
import bodyParser, { json } from "body-parser";
import sequelize from "./config/database";
import userRoutes from './routes/userRoutes';
import journalRoutes from './routes/journalRoutes';
import categoryRoutes from './routes/categoryRoutes';


const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/journals', journalRoutes);
app.use('/api/categories', categoryRoutes);

sequelize.sync().then(() => {console.log('Database Synced')})

export default app;