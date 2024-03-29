import { Request, Response } from "express";
import { Coupon } from "../../models/coupons.model";

export default class couponsController{
    public static async list(req: Request, res: Response) {
        try {
            const coupons = await Coupon.find({deletedAt: null});

            res.status(200).json({
                status: true,
                data: coupons,
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
            
            const { name, price } = req.body.validatedBodyRequest;
            const addCoupons:any = await Coupon.create({
                name,
                price
            })

            if(!addCoupons){
                return res.status(400).json({
                    status: false,
                    message: "Coupons not added"
                })
            }

            return res.status(200).json({
                status: true,
                data: addCoupons,
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
            const { name, price, active } = req.body.validatedBodyRequest;
            
            const updateCoupon:any = await Coupon.findOneAndUpdate(
                { _id: id },
                {
                    name,
                    price,
                    active
                },
                { new: true }
            )

            if(!updateCoupon){
                return res.status(400).json({
                    status: false,
                    message: "Coupon not found"
                })
            }

            res.status(200).json({
                status: true,
                data: updateCoupon,
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

            const deleteCoupon = await Coupon.findOneAndUpdate(
                { _id: id },
                { deletedAt: new Date() },
                { new: true }
            )

            if(!deleteCoupon){
                return res.status(400).json({
                    status: false,
                    message: "Coupon not found"
                })
            }

            res.status(200).json({
                status: false,
                data: deleteCoupon,
                message: "Coupon deleted"
            })
        } catch (error: any) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
}