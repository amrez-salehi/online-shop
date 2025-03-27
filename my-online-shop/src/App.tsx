import Container from "./components/container/Container"
import Navbar from "./components/Navbar/Navbar"
import AppRoutes from "./routes/AppRoutes"



function App() {

  return (
    <>
      <div>
      <Navbar/>
   <Container>
      <AppRoutes/>
   </Container>
      </div>      
    </>
  )
}

export default App
