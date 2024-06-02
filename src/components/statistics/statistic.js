import React,  { useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import { Line, Bar } from "react-chartjs-2";

import {
	Chart as ChartJS,
  } from 'chart.js';
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
import { Chart } from "react-google-charts";

import {
	Repeat,
    Briefcase
} from "react-feather";
import { Card, CardBody, CardHeader, Col, Container, Row, ListGroup, ListGroupItem} from "reactstrap";
import {
	Media,
    DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
Input,
FormGroup
} from "reactstrap";
const Campaigns = () => {
     const employeeData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                lineTension: 0.4,
                data: [60, 78, 60, 89, 76, 87, 47],
                borderColor: '#ff8084',
                backgroundColor: 'rgba(255, 128, 132, 0.1)',
                fill: true,
            }
        ]
    };
     const employeeOptions = {
        maintainAspectRatio: false,
        height: 45,
        width: 500,
        animation: false,
        plugins: {
            legend: {
              display: false
            }
        },
      }

    const LineOptions3 = {
		hAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		vAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		colors: ["#a5a5a5"],
		chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
		legend: "none",
	};
    const LineOptions = {
		hAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		vAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		colors: ["#ff8084"],
		legend: "none",
	};
    const pieOptions = {
		title: "",
		pieHole: 1,
		slices: [
			{
				color: "#ff8084",
			},
			{
				color: "#13c9ca",
			},
			{
				color: "#f0b54d",
			},
		],
		tooltip: {
			showColorCode: false,
		},
		chartArea: { left: 0, top: 10, width: "360px", height: "100%" },
		legend: "none",
	};
    const doughnutOptions = {
		title: "",
		pieHole: 0.35,
		pieSliceBorderColor: "none",
		colors: ["#ff8084", "#13c9ca", "#a5a5a5"],
		legend: {
			position: "none",
		},
		pieSliceText: "none",
		tooltip: {
			trigger: "none",
		},
		animation: {
			startup: true,
			easing: "linear",
			duration: 1500,
		},
		chartArea: { left: 0, top: 10, width: "360px", height: "100%" },
		enableInteractivity: false,
	};
	const [isWeekly, setIsWeekly] = useState(false); // Durum değişkeni ekleyin ve varsayılan olarak günlük satışı gösterin
  
	return (
		<div>
			<Breadcrumb title="Tüm İstatistikler" parent="İstatistikler" />
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

					<Col xl="6 xl-100" >
						<Card className=" order-graph sales-carousel">
							<CardHeader>
								<h6>Toplam Satış</h6>
								<Row>
									<Col className="col-6">
										<div className="small-chartjs">
											<div
												className="flot-chart-placeholder"
												id="simple-line-chart-sparkline-3"
											>
												<Chart
													height={"60px"}
													chartType="LineChart"
													loader={<div>Loading Chart</div>}
													data={[
														["x", "time"],
														[0, 20],
														[1, 5],
														[2, 120],
														[3, 10],
														[4, 140],
														[5, 15],
													]}
													options={LineOptions}
													legend_toggle
												/>
											</div>
										</div>
									</Col>
									<Col className="col-6">
										<div className="value-graph">
											<h3>
												42%{" "}
												<span>
													<i className="fa fa-angle-up font-primary"></i>
												</span>
											</h3>
										</div>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Media>
									<Media body>
										{/* <span>Geçen Ayki Satışlar</span> */}
										<h2 className="mb-0">9054</h2>
										{/* <p>
											0.25%{" "}
											<span>
												<i className="fa fa-angle-up"></i>
											</span>
										</p> */}
										{/* <h5 className="f-w-600 f-16">Ağustos ayı brüt satışları</h5> */}
										{/* <p>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting
										</p> */}
									</Media>
									<div className="bg-primary b-r-8">
										<div className="small-box">
											<Briefcase />
										</div>
									</div>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="6 xl-100">
            <Card className="order-graph sales-carousel">
              <CardHeader>
                <h6>{isWeekly ? "Haftalık Satış" : "Günlük Satış"}</h6>
                <Row>
                  <Col className="col-6">
                    <div className="small-chartjs">
                      <div
                        className="flot-chart-placeholder"
                        id="simple-line-chart-sparkline-1"
                      >
                        <Chart
                          height={"60px"}
                          chartType="LineChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ["x", "time"],
                            [0, 85],
                            [1, 83],
                            [2, 90],
                            [3, 70],
                            [4, 85],
                            [5, 60],
                            [6, 65],
                            [7, 63],
                            [8, 68],
                            [9, 68],
                            [10, 65],
                            [11, 40],
                            [12, 60],
                            [13, 75],
                            [14, 70],
                            [15, 90],
                          ]}
                          options={LineOptions3}
                          legend_toggle
                        />
                      </div>
                    </div>
                  </Col>
                  <Col className="col-6">
                    <div className="value-graph">
                      <h3>
                        75%{" "}
                        <span>
                          <i className="fa fa-angle-up font-danger"></i>
                        </span>
                      </h3>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Media>
                  <Media body>
                    {/* <span>Güvenlik satışları</span> */}
                    <h2 className="mb-0">5782</h2>
                    {/* <p>
                      0.25%{" "}
                      <span>
                        <i className="fa fa-angle-up"></i>
                      </span>
                    </p> */}
                    {/* <h5 className="f-w-600 f-16">Gross sales of June</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p> */}
                  </Media>
                  <div className="bg-danger b-r-8">
                    <div className="small-box">
                      <Repeat
                        onClick={() => setIsWeekly(!isWeekly)} // Bu düğmeye tıkladığında haftalık / günlük görünümü değiştirin
                      />
                    </div>
                  </div>
                </Media>
              </CardBody>
            </Card>
          </Col>
                    <Col sm="12">
						<Card>
							<CardHeader>
								<h5>Site İçi Aramalar</h5>
							</CardHeader>
							<CardBody>
								<Row>
                                <Col xl="12 xl-100" >
                                <Card

>
  <CardHeader style={{ backgroundColor: '#67c7ff', color: 'white' }}>
  🔎 Site İçi En Çok Aranan Kelimeler
  </CardHeader>
  <ListGroup flush>
    <ListGroupItem>
      An item
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
  </ListGroup>
</Card>
					</Col>
                    {/* <Col xl="6 xl-100" >
                    <Card
>
  <CardHeader style={{ backgroundColor: '#67c7ff', color: 'white'}} >
  🔎 En Çok Aranan Ürünler
  </CardHeader>
  <ListGroup flush>
    <ListGroupItem>
      An item
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
  </ListGroup>
</Card>
					</Col> */}
								</Row>
							</CardBody>
						</Card>
					</Col>
                    <Col sm="12">
						<Card>
							<CardHeader>
								<h5>Sales Summary</h5>
							</CardHeader>
							<CardBody>
								<Row>
									<Col xl="3 xl-50" sm="6">
										<div className="order-graph">
											{/* <h6>Konuma Göre Siparişler</h6>
											<div className="chart-block chart-vertical-center">
												<Chart
													width={"100%"}
													height={"180px"}
													chartType="PieChart"
													loader={<div>Loading Chart</div>}
													data={[
														["Task", "Hours per Day"],
														["Saint Lucia", 300],
														["Kenya", 50],
														["Liberia", 100],
													]}
													options={doughnutOptions}
													legend_toggle
												/>
											</div> */}
											<h6>Sales by Location</h6>
											<div className="peity-chart-dashboard text-center">
												<Chart
													chartType="PieChart"
													data={[
														["Task", "Hours per Day"],
														["Saint Lucia", 300],
														["Kenya", 50],
														["Liberia", 100],
													]}
													options={pieOptions}
													graph_id="PieChart"
													width={"100%"}
													height={"180px"}
													legend_toggle
												/>
											</div>
											<div className="order-graph-bottom">
												<Media>
													<div className="order-color-primary"></div>
													<Media body>
														<h6 className="mb-0">
															Turkey{" "}
															<span className="pull-right">$157</span>
														</h6>
													</Media>
												</Media>
												<Media>
													<div className="order-color-secondary"></div>
													<Media body>
														<h6 className="mb-0">
														Macedonia <span className="pull-right">$347</span>
														</h6>
													</Media>
												</Media>
												<Media>
													<div className="order-color-danger"></div>
													<Media body>
														<h6 className="mb-0">
														Russia<span className="pull-right">$468</span>
														</h6>
													</Media>
												</Media>
												<Media>
													<div className="order-color-warning"></div>
													<Media body>
														<h6 className="mb-0">
														Serbia
															<span className="pull-right">$742</span>
														</h6>
													</Media>
												</Media>
												<Media>
													<div className="order-color-success"></div>
													<Media body>
														<h6 className="mb-0">
														Bulgaria{" "}
															<span className="pull-right">$647</span>
														</h6>
													</Media>
												</Media>
											</div>
										</div>
									</Col>
									<Col xl="3 xl-50" sm="6">
										<div className="order-graph sm-order-space">
											{/* <h6>Konuma Göre Satışlar</h6>
											<div className="peity-chart-dashboard text-center">
												<Chart
													chartType="PieChart"
													data={[
														["Task", "Hours per Day"],
														["Saint Lucia", 300],
														["Kenya", 50],
														["Liberia", 100],
													]}
													options={pieOptions}
													graph_id="PieChart"
													width={"100%"}
													height={"180px"}
													legend_toggle
												/>
											</div> */}
											{/* <div className="order-graph-bottom sales-location">
												<Media>
													<div className="order-shape-primary"></div>
													<Media body>
														<h6 className="mb-0 me-0">
															Germany <span className="pull-right">25%</span>
														</h6>
													</Media>
												</Media>
												<Media>
													<div className="order-shape-secondary"></div>
													<Media body>
														<h6 className="mb-0 me-0">
															Brasil <span className="pull-right">10%</span>
														</h6>
													</Media>
												</Media>
												<Media>
													<div className="order-shape-danger"></div>
													<Media body>
														<h6 className="mb-0 me-0">
															United Kingdom
															<span className="pull-right">34%</span>
														</h6>
													</Media>
												</Media>
												<Media>
													<div className="order-shape-warning"></div>
													<Media body>
														<h6 className="mb-0 me-0">
															Australia<span className="pull-right">5%</span>
														</h6>
													</Media>
												</Media>
												<Media>
													<div className="order-shape-success"></div>
													<Media body>
														<h6 className="mb-0 me-0">
															Canada <span className="pull-right">25%</span>
														</h6>
													</Media>
												</Media>
											</div> */}
										</div>
									</Col>
									<Col xl="6 xl-100">
									<div className="d-flex p-5 justify-content-center">

  <UncontrolledDropdown
    className="me-2"
    direction="down"
  >
    <DropdownToggle
	  caret size="sm"
      color="primary"
    >
      Income by Months
    </DropdownToggle>
    <DropdownMenu>
      {/* <DropdownItem header>
        dropdown
      </DropdownItem> */}
      <DropdownItem>
        January
      </DropdownItem>
      {/* <DropdownItem divider /> */}
      <DropdownItem>
        February
      </DropdownItem>
	  <DropdownItem>
        March
      </DropdownItem>
	  <DropdownItem>
        April
      </DropdownItem>
	  <DropdownItem>
        May
      </DropdownItem>
	  <DropdownItem>
        June
      </DropdownItem>
	  <DropdownItem>
        July
      </DropdownItem>
	  <DropdownItem>
        August
      </DropdownItem>
	  <DropdownItem>
        September
      </DropdownItem>
	  <DropdownItem>
        October
      </DropdownItem>
	  <DropdownItem>
        November
      </DropdownItem>
	  <DropdownItem>
        December
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>


</div>
										<div className="order-graph xl-space">
											{/* <h6>Geçen Ay'a Ait Gelir</h6> */}
											<div className="ct-4 flot-chart-container">
												<Line  type="area" data={employeeData} options={employeeOptions} />
											</div>
										</div>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>

			</Container>
		</div>
	);
};

export default Campaigns;
