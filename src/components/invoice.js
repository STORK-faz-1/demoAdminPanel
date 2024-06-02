import React, { Fragment } from "react";
import Breadcrumb from "../components/common/breadcrumb";
import data from "../assets/data/invoice";
import Datatable from "../components/common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row, Input, FormGroup } from "reactstrap";

const Invoice = () => {
	return (
		<Fragment>
			<Breadcrumb title="Faturalar" parent="Faturalar" />
			<Container fluid={true}>
			<Col lg="4">
			<Row>
					<FormGroup row>
	
            <Col xl="6 xl-100">
              <Input
                id="exampleSelect"
                name="select"
                type="select"
            size={"sm"}
              >
            <option>
			England
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
		  </Row>
        </Col>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Amazon Fatura</h5>
							</CardHeader>
							<CardBody>
								<div id="basicScenario" className="product-list">
									<Datatable
										multiSelectOption={false}
										myData={data}
										pageSize={10}
										pagination={true}
										className="-striped -highlight"
									/>
								</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<h5>E-Arşiv Faturası</h5>
							</CardHeader>
							<CardBody>
								<div id="basicScenario" className="product-list">
									<Datatable
										multiSelectOption={false}
										myData={data}
										pageSize={10}
										pagination={true}
										className="-striped -highlight"
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Invoice;
