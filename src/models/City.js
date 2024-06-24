// models/City.js

import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    areas: [{
        type: String,
    }],
});

export const City = mongoose.models.City || mongoose.model('City', CitySchema);
