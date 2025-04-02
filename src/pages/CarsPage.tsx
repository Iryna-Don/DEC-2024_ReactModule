import {useEffect, useState} from "react";
import Car from "../components/car/Car.tsx";
import {ICar} from "../models/ICar.ts";
import {carsApi} from "../services/car.service.ts";


const CarsPage = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        carsApi.getCars()
            .then(cars => setCars(cars))
    }, []);
    return (
        <>
            <div className={'container'}>
                {cars.map(car => <Car car={car} key={car.id}/>)}
            </div>

        </>
    );
};

export default CarsPage;