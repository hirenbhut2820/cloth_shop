import mongoose, { Schema } from "mongoose";

interface couponsType{
    name: string;
    price: string;
    active: boolean
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

const couponsSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date
    },
    deletedAt: {
        type: Date
    }
}, { timestamps: true });

const Coupon = mongoose.model("coupons", couponsSchema);

export { Coupon, couponsType };