import React, { Fragment } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Row } from "reactstrap";
import Breadcrumb from "../common/breadcrumb";

const Create_menu = () => {
	return (
		<Fragment>
			<Breadcrumb title="Menü Oluştur" parent="Menüler" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Menü Ekle</h5>
							</CardHeader>
							<CardBody>
								<Form className="needs-validation">
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">
											<span>*</span> Menü İsmi
										</Label>
										<div className="col-md-8">
											<Input
												className="form-control"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
									</div>
									{/* <div className="form-group row">
										<Label className="col-xl-3 col-md-4">Durum</Label>
										<div className="col-xl-9 col-md-8">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Enable the Coupon
											</Label>
										</div>
									</div> */}
									<Button type="button" color="primary">
										Kaydet
									</Button>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Create_menu;
