import * as React from "react"
import MyNavbar from "../templates/navbar";
import { Col, Container, Row} from "react-bootstrap";
import Graduate from "../images/graduate-2.png";
import HighSchool from "../images/high-school.png";
import Trophy from "../images/trophy.png";
import HeadCard from "../templates/head-card";
import Link from "gatsby-link";

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
                <Col lg={12}><h1 className={"display-3"}>Tanfolyamok</h1></Col>
                <Col lg={4}  md={4} sm={4} className={"p-2 min-ih-100"} >
                    <div className={"card p-4 min-ih-100 "}>
                        <h3 className={"fw-bold"}>Normál Csomag</h3>
                        <p className={"text-orange fw-bolder"}>4 óra / hét, 9 hónap</p>
                        <p>Ha kevés szabadidőd van az angol tanulásra és nem sürgős elérni a céljaidat.</p>
                    </div>
                </Col>
                <Col lg={4}  md={4} sm={4} className={"p-2"}>
                    <div className={"card p-4 min-ih-100 "}>
                        <h3 className={"fw-bold"}>Aktív Csomag</h3>
                        <p className={"text-orange fw-bolder"}>6 óra / hét, 9 hónap</p>
                        <p>Ha van elég szabadidőd és mielőbb szeretnél megtanulni angolul, vagy megszerezni a nyelvvizsgád.</p>
                    </div>
                </Col>
                <Col lg={4}  md={4} sm={4} className={"p-2"}>
                    <div className={"card p-4 min-ih-100 "}>
                        <h3 className={"fw-bold"}>Intenzív Csomag</h3>
                        <p className={"text-orange fw-bolder"}>9 óra / hét, 4 hónap</p>
                        <p>Ha sok időt tudsz rászánni az angol tanulásra, hogy a lehető leggyorsabban célba érj.</p>
                    </div>
                </Col>
                <Col lg={12} className={"text-center"}>
                    <h1 className={"display-3"}>Iratkozz be most!</h1>
                    <p className={"display-6"}>Iratkozz be most! Minden <strong className={"text-orange"}>online</strong> bejelentkező <strong className={"text-orange"}>10%-os kedvezményt kap</strong> első bérletéből! Ne maradj ki!</p>

                    <Link className="btn btn-lg btn-outline-danger" to="/contact/">Jelentkezem!</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default IndexPage
