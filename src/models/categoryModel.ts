import { Table, Column, Model, ForeignKey, DataType, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from './userModel';
import {JournalEntry} from './journalEntryModel';

@Table
export class Category extends Model<Category>{
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    UserId!: number;

    @BelongsTo(() => User)
    user!: User;

    @HasMany(() => JournalEntry)
    journalEntries!: JournalEntry[];

}