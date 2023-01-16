import { Container } from "react-bootstrap"

const Header = () => {
    return (
        <Container fluid>
            <div className="header">
            <img
                src={process.env.PUBLIC_URL+"/Images/airbnb-logo.png"}
                alt="Airbnb-Logo"
                className="logo"
            />
            </div>
        </Container>
    )
}

export default Header