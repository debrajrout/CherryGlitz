"use client";
import { RemoveLike } from '@/actions/LikeShop';
import React from 'react';

export default function LikeRemove({ uid, onRemove }) {
    const handleRemove = async () => {
        try {
            await RemoveLike(uid);
            onRemove(uid);  // Notify parent component to update its state
        } catch (error) {
            console.error("Error removing liked shop:", error);
        }
    };

    return (
        <button className="text-red-400/80" onClick={handleRemove}>Remove</button>
    );
}
