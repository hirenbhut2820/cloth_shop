import { Request, Response } from "express";
import { Brand } from "../../models/brand.model";

export default class brandController{
    public static async list(req: Request, res: Response) {
        try {
            const brands = await Brand.find({deletedAt: null});

            res.status(200).json({
                status: true,
                data: brands,
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
            
            const { name, brandLogo } = req.body.validatedBodyRequest;
            const addBrand:any = await Brand.create({
                name,
                brandLogo,
            })

            if(!addBrand){
                return res.status(400).json({
                    status: false,
                    message: "Brand not added"
                })
            }

            return res.status(200).json({
                status: true,
                data: addBrand,
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
            const { name, brandLogo } = req.body.validatedBodyRequest;
            
            const updateBrand:any = await Brand.findOneAndUpdate(
                { _id: id },
                {
                    name,
                    brandLogo
                },
                { new: true }
            )

            if(!updateBrand){
                return res.status(400).json({
                    status: false,
                    message: "Brand not found"
                })
            }

            res.status(200).json({
                status: true,
                data: updateBrand,
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

            const deleteBrand = await Brand.findOneAndUpdate(
                { _id: id },
                { deletedAt: new Date() },
                { new: true }
            )

            if(!deleteBrand){
                return res.status(400).json({
                    status: false,
                    message: "Brand not found"
                })
            }

            res.status(200).json({
                status: false,
                data: deleteBrand,
                message: "Brand deleted"
            })
        } catch (error: any) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
}