import { Table, Column, Model, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import { User } from './userModel';
import { Category } from './categoryModel';
import {parse, format} from 'date-fns';

@Table
export class JournalEntry extends Model {
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
        get() {
            const date = this.getDataValue('date');
            return format(date, 'MM/dd/yyyy');
        },
        set(value: string){
            this.setDataValue('date', parse(value, 'MM/dd/yyyy', new Date()));
        },
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