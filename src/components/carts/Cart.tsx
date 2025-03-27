import {ICart} from "../../models/cart/ICart.ts";
import {FC} from "react";

type CartProps = {
    cart:ICart;
};
const Cart:FC<CartProps> = ({cart}) => {
const{id, userId}=cart;
    return (
        <div>
            cartId: {id} userId:{userId}
        </div>
    );
};

export default Cart;