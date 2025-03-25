import {FC} from 'react';
import {IReview} from "../../models/IProduct.ts";

type ReviewPropsType = {
    review: IReview;
}
const Review: FC<ReviewPropsType> = ({review}) => {
    const {rating, comment, date, reviewerName, reviewerEmail} = review;
    return (
        <div>
            <p>Rating: {rating}</p>
            <p><i>{comment}</i></p>
            <p>{date}</p>
            <p>Reviewer Name: {reviewerName}</p>
            <p>Reviewer Email: {reviewerEmail}</p>
        </div>
    );
};

export default Review;