
import { Container } from "react-bootstrap"


const Imagegrid = () => {
    return (
        <Container>
     
         <div className="grid">
            <img 
             src={process.env.PUBLIC_URL+"/Images/img-grid.png"}
             alt="Grid-Images"
             className="grid-image"
             />
        </div>
       
        </Container>
    )
}

export default Imagegrid