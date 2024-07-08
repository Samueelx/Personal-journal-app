import { Sequelize } from "sequelize-typescript";
import { User } from '../models/userModel';
import { Category } from '../models/categoryModel';
import { JournalEntry } from '../models/journalEntryModel';

const sequelize = new Sequelize({
    host: process.env.DB_URL,
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME,
    dialect: 'postgres',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    models: [User, Category, JournalEntry]
});

export default sequelize;

