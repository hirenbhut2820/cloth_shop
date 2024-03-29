import { Request, Response } from "express";
import { Cart } from "../../models/cart.model";
import { Product } from "../../models/product.model";

export default class productsController{
    public static async list(req: Request, res: Response) {
        try {
            const products = await Product.find({deletedAt: null});

            res.status(200).json({
                status: true,
                data: products,
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
            
            const { name,
                description,
                richDescription,
                image,
                images,
                brand,
                price,
                offerPrice,
                discountPercentage,
                categoryIds,
                countInStocks,
                ratings,
                isFeatures,
                size } = req.body.validatedBodyRequest;
            const addProducts:any = await Product.create({
                name,
                description,
                richDescription,
                image,
                images,
                brand,
                price,
                offerPrice,
                discountPercentage,
                categoryIds,
                countInStocks,
                ratings,
                isFeatures,
                size
            })

            if(!addProducts){
                return res.status(400).json({
                    status: false,
                    message: "Product not added"
                })
            }

            return res.status(200).json({
                status: true,
                data: addProducts,
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
            const { name,
                description,
                richDescription,
                image,
                images,
                brand,
                price,
                offerPrice,
                discountPercentage,
                categoryIds,
                countInStocks,
                ratings,
                isFeatures,
                size } = req.body.validatedBodyRequest;
            
            const updateProducts:any = await Product.findOneAndUpdate(
                { _id: id },
                {
                    name,
                    description,
                    richDescription,
                    image,
                    images,
                    brand,
                    price,
                    offerPrice,
                    discountPercentage,
                    categoryIds,
                    countInStocks,
                    ratings,
                    isFeatures,
                    size
                },
                { new: true }
            )

            if(!updateProducts){
                return res.status(400).json({
                    status: false,
                    message: "Product not found"
                })
            }

            res.status(200).json({
                status: true,
                data: updateProducts,
                message: "Updated"
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

            const deleteProducts = await Product.findOneAndUpdate(
                { _id: id },
                { deletedAt: new Date() },
                { new: true }
            )

            if(!deleteProducts){
                return res.status(400).json({
                    status: false,
                    message: "Product not found"
                })
            }

            res.status(200).json({
                status: false,
                data: deleteProducts,
                message: "Product deleted"
            })
        } catch (error: any) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
}