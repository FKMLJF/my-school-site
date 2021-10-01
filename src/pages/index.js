import * as React from "react"
import MyNavbar from "../templates/navbar";
import { Col, Container, Row} from "react-bootstrap";
import Graduate from "../images/graduate-2.png";
import HighSchool from "../images/high-school.png";
import Trophy from "../images/trophy.png";
import HeadCard from "../templates/head-card";

const IndexPage = () => {
    return (
        <Container fluid={true} className={"px-4"}>
            <MyNavbar/>
            <Row >
                <Col className={"main-card"} lg={12}></Col>
                <Col lg={12} className={"mb-4"}>
                    <h1 className={"display-2 mt-2"}> Az angol nyelviskola</h1>
                    <h1 className={"text-justify text-orange"}>Készülj fel velünk, nyelvvizsgázz nálunk!</h1>
                </Col>

                <Col lg={4} md={4} sm={4} className={"mb-3"}>
                    <HeadCard
                        img={Graduate}
                        head={"Hivatalos EuroExam Nyelvvizsgahely"}
                        desc={"Nálunk nemzetközileg is elismert EuroExam nyelvvizsgát tehetsz."}/>
                </Col>

                <Col lg={4} md={4} sm={4} className={"mb-3"}>
                    <HeadCard
                        img={HighSchool}
                        head={"Több 10 évnyi tapasztalat, közel 1000 tanuló"}
                        desc={"Iskolánk, és minden tagja maximális felkészültséggel vár."}/>
                </Col>

                <Col lg={4} md={4} sm={4} className={"mb-3"}>
                    <HeadCard
                        img={Trophy}
                        head={"Érvényesülj velünk a nagyvilágban"}
                        desc={"Szerezd meg a diplomád, nyerj felvételit, érd el az álom munkád…velünk."}/>
                </Col>
            </Row>
        </Container>
    )
}

export default IndexPage
