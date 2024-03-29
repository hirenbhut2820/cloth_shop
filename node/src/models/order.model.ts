import mongoose, { Schema } from "mongoose";

interface orderType{
    productIds: Array<String>;
    productPrice: Array<String>;
    orderTotal: string;
}

const orderSchema = new Schema({
    productIds: {
        type: Array
    },
    productPrice: {
        type: Array
    },
    orderTotal: {
        type: String
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
}, { timestamps: true});

const Order = mongoose.model("orders", orderSchema);

export { Order, orderType };