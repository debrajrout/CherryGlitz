import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
});

export const City = mongoose.models.City || mongoose.model('City', CitySchema);
