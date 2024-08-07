import { IoIosStar } from 'react-icons/io';

const ReviewCard = ({ review }) => {
    // Function to create an array of stars for rating display
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <IoIosStar
                key={index}
                className={`text-2xl ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
            />
        ));
    };

    // Format the review date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Format the review time
    const formatTime = (dateString) => {
        const options = { hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleTimeString(undefined, options);
    };

    return (
        <div className="bg-gradient-to-r from-gray-100 to-white border border-gray-200 shadow-md rounded-lg p-4 mb-6 hover:shadow-lg transition-shadow duration-300 relative">
            <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-lg text-gray-800">{review.userName}</span>
                <div className="text-gray-400 text-sm text-right">
                    <div>{formatDate(review.createdAt)}</div>
                    <div>{formatTime(review.createdAt)}</div>
                </div>
            </div>
            <div className="flex items-center mb-2">
                {renderStars(review.rating)}
                <span className="ml-2 text-sm font-semibold text-gray-600">{review.rating} stars</span>
            </div>
            <p className="text-gray-700 mb-2">{review.review}</p>
        </div>
    );
};

export default ReviewCard;
