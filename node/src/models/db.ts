import mongoose from "mongoose";

export class connection{
    public static async connectDB(){
        try {
            mongoose.connect("mongodb://127.0.0.1:27017/clothShop");
            console.log("connect")
        } catch (error: any){
            console.log("msg=>", error.message)
        }
    }
}