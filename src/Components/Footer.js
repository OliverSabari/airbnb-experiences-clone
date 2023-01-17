import { Container } from "react-bootstrap"


import {FaArrowCircleUp} from "react-icons/fa"

const Footer = () => {
    return (
        <Container>
            <div className="footer-div">
            <img
                src={process.env.PUBLIC_URL+"/Images/airbnb-logo.png"}
                alt="Airbnb-Logo"
               
            />
            <p className="copyright"> Made with ♥ By Sabari </p>
            <FaArrowCircleUp 
            style={{color : "#FF5A5F"}}
            onClick={() => window.scrollTo({top : 0,behaviour:"smooth"})}
            />
            </div>
        </Container>
    )
}

export default Footer