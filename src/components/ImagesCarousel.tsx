import {FC, useState} from 'react';

type ImagesPropsType = {
    images: string[];
    title: string;
}
const ImagesCarousel: FC<ImagesPropsType> = ({images, title}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    return (
        <div className="carousel">
            {images.length > 1 && (
                <button onClick={prevSlide} className="prev">
                    ❮
                </button>
            )}

            <img className="imgProduct" src={images[currentIndex]} alt={title}/>

            {images.length > 1 && (
                <button onClick={nextSlide} className="next">
                    ❯
                </button>
            )}
        </div>
    )

};


export default ImagesCarousel;