import { Request, Response } from "express";
import { Category } from "../../models/category.model";

export default class categoriesController{
    public static async list(req: Request, res: Response) {
        try {
            const categories = await Category.find({deletedAt: null});

            res.status(200).json({
                status: true,
                date: categories,
                message: "list"
            })
        } catch (error: any) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }

    public static async add(req: Request, res: Response){
        try {
            
            const { name, description } = req.body.validatedBodyRequest;
            const addCategory:any = await Category.create({
                name,
                description,
            })

            if(!addCategory){
                return res.status(400).json({
                    status: false,
                    message: "Category not added"
                })
            }

            return res.status(200).json({
                status: true,
                data: addCategory,
                message: "Added"
            })
        } catch (error: any) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }

    public static async update(req: Request, res: Response) {
        try {
            const { id } = req.body.validatedParamsRequest;
            const { name, description, productIds } = req.body.validatedBodyRequest;
            
            const updateCategory:any = await Category.findOneAndUpdate(
                { _id: id },
                {
                    name,
                    description,
                    productIds
                },
                { new: true }
            )

            if(!updateCategory){
                return res.status(400).json({
                    status: false,
                    message: "Category not added"
                })
            }

            res.status(200).json({
                status: true,
                data: updateCategory,
                message: "Added"
            })
        } catch (error: any) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }

    public static async delete(req: Request, res: Response) {
        try {
            const { id } = req.body.validatedParamsRequest;

            const deleteCategory = await Category.findOneAndUpdate(
                { _id: id },
                { deletedAt: new Date() },
                { new: true }
            )

            if(!deleteCategory){
                return res.status(400).json({
                    status: false,
                    message: "Category not found"
                })
            }

            res.status(200).json({
                status: false,
                data: deleteCategory,
                message: "Category deleted"
            })
        } catch (error: any) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
}