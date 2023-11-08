import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Col, Form, Input, Label, Row} from "reactstrap";

const Tabset = () => {
	const [startDate, setstartDate] = useState(new Date());
	const [endDate, setendDate] = useState(new Date());

	const handleStartDate = (date) => {
		setstartDate(date);
	};

	const handleEndDate = (date) => {
		setendDate(date);
	};

	const clickActive = (event) => {
		document.querySelector(".nav-link").classList.remove("show");
		event.target.classList.add("show");
	};

	return (
		<Fragment>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link" onClick={(e) => clickActive(e)}>
						Genel
					</Tab>
					{/* <Tab className="nav-link" onClick={(e) => clickActive(e)}>
						Sınırlama
					</Tab>
					<Tab className="nav-link" onClick={(e) => clickActive(e)}>
						Kullanım
					</Tab> */}
				</TabList>

				<TabPanel>
					<div className="tab-pane fade active show">
						<Form className="needs-validation" noValidate="">
							<h4>Genel</h4>
							<Row>
								<Col sm="12">
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">
											<span>*</span> Kupon İsmi
										</Label>
										<div className="col-md-7">
											<Input
												className="form-control"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">
											<span>*</span> Kod
										</Label>
										<div className="col-md-7">
											<Input
												className="form-control"
												id="validationCustom1"
												type="text"
												required=""
											/>
										</div>
										<div className="valid-feedback">
											Please Provide a Valid Coupon Code.
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Başlangıç Tarihi</Label>
										<div className="col-md-7">
											<DatePicker
												selected={startDate}
												onChange={handleStartDate}
											/>
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Bitiş Tarihi</Label>
										<div className="col-md-7">
											<DatePicker
												selected={endDate}
												endDate={endDate}
												onChange={handleEndDate}
											/>
										</div>
									</div>
									{/* <div className="form-group row">
										<Label className="col-xl-3 col-md-4">Ücretsiz Kargo</Label>
										<div className="col-md-7">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Ücretsiz Kargoya İzin Ver
											</Label>
										</div>
									</div> */}
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Miktar</Label>
										<div className="col-md-7">
											<Input
												className="form-control"
												type="number"
												required=""
											/>
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">İndirim Tipi</Label>
										<div className="col-md-7">
											<select className="form-select" required="">
												<option value="">--Select--</option>
												<option value="1">Yüzde</option>
												<option value="2">Sabit Fiyat</option>
											</select>
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Durum</Label>
										<div className="col-md-7">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Kuponu Etkinleştir
											</Label>
										</div>
									</div>
								</Col>
							</Row>
						</Form>
					</div>
					{/* <hr/> */}
					<Form className="needs-validation" noValidate="">
						{/* <h4>Sınırlama</h4>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Ürünler</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom3"
									type="text"
									required=""
								/>
							</div>
							<div className="valid-feedback">
								Lütfen Ürün İsmi Giriniz.
							</div>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Kategori</Label>
							<div className="col-md-7">
								<select className="form-select" required="">
									<option value="">--Select--</option>
									<option value="1">Electronics</option>
									<option value="2">Clothes</option>
									<option value="2">Shoes</option>
									<option value="2">Digital</option>
								</select>
							</div>
						</div> */}
						{/* <div className="form-group row">
							<Label className="col-xl-3 col-md-4">Minimum Harcama</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom4"
									type="number"
								/>
							</div>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Maksimum Harcama</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom5"
									type="number"
								/>
							</div>
						</div> */}
					</Form>
					{/* <hr/> */}
					{/* <Form className="needs-validation" noValidate="">
						<h4>Kullanım Sınırları</h4>
						 <div className="form-group row">
							<Label className="col-xl-3 col-md-4">Limit Başına</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom6"
									type="number"
								/>
							</div>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Müşteri Başına</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom7"
									type="number"
								/>
							</div>
						</div> 
					</Form> */}
				</TabPanel>
				{/* <TabPanel>
					<Form className="needs-validation" noValidate="">
						<h4>Sınırlama</h4>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Ürünler</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom3"
									type="text"
									required=""
								/>
							</div>
							<div className="valid-feedback">
								Lütfen Ürün İsmi Giriniz.
							</div>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Kategori</Label>
							<div className="col-md-7">
								<select className="form-select" required="">
									<option value="">--Select--</option>
									<option value="1">Electronics</option>
									<option value="2">Clothes</option>
									<option value="2">Shoes</option>
									<option value="2">Digital</option>
								</select>
							</div>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Minimum Harcama</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom4"
									type="number"
								/>
							</div>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Maksimum Harcama</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom5"
									type="number"
								/>
							</div>
						</div>
					</Form>
				</TabPanel> */}
				{/* <TabPanel>
					<Form className="needs-validation" noValidate="">
						<h4>Kullanım Sınırları</h4>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Limit Başına</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom6"
									type="number"
								/>
							</div>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Müşteri Başına</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom7"
									type="number"
								/>
							</div>
						</div>
					</Form>
				</TabPanel> */}
			</Tabs>
			<div className="pull-right">
				<Button type="button" color="primary">
					Kaydet
				</Button>
			</div>
		</Fragment>
	);
};

export default Tabset;
