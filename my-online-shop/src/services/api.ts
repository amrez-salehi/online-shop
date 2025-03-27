import axios from "axios";  


export const request = axios.create({
    baseURL: "http://localhost:3004",
 
});

export const getProducts = async () => {
    const data = await request.get("/products");
    return data;
};

export const getProductById = async (id: string) => {
    const data = await request.get(`/products/${id}`);
    return data;
};


    




