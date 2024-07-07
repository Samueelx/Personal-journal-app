import { Request, Response } from "express";
import { Category } from "../models/categoryModel";

export const createCategory = async (req: Request, res: Response) => {
    const {name} = req.body;
    //@ts-ignore
    const UserId = req.userId;
    console.log("User ID: ", UserId);

    try {
        const category = await Category.create({name, UserId});
        res.status(201).json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Failed to create category'});
    }
};

export const getCategories = async (req: Request, res: Response) => {
    //@ts-ignore
    const UserId = req.userId;

    try {
        const categories = await Category.findAll({where: {UserId}});
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Failed to fetch categories'});
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {name} = req.body;
    //@ts-ignore
    const UserId = req.userId;
    console.log(UserId);

    try {
        const category = await Category.findOne({where: {id, UserId}});
        if (!category){
            return res.status(404).json({error: 'Category not found'});
        }

        category.name = name;
        await category.save();
        res.json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Failed to update category'});
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    const {id} = req.params;
    //@ts-ignore
    const UserId = req.userId;

    try {
        const category = await Category.findOne({where: {id, UserId}});

        if(!category){
            return res.status(404).json({error: 'Category not found'});
        }

        await category.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: 'Failed to delete category'});
    }
};