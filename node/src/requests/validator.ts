import { Request, Response, NextFunction } from "express";

export const validateBodyRequest = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await schema.validate(req.body);
        req.body.validatedBodyRequest = data;
        return next();
    } catch (error: any) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

export const validateQueryRequest = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await schema.validate(req.query);
        req.body.validatedQueryRequest = data;
        return next();
    } catch (error: any) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

export const validateParamsRequest = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await schema.validate(req.params);
        req.body.validatedParamsRequest = data;
        return next();
    } catch (error: any) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}