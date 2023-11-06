import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User, Settings } from "react-feather";
import { Button, Col, Input, Label, Row, Table } from "reactstrap";

const TabsetProfile = () => {
	return (
		<div>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link">
						<User className="me-2" />
						Profil
					</Tab>
					<Tab className="nav-link">
						<Settings className="me-2" />
						Ayarlar
					</Tab>
				</TabList>

				<TabPanel>
					<div className="tab-pane fade show active">
						<h5 className="f-w-600 f-16">Profil</h5>
						<div className="table-responsive profile-table">
							<Table className="table-responsive">
								<tbody>
									<tr>
										<td>Ad:</td>
										<td>Admin</td>
									</tr>
									<tr>
										<td>Soyad:</td>
										<td>Soyad</td>
									</tr>
									<tr>
										<td>Email:</td>
										<td>admin@gmail.com</td>
									</tr>
									<tr>
										<td>Cinsiyet:</td>
										<td>Male</td>
									</tr>
									<tr>
										<td>Telefon:</td>
										<td>2124821463</td>
									</tr>
									<tr>
										<td>Doğum Tarihi:</td>
										<td>15 Aralık 1993</td>
									</tr>
									<tr>
										<td>Konum:</td>
										<td>istanbul, Türkiye</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					{/* <div className="tab-pane fade"> */}
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Bildirimler</h5>
						<Row>
							<Col>
								<Label className="d-block form-label">
									<Input
										className="checkbox_animated"
										id="chk-ani"
										type="checkbox"
										defaultChecked
									/>
									Masaüstü Bildirimlerine İzin Ver
								</Label>
								<Label className="d-block form-label">
									<Input
										className="checkbox_animated"
										id="chk-ani1"
										type="checkbox"
									/>
									Bildirimleri Etkinleştir
								</Label>
								<Label className="d-block form-label">
									<Input
										className="checkbox_animated"
										id="chk-ani2"
										type="checkbox"
									/>
									Kendi etkinliğim için bildirim al
								</Label>
								{/* <Label className="d-block mb-0">
									<Input
										className="checkbox_animated"
										id="chk-ani3"
										type="checkbox"
										defaultChecked
									/>
									DND
								</Label> */}
							</Col>
						</Row>
					</div>
					<div className="account-setting deactivate-account">
						<h5 className="f-w-600 f-16">Hesabı Devre Dışı Bırak</h5>
						<Row>
							<Col>
								<Label className="d-block form-label">
									<Input
										className="radio_animated"
										id="edo-ani"
										type="radio"
										name="rdo-ani"
										defaultChecked
									/>
									Gizlilikle ilgili bir endişem var
								</Label>
								<Label className="d-block form-label">
									<Input
										className="radio_animated"
										id="edo-ani1"
										type="radio"
										name="rdo-ani"
									/>
									Bu geçici bir durumdur
								</Label>
								<Label className="d-block mb-0">
									<Input
										className="radio_animated"
										id="edo-ani2"
										type="radio"
										name="rdo-ani"
										defaultChecked
									/>
									Diğer
								</Label>
							</Col>
						</Row>
						<Button type="button" color="primary">
						Hesabı Devre Dışı Bırak
						</Button>
					</div>
					<div className="account-setting deactivate-account">
						<h5 className="f-w-600 f-16">Hesabı Sil</h5>
						<Row>
							<Col>
								<Label className="d-block form-label">
									<Input
										className="radio_animated"
										id="edo-ani3"
										type="radio"
										name="rdo-ani1"
										defaultChecked
									/>
									Artık kullanılamaz
								</Label>
								<Label className="d-block form-label">
									<Input
										className="radio_animated"
										id="edo-ani4"
										type="radio"
										name="rdo-ani1"
									/>
									Diğer hesaba geçmek istiyorum
								</Label>
								<Label className="d-block mb-0">
									<Input
										className="radio_animated"
										id="edo-ani5"
										type="radio"
										name="rdo-ani1"
										defaultChecked
									/>
									Diğer
								</Label>
							</Col>
						</Row>
						<Button type="button" color="primary">
							Hesabı Sil
						</Button>
					</div>
					{/* </div> */}
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default TabsetProfile;
