import { IoIosStar } from 'react-icons/io';

const ReviewCard = ({ review }) => {
    // Function to create an array of stars for rating display
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <IoIosStar
                key={index}
                className={index < rating ? "text-yellow-500" : "text-gray-300"}
            />
        ));
    };

    return (
        <div className="border-b pb-4 mb-6 bg-slate-100 shadow-lg rounded-lg p-4">
            <div className="flex items-center mb-2">
                <span className="font-semibold text-lg text-gray-800">{review.userName}</span>
            </div>
            <div className="flex items-center mb-2">
                {renderStars(review.rating)}
                <span className="ml-2 text-sm font-semibold text-gray-600">{review.rating} stars</span>
            </div>
            <p className="text-gray-700 mb-2">{review.review}</p>
            <div className="text-gray-400 text-sm">{review.date}</div>
        </div>
    );
};

export default ReviewCard;
