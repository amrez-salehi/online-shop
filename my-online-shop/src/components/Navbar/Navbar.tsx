
import { Link } from "react-router" 
import navs from "./constant"   
import Container from "../container/Container"
import { useLocation } from "react-router"

const Navbar = () => {
    const{pathname} = useLocation()

    return (    
        <div className="py-4 shadow-md  bg-white">
            <Container>
                   
                {
                    navs.map(({to,title}) => (


                        <Link  className={`mr-4 font-bold ${pathname === to ? "text-sky-500" : ""}`} to={to} key={to}>
                            
                            {title} 
                            
                            
                        </Link>
                    ))
                }
               
            </Container>
            </div>
      
    )
}   

export default Navbar;  


