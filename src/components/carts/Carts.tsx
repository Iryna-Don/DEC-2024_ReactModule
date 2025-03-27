import {useParams} from "react-router-dom";
import {ICart} from "../../models/cart/ICart.ts";
import {useEffect, useState} from "react";
import Cart from "./Cart.tsx";
import {getCarts} from "../../services/api.service.ts";

const Carts = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        if (!id) return;
        getCarts(id)
            .then(carts => setCarts(carts))
    }, [id]);


    return (
        <>
            <div>Carts content</div>
            {carts.map(cart => <Cart key={cart.id} cart={cart}/>)}
        </>
    );
};

export default Carts;

