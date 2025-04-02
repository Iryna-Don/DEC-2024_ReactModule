import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { newCarValidator } from "../../validators/newCarValidator.ts";
import { ICar } from "../../models/ICar.ts";
import {carsApi} from "../../services/car.service.ts";
import { useState } from "react";

const CreateCar = () => {
    const [car, setCar] = useState<ICar | null>(null);
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<ICar>({
        resolver: joiResolver(newCarValidator),
        mode: "onChange",
    });

    const onSubmit = (data: ICar) => {
        carsApi.createNewCar(data)
            .then(newCar => {
                setCar(newCar);
                reset();
            })
            .catch(error => {
                console.error('Error creating car:', error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="brand">Brand: </label>
                    <input
                        id="brand"
                        type="text"
                        placeholder="Enter car brand"
                        {...register("brand")}
                    />
                    {errors.brand && <p>{errors.brand.message}</p>}
                </div>

                <div>
                    <label htmlFor="price">Price: </label>
                    <input
                        id="price"
                        type="number"
                        placeholder="Enter car price"
                        {...register("price")}
                    />
                    {errors.price && <p>{errors.price.message}</p>}
                </div>

                <div>
                    <label htmlFor="year">Year: </label>
                    <input
                        id="year"
                        type="number"
                        placeholder="Enter car year"
                        {...register("year")}
                    />
                    {errors.year && <p>{errors.year.message}</p>}
                </div>

                <button type="submit" disabled={!isValid}>Create Car</button>
            </form>

            {car && (
                <div>
                    <h2>Car Created: </h2>
                    <p>ID: {car.id}</p>
                    <p>Brand: {car.brand}</p>
                    <p>Price: {car.price}</p>
                    <p>Year: {car.year}</p>
                </div>
            )}
        </div>
    );
};

export default CreateCar;
