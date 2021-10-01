import * as React from "react"
import {Card, Col, Row} from "react-bootstrap";

const HeadCard = (props) => {
    return (
        <Card className={"px-2 py-2 min-ih-100 mb-3"}>
            <Card.Body>
                <Row>
                    <Col lg={3} xs={3} className={"d-flex align-items-start pt-2 d-md-none d-lg-block"}>
                        <img src={props.img} className={"card-icons"} alt={"Kép:"+props.head}/>
                    </Col>
                    <Col lg={9} md={12} xs={9}>
                        <h2><strong>{props.head}</strong></h2>
                        <p className={"text-justify"}>{props.desc}</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default HeadCard
