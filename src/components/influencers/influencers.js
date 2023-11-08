import React from "react";
import Breadcrumb from "../common/breadcrumb";
import { Line, Bar } from "react-chartjs-2";
import data from "../../assets/data/listInfluencers";
import Datatable from "../common/datatable";
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
import { Card, CardBody, CardHeader, Col, Container, Row, Input, FormGroup } from "reactstrap";

const Campaigns = () => {
	return (
		<div>
			<Breadcrumb title="Influencer Listesi" parent="Influencers" />
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
		</div>
	);
};

export default Campaigns;
