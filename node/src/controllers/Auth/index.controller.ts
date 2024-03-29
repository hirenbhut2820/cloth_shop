import { Request, Response } from "express";
import { User } from "../../models/users.model";
import bcrypt from "bcrypt";
import { generateAuthToken, removeTokenWithUserId } from "../../utils/utils";
import { Device } from "../../models/device.model";
class authController {
    public static async login(req: Request, res: Response){
        try {
            const { email, password } = req.body.validatedBodyRequest;
            
            const user: any = await User.findOne({email: email});

            if(user && user.password && !(await bcrypt.compare(password, user.password))){
                return res.status(400).json({
                    status: false,
                    message: "Invalid credential"
                })
            }

            const token = await generateAuthToken(user);

            await Device.create({
                authToken: token,
                userId: user._id
            })

            res.status(200).json({
                status: true,
                authToken: token,
                message: "login"
            })
        } catch (error: any) {
            res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }

    public static async signup(req: Request, res: Response) {
        try {
            const { firstName, lastName, email, password } = req.body.validatedBodyRequest;
            const convertedPassword = await bcrypt.hash(password, 10); 
            const user = await User.create({
                firstName,
                lastName,
                email,
                password: convertedPassword
            })

            return res.status(200).json({
                status: true,
                data: user
            })
        } catch (error: any) {
            res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
    
    public static async getProfile(req: Request, res: Response) {
        try {
            const { userId } = req.body.auth;
            const user:any = await User.findOne({ _id: userId });
          
            if(!user){
                return res.status(400).json({
                    status: false,
                    message: "Invalid auth token"
                })
            }
            
            res.status(200).json({
                status: true,
                data: user
            })
        } catch (error: any) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }

    public static async logout(req: Request, res: Response) {
        try {
            const { userId } = req.body.auth;
            
            await removeTokenWithUserId(userId);

            return res.status(200).json({
                status: true,
                message: "Loggedout successfully"
            })
        } catch (error: any) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
}

export default authController;