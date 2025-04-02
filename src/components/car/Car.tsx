import {FC} from "react";
import {ICar} from "../../models/ICar.ts";
type TypeCarProps={
    car: ICar;
}
const Car:FC<TypeCarProps> = ({car}) => {
    const{id, brand, year, price}=car;
    return (
        <div className={'carCard'}>
            <p>ID:{id} {brand} {year}</p>
            <p>{price}$</p>
        </div>
    );
};

export default Car;