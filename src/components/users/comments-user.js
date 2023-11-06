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
const List_user = () => {
	return (
		<Fragment>
			<Breadcrumb title="Kullanıcı Soruları" parent="Kullanıcılar" />
			<Container fluid={true}>
				<Card>
				
					<CardBody>
					
					</CardBody>
				</Card>
			</Container>
		</Fragment>
	);
};

export default List_user;
