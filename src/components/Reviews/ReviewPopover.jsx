"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { FaStar } from "react-icons/fa";
import { submitReview } from "@/actions/Review";
import { toast } from "sonner";

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
            const result = await submitReview(shop_id, rating, reviewText);
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
                <span onClick={() => setIsOpen(true)} className="font-bold w-full h-full text-yellow-600 text-sm ml-2">
                    Add your Review +
                </span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Share your Experience</DialogTitle>
                    <DialogDescription>
                        Share what you think about the product and help others make a decision.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="flex items-center">
                            <Label htmlFor="rating" className="mr-4">
                                Rating
                            </Label>
                            <div id="rating" className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        className={`cursor-pointer text-2xl ${(hover || rating) >= star ? "text-green-500" : "text-gray-300"
                                            }`}
                                        onClick={() => handleStarClick(star)}
                                        onMouseEnter={() => handleStarHover(star)}
                                        onMouseLeave={handleStarHoverLeave}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <Label htmlFor="review" className="text-right">
                                Add Review
                            </Label>
                            <textarea
                                id="review"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                className="p-2 border rounded col-span-3"
                                placeholder="Write your review here..."
                                rows="4"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Submit Review</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
