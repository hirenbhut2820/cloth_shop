import mongoose, { Schema } from "mongoose";

interface deviceType{
    authToken: string;
    userId: string;
    createdAt: string;
}

const deviceSchema = new Schema({
    authToken: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

const Device = mongoose.model<deviceType>("devices", deviceSchema);

export { Device };