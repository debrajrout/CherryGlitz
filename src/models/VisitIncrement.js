import { model, models, Schema } from "mongoose";

const VisitIncrementSchema = new Schema({
    shopId: { type: Schema.Types.ObjectId, required: true, ref: 'Shop' },
    createdAt: { type: Date, default: Date.now, expires: '30d' }
});

export const VisitIncrement = models?.VisitIncrement || model("VisitIncrement", VisitIncrementSchema);
