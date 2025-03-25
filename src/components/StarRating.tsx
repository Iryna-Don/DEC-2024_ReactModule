import React from 'react';

const Rating = ({ rating }: { rating: number }) => {
    const maxRating:number = 5;
    const ratingPercentage = (rating / maxRating) * 100;
    return (
        <div
            className="rating"
            style={{ '--rating-width': `${ratingPercentage}%`, '--stars-count': maxRating } as React.CSSProperties}>
            <div className="ratingBody">
                <div className="ratingActive"></div>
            </div>
            <div className="ratingValue">{rating.toFixed(2)}</div>
        </div>
    );
};

export default Rating;
