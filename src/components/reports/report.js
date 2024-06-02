import React from "react";
import Breadcrumb from "../common/breadcrumb";
import { Line, Bar } from "react-chartjs-2";
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
import ReportTable from "./report-table";
import { Card, CardBody, CardHeader, Col, Container, Row, Input, FormGroup} from "reactstrap";

const Reports = () => {
	return (
		<div>
			<Breadcrumb title="Tüm Raporlar" parent="Raporlar" />
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
					<Col xl="12" md="6">
						<Card>
							<CardHeader>
								<h5>Sales Summary</h5>
							</CardHeader>
							<CardBody className="sell-graph">
								<Line
									data={salesData}
									options={salesOption}
									width={700}
									height={305}
								/>
							</CardBody>
						</Card>
					</Col>
					{/* <Col xl="4" md="6">
						<Card className="report-employee">
							<CardHeader>
								<h2>75%</h2>
								<h6 className="mb-0">Çalışanlar Memnun</h6>
							</CardHeader>
							<CardBody className="p-0">
								<div className="ct-4 flot-chart-container">
									<Line
										data={lineChart}
										options={chartOptions}
										width={778}
										height={500}
									/>
								</div>
							</CardBody>
						</Card>
					</Col> */}
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Kargo Raporu</h5>
							</CardHeader>
							<CardBody>
								<div id="basicScenario" className="report-table">
									<ReportTable />
								</div>
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
						<CardBody>
							<div className="report-last-sm">
								<Line
									data={sellData}
									options={sellOption}
									width={700}
									height={300}
								/>
							</div>
						</CardBody>
					</Card>
				</Col>
			</Container>
		</div>
	);
};

export default Reports;
