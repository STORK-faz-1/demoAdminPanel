import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/taxes";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row, Form, Input, FormGroup } from "reactstrap";

const Taxes = () => {
	return (
		<Fragment>
			<Breadcrumb title="Maliyet Bilgileri" parent="Maliyet" />
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
		  </Row>
        </Col>
				<Row>
					<Col sm="12">
						<Card>
							{/* <CardHeader>
								<h5>Maliyet Bilgileri</h5>
							</CardHeader> */}
							<CardBody>
							<Form >
							<FormGroup>
    <Input
      type="search"
      placeholder="🔎 Ara.."
      style={{ border: '1px solid #48b6ff', paddingLeft: '5px' }}
	  className="search-input"
    />
  </FormGroup>
			 </Form>
								<div
									id="basicScenario"
									className="product-list translation-list"
								>
									<Datatable
										multiSelectOption={false}
										myData={data}
										pageSize={6}
										pagination={false}
										class="-striped -highlight"
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

export default Taxes;
