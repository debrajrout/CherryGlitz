"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { FaStar } from "react-icons/fa";
import { submitReview } from "@/actions/Review";
import { toast } from "sonner";
import { motion } from "framer-motion";

const iconVariants = {
    hidden: {
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)"
    }
};
export function DialogDemo({ uid }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleStarClick = (value) => {
        setRating(value);
    };

    const handleStarHover = (value) => {
        setHover(value);
    };

    const handleStarHoverLeave = () => {
        setHover(0);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const shop_id = uid;
        try {
            await submitReview(shop_id, rating, reviewText);
            toast.success("Review submitted successfully");
            setIsOpen(false); // Close the dialog on successful submission
        } catch (error) {
            console.error("Error submitting review:", error);
            toast.error("Failed to submit review");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button
                    className="text-blue-800 mt-1 font-semibold hover:scale-105 "
                    onClick={() => setIsOpen(true)}
                >
                    <span className="relative text-sm ">
                        Share your Review
                        <span className="ml-3 animate-ping text-blue-600">+</span>
                    </span>
                </button>

            </DialogTrigger>
            <DialogContent className="w-[90%] sm:max-w-[600px] rounded-lg bg-white shadow-lg p-6">
                <DialogHeader className="flex items-center justify-between">
                    <DialogTitle className="text-xl font-semibold text-gray-800">Share Your Experience</DialogTitle>
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close dialog"
                    >
                        <span className="text-xs font-bold text-red-300">May be later</span>
                    </button>
                </DialogHeader>
                <DialogDescription className="text-gray-600 mb-4">
                    Share what you think about the product and help others make a decision.
                </DialogDescription>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="flex items-center">
                            <Label htmlFor="rating" className="mr-4 text-gray-700">
                                Rating
                            </Label>
                            <div id="rating" className="flex space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        className={`cursor-pointer text-2xl transition-colors duration-300 ${hover >= star || rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                                        onClick={() => handleStarClick(star)}
                                        onMouseEnter={() => handleStarHover(star)}
                                        onMouseLeave={handleStarHoverLeave}
                                        title={`${star} Star${star > 1 ? 's' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <Label htmlFor="review" className="text-gray-700">
                                Add Review
                            </Label>
                            <textarea
                                id="review"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Write your review here..."
                                rows="5"
                            />
                        </div>
                    </div>
                    <DialogFooter className="mt-4">
                        <Button type="submit" className="bg-yellow-500 text-white hover:bg-yellow-600">
                            Submit Review
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
