import { iproduct } from "../types/serveer";
        


const Productitem = ({image, title, price, description}: {image: string, title: string, price: number, description: string}) => {
    return (
        <div className="shadow-md border-2 border-gray-300 rounded-md p-4 font-bold text-center">
        <div  >  
        <img src={image} alt={title}    />   
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{description}</p>                       
        </div>
        </div>
    )
}

export default Productitem; 
