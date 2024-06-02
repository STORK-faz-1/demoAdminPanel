import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/listCoupons";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row, Input, FormGroup } from "reactstrap";

const ListCoupons = () => {
	return (
		<Fragment>
			<Breadcrumb title="Kupon Listesi" parent="Kuponlar" />
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
							{/* <CardHeader>
								<h5>Products Category</h5>
							</CardHeader> */}
							<CardBody>
								<div
									id="batchDelete"
									className="category-table order-table coupon-list-delete"
								>
									<Datatable
										multiSelectOption={true}
										myData={data}
										pageSize={10}
										pagination={true}
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

export default ListCoupons;
