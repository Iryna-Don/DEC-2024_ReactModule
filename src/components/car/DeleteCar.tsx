import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { carsApi } from "../../services/car.service.ts";
import { useState } from "react";
import { delCarValidator } from "../../validators/delCarValidator.ts";

const DeleteCar = () => {
    const [delCarId, setDelCarId] = useState<number | null>(null);
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<{ id: number }>({
        resolver: joiResolver(delCarValidator),
        mode: "onChange",
    });

    const onSubmit = (data: { id: number }) => {
        carsApi.deleteCar(data.id)
            .then(() => {
                setDelCarId(data.id);
                reset();
            })
            .catch(error => {
                console.error("Error deleting car:", error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="id">Car ID: </label>
                    <input
                        id="id"
                        type="number"
                        placeholder="Enter ID of the car to delete"
                        {...register("id")}
                    />
                    {errors.id && <p>{errors.id.message}</p>}
                </div>
                <button type="submit" disabled={!isValid}>Delete Car</button>
            </form>

            {delCarId && (
                <div>
                    <h2>Car Deleted:</h2>
                    <p>ID: {delCarId}</p>
                </div>
            )}
        </div>
    );
};

export default DeleteCar;
