import { IoIosStar } from 'react-icons/io';

const ReviewCard = ({ review }) => {
    return (
        <div className="border-b pb-4 mb-4">

            <div className="flex items-center mb-2">
                <IoIosStar className="text-yellow-500" />
                <span className="ml-1 text-sm font-semibold">{review.rating} stars</span>
            </div>
            <p className="text-gray-700 mb-2">{review.review}</p>
            <div className="flex items-center text-gray-500">
                <span>{review.userName}</span>
            </div>
            <div className="text-gray-400 text-sm">{review.date}</div>
        </div>
    );
};

export default ReviewCard;
