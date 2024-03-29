import { NextFunction, Request, Response } from "express";
import { Device } from "../models/device.model";
import * as jwt from "jsonwebtoken";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const headers:any = req.header("Authorization");
        if(headers?.split("Bearer ").length < 2){
            return res.status(401).json({
                status: false,
                message: "Unauthorized"
            })
        }
        const bearerHeader:any = headers?.split("Bearer ")[1];

        const data:any = jwt.verify(bearerHeader, "Test@123")

        if(data && data.id){
            const device:any = await Device.findOne({ authToken: bearerHeader });
            if (device){
                req.body.auth = {
                    userId: device.userId
                };
                return next();
            }
        }

        return res.status(401).json({
            status: false,
            message: "Unauthorized"
        })
    } catch (error: any){
        return res.status(401).json({
            status: false,
            message: "Unauthorized"
        })
    }
}