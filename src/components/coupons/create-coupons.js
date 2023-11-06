import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import Breadcrumb from "../common/breadcrumb";
import Tabset from "./tabset";

const Create_coupons = () => {
	return (
		<Fragment>
			<Breadcrumb title="Kupon Oluştur" parent="Kuponlar" />
			<Container fluid={true}>
				<Card>
					<CardHeader>
						<h5>İndirim Kuponu Detayları</h5>
					</CardHeader>
					<CardBody>
						<Tabset />
					</CardBody>
				</Card>
			</Container>
		</Fragment>
	);
};

export default Create_coupons;
