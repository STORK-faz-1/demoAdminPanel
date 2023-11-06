import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import Breadcrumb from "../common/breadcrumb";
import TabsetPage from "./tabset-page";

const Create_page = () => {
	return (
		<Fragment>
			<Breadcrumb title="Sayfa Oluştur" parent="Sayfalar" />
			<Container fluid={true}>
				<Card>
					<CardHeader>
						<h5>Sayfa Ekle</h5>
					</CardHeader>
					<CardBody>
						<TabsetPage />
					</CardBody>
				</Card>
			</Container>
		</Fragment>
	);
};

export default Create_page;
