import { Request, Response } from "express";
import { Order } from "../../models/order.model";

export default class ordersController{
    public static async list(req: Request, res: Response) {
        try {
            const orders = await Order.find({deletedAt: null});

            res.status(200).json({
                status: true,
                data: orders,
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
            
            const { productIds, productPrice, orderTotal } = req.body.validatedBodyRequest;
            const addOrders:any = await Order.create({
                productIds,
                productPrice,
                orderTotal
            })

            if(!addOrders){
                return res.status(400).json({
                    status: false,
                    message: "Orders not added"
                })
            }

            return res.status(200).json({
                status: true,
                data: addOrders,
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
            const { productIds, productPrice, orderTotal } = req.body.validatedBodyRequest;
            
            const updateOrders:any = await Order.findOneAndUpdate(
                { _id: id },
                {
                    productIds,
                    productPrice,
                    orderTotal
                },
                { new: true }
            )

            if(!updateOrders){
                return res.status(400).json({
                    status: false,
                    message: "Order not found"
                })
            }

            res.status(200).json({
                status: true,
                data: updateOrders,
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

            const deleteOrder = await Order.findOneAndUpdate(
                { _id: id },
                { deletedAt: new Date() },
                { new: true }
            )

            if(!deleteOrder){
                return res.status(400).json({
                    status: false,
                    message: "Order not found"
                })
            }

            res.status(200).json({
                status: false,
                data: deleteOrder,
                message: "Order deleted"
            })
        } catch (error: any) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
}