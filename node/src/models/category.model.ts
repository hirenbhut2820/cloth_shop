import mongoose, { Schema } from "mongoose";

interface categoryType {
    name: String;
    description: String;
    productIds: Array<String>;
    createdAt: Date;
    deletedAt: Date;
    updatedAt: Date;
}

const categorySchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    productIds: {
        type: Array
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

const Category = mongoose.model("categories", categorySchema);

export { Category, categoryType };