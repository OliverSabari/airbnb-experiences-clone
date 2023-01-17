import { Card } from "react-bootstrap"



const ExperienceCards = (props) => {

    const badgeText = props.openSpots === 0 ? "Sold-Out" : `${props.location}`   //Conditional Rendering

    return (

        <Card className="card">

            <div className="badge-div">
                {badgeText}
            </div>

            <Card.Img
                variant="top"
                className="card-image"
                src={`../Images/${props.coverImg}`}
            />

            <Card.Body>

                <span>
                    <img
                        // process.env.PUBLIC_URL => This is to access the images in public folder
                        src={process.env.PUBLIC_URL + "/Images/Star.png"}
                        alt="star"
                        height="14px"
                    />
                </span>

                <span>
                    {props.stats.rating}
                </span>

                <span>
                    ({props.stats.reviewCount})
                </span>

                <span>
                    • {props.location}
                </span>

                <p className="card-title">
                    {props.title}
                </p>

                <p>
                    <span style={{ fontWeight: "bold" }}> From ${props.price}
                    </span>/person
                </p>

            </Card.Body>

        </Card>


    )
}

export default ExperienceCards