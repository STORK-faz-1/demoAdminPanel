import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/listUser";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Container, Col, Media, Row } from "reactstrap";
import {
	LogIn,
	Users,
	Rss
} from "react-feather";
import { Form, FormGroup, Input} from "reactstrap";

const List_user = () => {
	return (
		<Fragment>
			<Breadcrumb title="Kullanıcı Listesi" parent="Kullanıcılar" />
			<Container fluid={true}>
				<Card>
					{/* <CardHeader>
						<h5>Kullanıcı Detayları</h5>
					</CardHeader> */}
					<CardBody>
						{/* <div className="btn-popup pull-right">
							<Link to="/users/create-user" className="btn btn-secondary">
								Kullanıcı Oluştur
							</Link>
						</div> */}
                 <Row>

                     <Col xl="3 xl-50" md="6" >
						<Card className=" order-graph sales-carousel">
							<CardBody>
								<Media>
									<Media body>
										<h6>Toplam Kullanıcı Sayısı</h6>
										<h4 className="mb-0">9054</h4>
									</Media>
									<div className="bg-primary b-r-8">
										<div className="small-box">
											<Users />
										</div>
									</div>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6" >
						<Card className=" order-graph sales-carousel">
							<CardBody>
								<Media>
									<Media body>
										<h6>Aktif Kullanıcı<br/>Sayısı</h6>
										<h4 className="mb-0">54</h4>
									</Media>
									<div className="bg-primary b-r-8">
										<div className="small-box">
											<Rss />
										</div>
									</div>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6" >
						<Card className=" order-graph sales-carousel">
							<CardBody>
								<Media>
									<Media body>
										<h6>Son 1 Aylık<br/>Login</h6>
										<h4 className="mb-0">254</h4>
									</Media>
									<div className="bg-primary b-r-8">
										<div className="small-box">
											<LogIn />
										</div>
									</div>
								</Media>
							
							</CardBody>
						</Card>
					</Col>
					<Form >
							<FormGroup>
    <Input
      type="search"
      placeholder="🔎 Ara.."
      style={{ border: '1px solid #48b6ff', paddingLeft: '5px' }}
	  className="search-input"
    />
   
  </FormGroup>
			</Form>
					</Row>
						<div className="clearfix"></div>
						<div
							id="batchDelete"
							className="category-table user-list order-table coupon-list-delete"
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
			</Container>
		</Fragment>
	);
};

export default List_user;
