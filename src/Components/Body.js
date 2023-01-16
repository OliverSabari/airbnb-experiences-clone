
import { Container } from "react-bootstrap"
import { data } from "../Config/data"
import ExperienceCards from "./Experience-Cards"

const Body =() => {
    return(
      
        <Container className="card-div ">
        {
            data.map( experience => {
                return (
                    <ExperienceCards key={experience.id} {...experience} />
                )
            })
        }
        </Container>
    )
}

export default Body