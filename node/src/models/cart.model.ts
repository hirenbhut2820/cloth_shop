import mongoose, { Schema } from "mongoose"

interface cartType{
    userId: string
    productId: string
    productQuantity: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
}

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId
    },
    productId: {
        type: Schema.Types.ObjectId
    },
    productQuantity: {
        type: Number
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

const Cart = mongoose.model<cartType>("carts", cartSchema);

export { Cart, cartType };