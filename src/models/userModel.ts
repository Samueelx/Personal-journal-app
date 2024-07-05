import { Table, Column, Model, HasMany, DataType, AllowNull } from 'sequelize-typescript';
import {Category} from './categoryModel';
import {JournalEntry} from './journalEntryModel';

@Table
export class User extends Model<User>{
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username!: string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName!: string;

    @HasMany(() => Category)
    categories!: Category[];

    @HasMany(() => JournalEntry)
    journalEntries!: JournalEntry[];
}