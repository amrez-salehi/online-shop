            import { useParams } from "react-router";
            import { getProductById } from "../../services/api";
            import { useEffect, useState } from "react";
            import { iproduct } from "../../components/types/serveer";    
            import Button from "../../components/button/Button";
            const Product = () => {
                const { id } = useParams<{ id: string }>(); 


                const [productData, setProductData] = useState<iproduct>({} as iproduct);   

                useEffect(() => {
                    const fetchProduct = async () => {
                        const data = await getProductById(id as string);
                        setProductData(data.data);
                    };
                    fetchProduct();
                }, [id]);       
                return (
                    <div className="flex flex-col font-bold text-left shadow-md p-4">
                        <img src={productData.image} alt={productData.title} /> 
            <div className="my-6">
                        <h1>Product{id}</h1>
                        <h1>{productData.title}</h1>
                        <p>{productData.description}</p>
                        <p>{productData.price}</p>
            </div>
            <div className="flex gap-4">
            <Button className="bg-blue-500 rounded-md p-2">Add to Cart</Button>
                <Button className="bg-green-500 rounded-md p-2">Buy Now</Button>
            </div>
                    </div>
                )
            }   

            export default Product;     
