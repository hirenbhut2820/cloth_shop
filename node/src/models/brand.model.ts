import mongoose, { Schema, model } from "mongoose";

interface brandType {
    name: string;
    brandLogo: string;
    createdAt: Date;
    deletedAt: Date;
    updatedAt: Date
}

const brandSchema = new Schema({
    name: {
        type: String
    },
    brandLogo: {
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
}, { timestamps: true });

const Brand = mongoose.model<brandType>("brands", brandSchema);
export { Brand, brandType }