// components/StarRating.tsx
import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass = i <= rating ? "text-yellow-500" : "text-gray-300";
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className={`inline h-[21px] w-6 ${starClass}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.59861 2.92705C9.89796 2.00574 11.2014 2.00574 11.5007 2.92705L12.6937 6.59866C12.8276 7.01068 13.2115 7.28964 13.6448 7.28964H17.5053C18.474 7.28964 18.8768 8.52926 18.0931 9.09866L14.9698 11.3678C14.6194 11.6225 14.4727 12.0738 14.6066 12.4859L15.7996 16.1575C16.0989 17.0788 15.0444 17.8449 14.2607 17.2755L11.1375 15.0063C10.787 14.7517 10.3124 14.7517 9.96188 15.0063L6.83863 17.2755C6.05491 17.8449 5.00043 17.0788 5.29979 16.1575L6.49276 12.4859C6.62664 12.0738 6.47998 11.6225 6.12949 11.3678L3.00624 9.09866C2.22252 8.52926 2.6253 7.28964 3.59402 7.28964H7.45458C7.8878 7.28964 8.27176 7.01068 8.40563 6.59866L9.59861 2.92705Z"
          fill="#E9B741"
        />
      </svg>
    );
  }

  return <div className="flex justify-center">{stars}</div>;
};

export default StarRating;
