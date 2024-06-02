import React, { Fragment } from "react";
import LoginTabset from "./loginTabset";
import { ArrowLeft } from "react-feather";
import Slider from "react-slick";
import stats from "../../assets/images/dashboard/stats.png";
import "../../assets/scss/slick.scss";
import "../../assets/scss/slick-theme.scss";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const Login = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
    };
    return (
        <Fragment>
            <div className="login-background">
                <div className="authentication-box">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={8} >
                                <Card style={{ boxShadow: "0 2px 15px 0 rgba(5, 121, 188, 0.91)" }} className="tab2-card">
                                    <CardBody>
                                        <LoginTabset />
                                    </CardBody>
                                </Card>
                                <a href="https://multikart-react.vercel.app/"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="btn btn-primary back-btn mt-3"
                                >
                                    <ArrowLeft />
                                    Back
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
