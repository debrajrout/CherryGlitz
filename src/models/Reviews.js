import { model, models, Schema } from "mongoose";

const ReviewSchema = new Schema({
    shop_id: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
    reviews: [
        {
            user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
            rating: { type: Number, required: true, min: 1, max: 5 },
            review: { type: String, required: true },
            created_at: { type: Date, default: Date.now }
        }
    ]
});

export const Review = models?.Review || model("Review", ReviewSchema);
