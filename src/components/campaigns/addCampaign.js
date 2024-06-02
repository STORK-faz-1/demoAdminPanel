import React from "react";
import Breadcrumb from "../common/breadcrumb";
import { Line, Bar } from "react-chartjs-2";
import data from "../../assets/data/listCampaigns";
import Datatable from "../common/datatable";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import {
	lineChart,
	chartOptions,
	areaChart,
	areaOptions,
	barOptions,
	barChart,
	sellOption,
	sellData,
	salesOption,
	salesData,
} from "../../constants/chartData";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Campaigns = () => {
	return (
		<div>
			<Breadcrumb title="Create Campaign" parent="Campaigns" />
			{/* <Container fluid={true}>
				<Row>
					<Col xl="8" md="6">
						<Card>
							<CardHeader>
								<h5>Satış Özeti</h5>
							</CardHeader>
			
						</Card>
					</Col>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Transfer Raporu</h5>
							</CardHeader>
							<CardBody>
								
							</CardBody>
						</Card>
					</Col>
					<Col lg="6">
						<Card>
							<CardHeader>
								<h5>Giderler</h5>
							</CardHeader>
							<CardBody className="expense-chart">
								<div className="chart-overflow" id="area-chart1">
									<Line
										data={areaChart}
										options={areaOptions}
										width={778}
										height={308}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6">
						<Card>
							<CardHeader>
								<h5> Satış / Alım</h5>
							</CardHeader>
							<CardBody>
								<div className="sales-chart">
									<Bar
										data={barChart}
										options={barOptions}
										width={778}
										height={308}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Col sm="12">
					<Card>
						<CardHeader>
							<h5> Satış / Alım İadesi</h5>
						</CardHeader>
				
					</Card>
				</Col>
			</Container> */}
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							{/* <CardHeader>
								<h5>Products Category</h5>
							</CardHeader> */}
							<CardBody>
                            <Form>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label >
          Campaign Name
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Name"
          type="email"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label >
		Campaign Code
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Code"
          type="password"
        />
      </FormGroup>
    </Col>
  </Row>

  <Button>
  Create
  
  </Button>
</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Campaigns;
