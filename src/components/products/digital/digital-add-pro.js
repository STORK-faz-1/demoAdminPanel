import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import MyDropzone from "../../common/dropzone";
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import MDEditor from "@uiw/react-md-editor";

const Digital_add_pro = () => {
	const [value, setValue] = useState('')

	const onChange = (e) =>{
		setValue(e)
	}
	return (
		<Fragment>
			<Breadcrumb title="Amazon Ürün Ekle" parent="Amazon Ürün Ekle" />
			<Container fluid={true}>
				<Row className="product-adding">
					<Col xl="6">
						<Card>
							<CardHeader>
								<h5>Genel</h5>
							</CardHeader>
							<CardBody>
								<div className="digital-add needs-validation">
									<FormGroup>
										<Label className="col-form-label pt-0">
											<span>*</span> Başlık
										</Label>
										<Input
											className="form-control"
											id="validationCustom01"
											type="text"
											required=""
										/>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label pt-0">
											<span>*</span> SKU
										</Label>
										<Input
											className="form-control"
											id="validationCustom02"
											type="text"
											required=""
										/>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label">
											<span>*</span> Kategoriler
										</Label>
										<select className="form-select" required="">
											<option value="">--Select--</option>
											<option value="1">eBooks</option>
											<option value="2">Graphic Design</option>
											<option value="3">3D Impact</option>
											<option value="4">Application</option>
											<option value="5">Websites</option>
										</select>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label"> Kısa Özet</Label>
										<textarea rows="4" cols="12"></textarea>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label">
											<span>*</span> Ürün Fiyatı
										</Label>
										<Input
											className="form-control"
											id="validationCustom02"
											type="text"
											required=""
										/>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label">
											<span>*</span> Durum
										</Label>
										<div className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani"
													type="radio"
													name="rdo-ani"
												/>
												Mevcut
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani1"
													type="radio"
													name="rdo-ani"
												/>
												Mevcut Değil
											</Label>
										</div>
									</FormGroup>
									<Label className="col-form-label pt-0"> Ürün Yükle</Label>
									<MyDropzone />
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col xl="6">
						<Card>
							<CardHeader>
								<h5>Açıklama Ekle</h5>
							</CardHeader>
							<CardBody>
								<div className="digital-add needs-validation">
									<FormGroup className=" mb-0">
										<div className="description-sm">
										<MDEditor
									value={value}
									onChange={onChange}
								/>
										</div>
									</FormGroup>
								</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<h5>Meta Veri</h5>
							</CardHeader>
							<CardBody>
								<div className="digital-add needs-validation">
									<FormGroup>
										<Label className="col-form-label pt-0"> Meta Başlık</Label>
										<Input
											className="form-control"
											id="validationCustom05"
											type="text"
											required=""
										/>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label">Meta Açıklama</Label>
										<textarea rows="4" cols="12"></textarea>
									</FormGroup>
									<FormGroup className="mb-0">
										<div className="product-buttons text-center">
											<Button type="button" color="primary">
												Ekle
											</Button>
											<Button type="button" color="light">
												Vazgeç
											</Button>
										</div>
									</FormGroup>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Digital_add_pro;
