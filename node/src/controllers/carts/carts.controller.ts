import { Request, Response } from "express";
import { Cart } from "../../models/cart.model";

export default class cartsController{
    public static async list(req: Request, res: Response) {
        try {
            const carts = await Cart.find({deletedAt: null});

            res.status(200).json({
                status: true,
                data: carts,
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
            
            const { userId, productId, productQuantity } = req.body.validatedBodyRequest;
            const addCarts:any = await Cart.create({
                userId,
                productId,
                productQuantity
            })

            if(!addCarts){
                return res.status(400).json({
                    status: false,
                    message: "Carts not added"
                })
            }

            return res.status(200).json({
                status: true,
                data: addCarts,
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
            const { userId, productId, productQuantity } = req.body.validatedBodyRequest;
            
            const updateCarts:any = await Cart.findOneAndUpdate(
                { _id: id },
                {
                    userId,
                    productId,
                    productQuantity
                },
                { new: true }
            )

            if(!updateCarts){
                return res.status(400).json({
                    status: false,
                    message: "Cart not found"
                })
            }

            res.status(200).json({
                status: true,
                data: updateCarts,
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

            const deleteCarts = await Cart.findOneAndUpdate(
                { _id: id },
                { deletedAt: new Date() },
                { new: true }
            )

            if(!deleteCarts){
                return res.status(400).json({
                    status: false,
                    message: "Cart not found"
                })
            }

            res.status(200).json({
                status: false,
                data: deleteCarts,
                message: "Cart deleted"
            })
        } catch (error: any) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
}