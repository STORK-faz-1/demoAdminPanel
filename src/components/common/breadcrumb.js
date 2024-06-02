import React from "react";
import { Home } from "react-feather";
import { Link } from "react-router-dom";
import { Col, Container, Row, Input, FormGroup} from "reactstrap";

const Breadcrumb = ({title,parent}) => {

	return (
		<Container fluid={true}>
			<div className="page-header">
				<Row>
					<Col lg="6">
						<div className="page-header-left">
							<h3>
								{title}
								<small></small>
							</h3>
						</div>
					</Col>
					{/* <Col lg="2">
					<FormGroup row>

            <Col sm={20}>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
            size={"sm"}
              >
            <option>
                  Tüm Zamanlar
                </option>
                <option>
                  Bugün
                </option>
                <option>
                  Dün
                </option>
                <option>
                  Son 3 Gün
                </option>
                <option>
                  Son 7 Gün
                </option>
            <option>
                  Son 14 Gün
                </option>
            <option>
                  Son 30 Gün
                </option>
            <option>
                  Son 90 Gün
                </option>
            <option>
                  Son 180 Gün
                </option>
            <option>
                  Son 365 Gün
                </option>
          
              </Input>
              
            </Col>
          </FormGroup>
        </Col> */}
        {/* <Col lg="2">
                  <FormGroup row>

            <Col sm={20}>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
            size={"sm"}
              >
            <option>
                İngiltere
                </option>
                <option>
                  Kanada
                </option>
                <option>
                  Meksika
                </option>
              </Input>
            </Col>
          </FormGroup>
        </Col> */}
					<Col lg="6">
						<ol className="breadcrumb pull-right">
							<li className="breadcrumb-item">
								<Link to="/dashboard">
									<Home />
								</Link>
							</li>
							<li className="breadcrumb-item">{parent}</li>
							<li className="breadcrumb-item active">{title}</li>
						</ol>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default Breadcrumb;
