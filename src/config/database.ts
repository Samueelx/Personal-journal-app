import { Sequelize } from "sequelize-typescript";
import { User } from '../models/userModel';
import { Category } from '../models/categoryModel';
import { JournalEntry } from '../models/journalEntryModel';

const sequelize = new Sequelize({
    database: 'journals',
    dialect: 'postgres',
    username: 'pimo',
    password: process.env.DB_PASSWORD,
    models: [User, Category, JournalEntry]
});

export default sequelize;

