import {FC} from "react";

type PaginationProps = {
    limit: number,
    skip: number,
    setQuery: (params: { limit: string, skip: string }) => void,
    total: number,
}

const PaginationComponent: FC<PaginationProps> = ({ limit, skip, setQuery, total }) => {

    const handlePrevious = () => {
        setQuery({ limit: limit.toString(), skip: (skip - limit).toString()});
    };

    const handleNext = () => {
        setQuery({ limit: limit.toString(), skip: (skip + limit).toString()});
    };

    return (
        <div>
            <button className={'btn'} disabled={skip <= 0} onClick={handlePrevious}>
                Previous
            </button>
            <button className={'btn'} disabled={total-limit<=skip} onClick={handleNext}>
                Next
            </button>
        </div>
    );
};
export default PaginationComponent;
