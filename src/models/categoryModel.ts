import { Table, Column, Model, ForeignKey, DataType, BelongsTo, HasMany, CreatedAt } from 'sequelize-typescript';
import { User } from './userModel';
import {JournalEntry} from './journalEntryModel';

@Table
export class Category extends Model{
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

    @CreatedAt
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    createdAt?: Date;

    @BelongsTo(() => User)
    user!: User;

    @HasMany(() => JournalEntry)
    journalEntries!: JournalEntry[];

}