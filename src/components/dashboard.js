import React, { useState, Fragment, useEffect } from "react";
import Breadcrumb from "./common/breadcrumb";
import Datatable from "./common/datatable";
import data from "../assets/data/orders";
import { Repeat } from 'react-feather'; // React Feather kütüphanesinden Repeat ikonunu eklemek için
import Select from 'react-select';
import {
	chartOptions,
	areaChart,
	areaOptions,
	barOptions,
	barChart,
	sellOption,
	sellData,
	salesOption,
	salesData,
} from "../constants/chartDataTwo";
import {
	Navigation,
	Box,
	Truck,
	
	Users,
	Briefcase,
	CreditCard,
	ShoppingCart,
	Calendar,
	CheckSquare,
} from "react-feather";
import CountUp from "react-countup";
import { Chart } from "react-google-charts";

import { Bar, Line } from "react-chartjs-2";
import {
	lineOptions,
	buyOption,
	employeeData,
	employeeOptions,
} from "../constants/chartData";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	BarController,
	BarElement,
	ArcElement,
	Filler,
	RadialLinearScale
  } from 'chart.js';

  
// image impoer
import user2 from "../assets/images/dashboard/user2.jpg";
import user1 from "../assets/images/dashboard/user1.jpg";
import man from "../assets/images/dashboard/man.png";
import user from "../assets/images/dashboard/user.png";
import designer from "../assets/images/dashboard/designer.jpg";
import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Media,
	Row,
	Table,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Form, 
	FormGroup, 
	Input
} from "reactstrap";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	BarController,
	BarElement,
	ArcElement,
	  Filler,
	RadialLinearScale
  );
 
const Dashboard = () => {
	const timeOptions = [
		{ value: 'allTimes', label: 'All Times' },
		{ value: 'today', label: 'Today' },
		{ value: 'yesterday', label: 'Yesterday' },
		{ value: 'three', label: 'The last 3 days' },
		{ value: 'seven', label: 'The last 7 days' },
		{ value: 'fourteen', label: 'The last 14 days' },
		{ value: 'thirty', label: 'The last 1 month' },
		{ value: 'ninety', label: 'The last 3 months' },
		{ value: 'oneHundredEighty', label: 'The last 6 months' },
		{ value: 'threeHundredSixtyFive', label: 'The last 1 year' }
	  ];
	  const storeOptions = [
		{ value: 'England', label: 'England' },
		{ value: 'Canada', label: 'Kanada' },
		{ value: 'Mexican', label: 'Meksika' },
		
	  ];
	  const Checkbox = ({ children, ...props }) => (
		<label style={{ marginRight: '1em' }}>
		  <input type="checkbox" {...props} />
		  {children}
		</label>
	  );
	 

 
	const lineData = {
		labels: ["100", "200", "300", "400", "500", "600", "700", "800"],
		datasets: [
			{
				data: [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
				borderColor: "#9bc735",
				backgroundColor: "#9bc735",
				borderWidth: 2,
				barPercentage: 0.7,
      			categoryPercentage: 0.4,
			},
			{
				data: [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8],
				borderColor: "#67c7ff",
				backgroundColor: "#67c7ff",
				borderWidth: 2,
				barPercentage: 0.7,
      			categoryPercentage: 0.4,
			},
		],
	};

	const buyData = {
		labels: ["", "10", "20", "30", "40", "50"],
		datasets: [
			{
				backgroundColor: "transparent",
				borderColor: "#13c9ca",
				data: [20, 5, 80, 10, 100, 15],
				lineTension: 0.4,
			},
			{
				backgroundColor: "transparent",
				borderColor: "#a5a5a5",
				data: [0, 50, 20, 70, 30, 27],
				lineTension: 0.4,
			},
			{
				backgroundColor: "transparent",
				borderColor: "#ff8084",
				data: [0, 30, 40, 10, 86, 40],
				lineTension: 0.4,
			},
		],
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
	const LineOptions1 = {
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
		colors: ["#13c9ca"],
		chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
		legend: "none",
	};
	const LineOptions2 = {
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
		colors: ["#f5ce8a"],
		chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
		legend: "none",
	};
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
	 const [isKargoCikmamis, setKargoCikmamis] = useState(false);
  const [isKargoCikmamisCard, setKargoCikmamisCard] = useState(false);

  const toggleKargoCikmamis = () => {
    setKargoCikmamis(!isKargoCikmamis);
    setKargoCikmamisCard(!isKargoCikmamisCard);
  };

  useEffect(() => {
	const cardElement = document.querySelector(".kargo-cikmamis-card");
  
	if (cardElement && isKargoCikmamisCard) {
	  let timeouts = [];
  
	  // Kırmızı box shadow'ın 3 kere yanıp sönmesi
	  for (let i = 0; i < 3; i++) {
		let timeoutId = setTimeout(() => {
		  cardElement.style.boxShadow = "0 0 10px red";
		  timeouts.push(setTimeout(() => {
			cardElement.style.boxShadow = "none";
		  }, 1000));
		}, i * 2000);
		timeouts.push(timeoutId);
	  }
  
	  // 3. kez yanıp sönmeden sonra kırmızı box shadow sabit kalsın
	  timeouts.push(setTimeout(() => {
		cardElement.style.boxShadow = "0 0 10px red";
	  }, 6000));
  
	  // Cleanup function to clear timeouts if the component unmounts
	  return () => {
		timeouts.forEach(clearTimeout);
		if (cardElement) {
		  cardElement.style.boxShadow = "none";
		}
	  };
	} else if (cardElement) {
	  // Eğer isKargoCikmamisCard değeri false ise kırmızı gölgeyi kaldır
	  cardElement.style.boxShadow = "none";
	}
  }, [isKargoCikmamisCard]);
  
	return (
		
		<Fragment>
			
			<Breadcrumb title="Dashboard" parent="Home"  />
			
			<Container fluid={true}>
			<Col lg="6">
			<Row>
					<FormGroup row>

            <Col xl="6 xl-100">
			<Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={timeOptions[0]}
		isClearable={true} 
        isSearchable={true} 
        name="time"
        options={timeOptions}
      />


            </Col>
	
            <Col xl="6 xl-100">
			<Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={storeOptions[0]}
		isClearable={true} // Her zaman clearable
        isSearchable={true} // Her zaman searchable
        name="store"
        options={storeOptions}
      />

            </Col>
      
          </FormGroup>
		  </Row>
        </Col>
				<Row>
		
					<Col xl="3 xl-50" md="6">
						<Card className=" o-hidden widget-cards">
							<CardBody className="bg-warning">
								<Media className="static-top-widget row">
									<div className="icons-widgets col-4">
										<div className="align-self-center text-center">
											<Navigation className="font-warning" />
										</div>
									</div>
									<Media body className="col-8">
										<span className="m-0">Product Sales</span>
										<h3 className="mb-0">
											$ <CountUp className="counter" end={6659} />
											
											<br></br>
											<small> This Month</small>
										</h3>
									</Media>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6">
						<Card className=" o-hidden  widget-cards">
							<CardBody className="bg-secondary ">
								<Media className="static-top-widget row">
									<div className="icons-widgets col-4">
										<div className="align-self-center text-center">
											<Box className="font-secondary" />
										</div>
									</div>
									<Media body className="col-8">
										<span className="m-0">Estimated Profit</span>
										<h3 className="mb-0">
											$ <CountUp className="counter" end={9856} />
											
											<br></br>
											<small> This Month</small>
										</h3>
									</Media>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6">
						<Card className="o-hidden widget-cards">
							<CardBody className="bg-info">
								<Media className="static-top-widget row">
									<div className="icons-widgets col-4">
										<div className="align-self-center text-center">
											<Truck className="font-primary" />
										</div>
									</div>
									<Media body className="col-8">
										<span className="m-0">Orders</span>
										
										<h3 className="mb-0">
											 <CountUp className="counter" end={8933} />
											
											<br></br>
											<small> This Month</small>
										</h3>
									</Media>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6">
						<Card className=" o-hidden widget-cards">
							<CardBody className="bg-danger ">
								<Media className="static-top-widget row">
									<div className="icons-widgets col-4">
										<div className="align-self-center text-center">
											<CheckSquare className="font-danger" />
										</div>
									</div>
									<Media body className="col-8">
										<span className="m-0">Completed Orders</span>
										<h3 className="mb-0">
											 <CountUp className="counter" end={4631} />
											<br></br>
											<small> This Month</small>
										</h3>
									</Media>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12">
      <Card className={isKargoCikmamis ? "kargo-cikmamis-card" : ""}>
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h5>{isKargoCikmamis ? 'Orders That Have Not Been Shipped' : 'Orders'}</h5>
            <button
              onClick={toggleKargoCikmamis}
              style={{ border: 'none', background: 'transparent' }}
            >
              <Repeat style={{ border: 'none', background: 'transparent' }} />
            </button>
          </div>
        </CardHeader>

        <CardBody className="order-datatable">
          <Form>
            <FormGroup>
              <Input
                type="search"
                placeholder="🔎 Search.."
                style={{ border: '1px solid #48b6ff', paddingLeft: '5px' }}
                className="search-input"
              />
            </FormGroup>
          </Form>
          <Datatable
            multiSelectOption={false}
            myData={data}
            pageSize={10}
            pagination={true}
            class="-striped -highlight"
          />
        </CardBody>
      </Card>
    </Col>
					{/* <Col  xl="6 xl-100">
						<Card>
							<CardHeader>
								<h5>Sipariş Geçmişi</h5>
							</CardHeader>
							<CardBody>
								<div className="market-chart">
									<Bar
										data={lineData}
										options={lineOptions}
										width={778}
										height={308}
									/>
								</div>
							</CardBody>
						</Card>
					</Col> */}


					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Sales Summary</h5>
							</CardHeader>
							<CardBody className="expense-chart">
							<Col lg="2">
					<FormGroup row>

            <Col sm={20}>
			<Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={timeOptions[0]}
		isClearable={true} // Her zaman clearable
        isSearchable={true} // Her zaman searchable
        name="time"
        options={timeOptions}
      />

            </Col>
          </FormGroup>
        </Col>
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

				
					{/* <Col xl="3 xl-50" md="6">
						<Card className=" order-graph sales-carousel">
							<CardHeader>
								<h6>Toplam satın alma</h6>
								<Row>
									<Col className="col-6">
										<div className="small-chartjs">
											<div
												className="flot-chart-placeholder"
												id="simple-line-chart-sparkline"
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
													options={LineOptions1}
													legend_toggle
												/>
											</div>
										</div>
									</Col>
									<Col className="col-6">
										<div className="value-graph">
											<h3>
												20%{" "}
												<span>
													<i className="fa fa-angle-up font-secondary"></i>
												</span>
											</h3>
										</div>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Media>
									<Media body>
										<span>Aylık Satın Alma</span>
										<h2 className="mb-0">2154</h2>
										<p>
											0.13%{" "}
											<span>
												<i className="fa fa-angle-up"></i>
											</span>
										</p>
								
									</Media>
									<div className="bg-secondary b-r-8">
										<div className="small-box">
											<CreditCard />
										</div>
									</div>
								</Media>
							</CardBody>
						</Card>
					</Col> */}
					{/* <Col xl="3 xl-50" md="6">
						<Card className="order-graph sales-carousel">
							<CardHeader>
								<h6>Toplam nakit işlem</h6>
								<Row>
									<Col className="col-6">
										<div className="small-chartjs">
											<div
												className="flot-chart-placeholder"
												id="simple-line-chart-sparkline-2"
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
													options={LineOptions2}
													legend_toggle
												/>
											</div>
										</div>
									</Col>
									<Col className="col-6">
										<div className="value-graph">
											<h3>
												28%{" "}
												<span>
													<i className="fa fa-angle-up font-warning"></i>
												</span>
											</h3>
										</div>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Media>
									<Media body>
										<span>Eldeki nakit</span>
										<h2 className="mb-0">4672</h2>
										<p>
											0.8%{" "}
											<span>
												<i className="fa fa-angle-up"></i>
											</span>
										</p>
							
									</Media>
									<div className="bg-warning b-r-8">
										<div className="small-box">
											<ShoppingCart />
										</div>
									</div>
								</Media>
							</CardBody>
						</Card>
					</Col> */}
				
					
					<Col xl="6 xl-100">
						<Card className="height-equal">
							<CardHeader>
								<h5>Best Selling Products</h5>
							</CardHeader>
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
								<div className="user-status table-responsive products-table">
									<table className="table table-bordernone mb-0">
										<thead>
											<tr>
												<th scope="col">Ürün Adı</th>
												<th scope="col">Asin</th>
												<th scope="col">Kategori</th>
												<th scope="col">Fiyat</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>gömlek</td>
												<td className="digits">1</td>
												<td className="font-primary">Pending</td>
												<td className="digits">$6523</td>
											</tr>
											<tr>
												<td>t-shirt</td>
												<td className="digits">5</td>
												<td className="font-secondary">Cancle</td>
												<td className="digits">$6523</td>
											</tr>
											<tr>
												<td>etek</td>
												<td className="digits">10</td>
												<td className="font-secondary">Cancle</td>
												<td className="digits">$6523</td>
											</tr>
											<tr>
												<td>elbise</td>
												<td className="digits">9</td>
												<td className="font-primary">Return</td>
												<td className="digits">$6523</td>
											</tr>
											<tr>
												<td>ceket</td>
												<td className="digits">8</td>
												<td className="font-primary">Pending</td>
												<td className="digits">$6523</td>
											</tr>
											<tr>
												<td>çanta</td>
												<td className="digits">3</td>
												<td className="font-secondary">Cancle</td>
												<td className="digits">$6523</td>
											</tr>
											<tr>
												<td>ayakkabı</td>
												<td className="digits">8</td>
												<td className="font-primary">Return</td>
												<td className="digits">$6523</td>
											</tr>
										</tbody>
									</table>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col xl="6 xl-100">
						<Card className="height-equal">
							<CardHeader>
								<h5>Categories</h5>
							</CardHeader>
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
								<div className="user-status table-responsive products-table">
									<table className="table table-bordernone mb-0">
										<thead>
											<tr>
												<th scope="col">Kategori Adı</th>
												<th scope="col">Estimated Profit</th>
												<th scope="col">Toplam Ürün</th>
												<th scope="col">Toplam Sipariş</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>ev & mobilya</td>
												<td className="digits">$6523</td>
												<td className="digits">100</td>
												<td className="digits">50</td>

											</tr>
											<tr>
												<td>spor</td>
												<td className="digits">$6523</td>
												<td className="digits">100</td>
												<td className="digits">50</td>
											</tr>
											<tr>
												<td>giyim</td>
												<td className="digits">$6523</td>
												<td className="digits">100</td>
												<td className="digits">50</td>
											</tr>
											<tr>
												<td>ev araçları</td>
												<td className="digits">$6523</td>
												<td className="digits">100</td>
												<td className="digits">50</td>
											</tr>
											<tr>
												<td>takı</td>
												<td className="digits">$6523</td>
												<td className="digits">100</td>
												<td className="digits">50</td>
											</tr>
											<tr>
												<td>ayakkabı</td>
												<td className="digits">$6523</td>
												<td className="digits">100</td>
												<td className="digits">50</td>
											</tr>
											<tr>
												<td>elektronik</td>
												<td className="digits">$6523</td>
												<td className="digits">100</td>
												<td className="digits">50</td>
											</tr>
										</tbody>
									</table>
								</div>
							</CardBody>
						</Card>
					</Col>
				
					{/* <Col sm="12">
						<Card className="height-equal">
							<CardHeader>
								<h5>Çalışan Durumu</h5>
							</CardHeader>
							<CardBody>
								<div className="user-status table-responsive products-table">
									<Table className=" table-bordernone mb-0">
										<thead>
											<tr>
												<th scope="col">İsim</th>
												<th scope="col">Tanım</th>
												<th scope="col">Seviye</th>
												<th scope="col">Deneyim</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="bd-t-none u-s-tb">
													<div className="align-middle image-sm-size">
														<img
															className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
															src={user2}
															alt=""
															data-original-title=""
															title=""
														/>
														<div className="d-inline-block">
															<h6>
																John Deo{" "}
																<span className="text-muted digits">
																	(14+ Online)
																</span>
															</h6>
														</div>
													</div>
												</td>
												<td>Designer</td>
												<td>
													<div className="progress-showcase">
														<div className="progress" style={{ height: 8 }}>
															<div
																className="progress-bar bg-primary"
																style={{ width: 30 }}
																role="progressbar"
																aria-valuenow="50"
																aria-valuemin="0"
																aria-valuemax="100"
															></div>
														</div>
													</div>
												</td>
												<td className="digits">2 Year</td>
											</tr>
											<tr>
												<td className="bd-t-none u-s-tb">
													<div className="align-middle image-sm-size">
														<img
															className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
															src={user1}
															alt=""
															data-original-title=""
															title=""
														/>
														<div className="d-inline-block">
															<h6>
																Holio Mako{" "}
																<span className="text-muted digits">
																	(250+ Online)
																</span>
															</h6>
														</div>
													</div>
												</td>
												<td>Developer</td>
												<td>
													<div className="progress-showcase">
														<div className="progress" style={{ height: 8 }}>
															<div
																className="progress-bar bg-secondary"
																style={{ width: 70 }}
																role="progressbar"
																aria-valuenow="50"
																aria-valuemin="0"
																aria-valuemax="100"
															></div>
														</div>
													</div>
												</td>
												<td className="digits">3 Year</td>
											</tr>
											<tr>
												<td className="bd-t-none u-s-tb">
													<div className="align-middle image-sm-size">
														<img
															className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
															src={man}
															alt=""
															data-original-title=""
															title=""
														/>
														<div className="d-inline-block">
															<h6>
																Mohsib lara
																<span className="text-muted digits">
																	(99+ Online)
																</span>
															</h6>
														</div>
													</div>
												</td>
												<td>Tester</td>
												<td>
													<div className="progress-showcase">
														<div className="progress" style={{ height: 8 }}>
															<div
																className="progress-bar bg-primary"
																style={{ width: 60 }}
																role="progressbar"
																aria-valuenow="50"
																aria-valuemin="0"
																aria-valuemax="100"
															></div>
														</div>
													</div>
												</td>
												<td className="digits">5 Month</td>
											</tr>
											<tr>
												<td className="bd-t-none u-s-tb">
													<div className="align-middle image-sm-size">
														<img
															className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
															src={user}
															alt=""
															data-original-title=""
															title=""
														/>
														<div className="d-inline-block">
															<h6>
																Hileri Soli{" "}
																<span className="text-muted digits">
																	(150+ Online)
																</span>
															</h6>
														</div>
													</div>
												</td>
												<td>Designer</td>
												<td>
													<div className="progress-showcase">
														<div className="progress" style={{ height: 8 }}>
															<div
																className="progress-bar bg-secondary"
																style={{ width: 30 }}
																role="progressbar"
																aria-valuenow="50"
																aria-valuemin="0"
																aria-valuemax="100"
															></div>
														</div>
													</div>
												</td>
												<td className="digits">3 Month</td>
											</tr>
											<tr>
												<td className="bd-t-none u-s-tb">
													<div className="align-middle image-sm-size">
														<img
															className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
															src={designer}
															alt=""
															data-original-title=""
															title=""
														/>
														<div className="d-inline-block">
															<h6>
																Pusiz bia{" "}
																<span className="text-muted digits">
																	(14+ Online)
																</span>
															</h6>
														</div>
													</div>
												</td>
												<td>Designer</td>
												<td>
													<div className="progress-showcase">
														<div className="progress" style={{ height: 8 }}>
															<div
																className="progress-bar bg-primary"
																role="progressbar"
																style={{ width: 90 }}
																aria-valuenow="50"
																aria-valuemin="0"
																aria-valuemax="100"
															></div>
														</div>
													</div>
												</td>
												<td className="digits">5 Year</td>
											</tr>
										</tbody>
									</Table>
								</div>
							</CardBody>
						</Card>
					</Col> */}
					{/* <Col sm="12">
						<Card>
							<CardHeader>
								<h5>Alım / Satım</h5>
							</CardHeader>
							<CardBody className="sell-graph">
								<Line
									data={buyData}
									options={buyOption}
									width={700}
									height={350}
								/>
							</CardBody>
						</Card>
					</Col> */}
				</Row>
			</Container>
		</Fragment>
	);
};

// javascript:void(0)

export default Dashboard;
