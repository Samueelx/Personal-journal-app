import express from "express";
import bodyParser, { json } from "body-parser";
import cors from 'cors';
import sequelize from "./config/database";
import userRoutes from './routes/userRoutes';
import journalRoutes from './routes/journalRoutes';
import categoryRoutes from './routes/categoryRoutes';


const app = express();

/**
 * Configure CORS
 */
// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200,
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
// };

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/journals', journalRoutes);
app.use('/api/categories', categoryRoutes);

sequelize.sync().then(() => {console.log('Database Synced')})

export default app;