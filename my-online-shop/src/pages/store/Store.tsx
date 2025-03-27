import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { iProducts, iproduct } from "../../components/types/serveer";
import Productitem from "../../components/productitem/Productitem";
import { Link } from "react-router";    
const Store = () => {

const [products, setProducts] = useState<iProducts>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data.data);  
        };
        fetchProducts();
    }, []);
    return (
        <div>
                <h2>Products</h2>
         <div className="grid grid-cols-2 gap-4  ">
               {products.map((item: iproduct) => (
                <Link to={`/product/${item.id}`} key={item.id}>
                <Productitem key={item.id} {...item} />
                </Link>
            ))}

         </div>
        </div>
    )
}       

export default Store;

