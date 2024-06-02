import React, { Fragment, useState} from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/translations";
import { Search } from "react-feather";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row, Form, FormGroup, Input} from "reactstrap";

const Translations = () => {

	return (
		<Fragment>
			<Breadcrumb title="Çeviriler" parent="Yerelleştirme" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							{/* <CardHeader>
								<h5>Çeviriler</h5>
							</CardHeader> */}
							<CardBody>
							<Form >
							<FormGroup>
    <Input
      type="search"
      placeholder="🔎 Search.."
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

export default Translations;
