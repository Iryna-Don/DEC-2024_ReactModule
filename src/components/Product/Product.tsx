import {FC} from 'react';
import {IProduct} from "../../models/IProduct.ts";
import ImagesCarousel from "../ImagesCarousel.tsx";
import StarRating from "../StarRating.tsx";
import Review from "../Review/Review.tsx";

type ProductPropsType = {
    product: IProduct;
}
const Product: FC<ProductPropsType> = ({product}) => {
    const {
        id,
        title,
        description,
        images,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        tags,
        brand,
        sku,
        weight,
        dimensions,
        warrantyInformation,
        shippingInformation,
        availabilityStatus,
        reviews,
        returnPolicy,
        minimumOrderQuantity,
        thumbnail,
        meta
    } = product;
    return (
        <div className={'productCard'}>
            <p>Product ID: {id}</p>
            <h2>{title}</h2>
            <p>SKU: {sku}</p>
            <h3>{description}</h3>
            <h4>Brand: {brand}</h4>
            <div>
                <ImagesCarousel images={images} title={title}/>
            </div>
            <p>Category: {category}</p>
            <h4>{price} $</h4>
            <h4>Minimum Order Quantity: {minimumOrderQuantity}</h4>
            <h4>Discount Percentage: {discountPercentage}%</h4>
            <p>{availabilityStatus}: {stock}</p>
            <StarRating rating={rating}/>
            <div>
                <h4>Reviews:</h4>
                <div>
                    {reviews.map((review, index) => <Review key={index} review={review}/>)}
                </div>
            </div>
            <img className={'imgProduct'} src={thumbnail} alt={title}/>
            <div>
                Tags: {tags.map((tag: string, index: number) => <span key={index}>{tag}</span>)}
            </div>
            <div>
                <p>Weight: {weight}</p>
                <div>
                    <h4>Dimension: </h4>
                    <p>Width: {dimensions.width}</p>
                    <p>Height: {dimensions.height}</p>
                    <p>Depth: {dimensions.depth}</p>
                </div>
                <div>
                    <p>{warrantyInformation}</p>
                    <p>{shippingInformation}</p>
                    <p>{returnPolicy}</p>
                </div>
            </div>
            <div>
                <h4>Meta:</h4>
                <p>createdAt: {meta.createdAt}, updatedAt: {meta.updatedAt}, barcode: {meta.barcode}</p>
                <img className={'qrCode'} src={meta.qrCode} alt={title}/>
            </div>
        </div>
    );
};

export default Product;