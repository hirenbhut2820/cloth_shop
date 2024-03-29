import { Schema, model } from "mongoose";

interface productType {
    name: string;
    description: string;
    richDescription: string;
    image: string;
    images: Array<String>;
    brand: string;
    price: string;
    offerPrice: string;
    discountPercentage: string;
    categoryIds: Array<String>;
    countInStocks: string;
    ratings: Array<String>;
    isFeatures: boolean;
    size: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

const productSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    richDescription: {
        type: String
    },
    image: {
        type: String
    },
    images: {
        type: Array
    },
    brand: {
        type: Schema.Types.ObjectId
    },
    price: {
        type: String
    },
    offerPrice: {
        type: String
    },
    discountPercentage: {
        type: String
    },
    categoryIds: {
        type: Array
    },
    countInStocks: {
        type: String
    },
    ratings: {
        type: Array
    },
    isFeatures: {
        type: Boolean
    },
    size: {
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
}, { timestamps: true})

const Product = model<productType>("Product", productSchema);

export { Product, productType };