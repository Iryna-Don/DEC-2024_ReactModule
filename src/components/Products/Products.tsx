import {FC, useState} from 'react';
import {IProduct} from "../../models/IProduct.ts";
import {getProducts} from "../../services/api.service.ts";
import Product from "../Product/Product.tsx";

const Products: FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    getProducts()
        .then(value => setProducts(value));
    return (
        <div className={'container'}>
            {products.map((product, index) => <Product key={index} product={product}/>)}
        </div>
    );
};

export default Products;