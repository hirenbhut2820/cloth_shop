import * as jwt from "jsonwebtoken";
import { Device } from "../models/device.model";

export const generateAuthToken = async (user: any)=>{
    try {
        const jwtGen = jwt.sign({ id: user._id, email: user.email }, 'Test@123')
        return jwtGen;
    } catch (error: any) {
        return error.message
    }
}

export const removeTokenWithUserId = async (userId: string) => {
    try {
        const deletedMedia = await Device.deleteMany({ userId });
        
        return true;
    } catch (error: any) {
        return error.message;
    }
}