import { Table, Column, Model, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import { User } from './userModel';
import { Category } from './categoryModel';

@Table
export class JournalEntry extends Model<JournalEntry> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    content!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    date!: Date;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number

    @BelongsTo(() => User)
    user!: User

    @ForeignKey(() => Category)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    categoryId!: number;

    @BelongsTo(() => Category)
    category!: Category;
}