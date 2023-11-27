import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { CheckCircle } from 'react-feather';
import { Upload } from 'react-feather';

import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Nav,
	NavItem,
	NavLink,
	TabContent,
	Row,
	Button,
	TabPane,
	CardTitle,
	CardText,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	CustomInput
} from "reactstrap";
import one from "../../../assets/images/pro3/1.jpg";
import user from "../../../assets/images/user.png";
import MDEditor from "@uiw/react-md-editor";

const Add_product = () => {
	const [activeTab, setActiveTab] = useState('1');
	const [skuPrefix, setSkuPrefix] = useState('');
	const [value, setValue] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [file, setFile] = useState();
	const [dummyimgs, setDummyimgs] = useState([
		{ img: user },
		{ img: user },
		{ img: user },
		{ img: user },
		{ img: user },
		{ img: user },
	]);

	const handleSkuPrefixChange = (e) => {
		const value = e.target.value.toUpperCase();
		setSkuPrefix(value);
	}

	const onChange = (e) => {
		setValue(e)
	}

	const IncrementItem = () => {
		if (quantity < 9) {
			setQuantity(quantity + 1);
		} else {
			return null;
		}
	};

	const DecreaseItem = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		} else {
			return null;
		}
	};

	const handleChange = (event) => {
		setQuantity(event.target.value);
	};

	const _handleImgChange = (e, i) => {
		e.preventDefault();
		let reader = new FileReader();
		const image = e.target.files[0];
		reader.onload = () => {
			dummyimgs[i].img = reader.result;
			setFile({ file: file });
			setDummyimgs(dummyimgs);
		};
		reader.readAsDataURL(image);
	};

	const handleTabToggle = (tab) => {
		if (activeTab !== tab) {
			setActiveTab(tab);
		}
	}

	const handleValidSubmit = () => { };

	return (
		<Fragment>
			<Breadcrumb title="Add Products via Upload" parent="Physical" />

			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							{/* <CardHeader>
								<h5>Ürün Kimliği</h5>
							</CardHeader> */}
							<CardBody>
								<div>
									<Nav tabs>
										<NavItem>
											<NavLink
												className={activeTab === '1' ? 'active' : ''}
												onClick={() => handleTabToggle('1')}
											>
												Elektronik Tabloyu İndir
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={activeTab === '2' ? 'active' : ''}
												onClick={() => handleTabToggle('2')}
											>
												Elektronik Tablo İndirme Geçmişi
											</NavLink>
										</NavItem>
                                        <NavItem>
											<NavLink
												className={activeTab === '3' ? 'active' : ''}
												onClick={() => handleTabToggle('3')}
											>
												E-Tablonuzu Yükleyin
											</NavLink>
										</NavItem>
                                        <NavItem>
											<NavLink
												className={activeTab === '4' ? 'active' : ''}
												onClick={() => handleTabToggle('4')}
											>
												E-Tablo Yükleme Durumu
											</NavLink>
										</NavItem>
									</Nav>
									<TabContent activeTab={activeTab}>
										<TabPane tabId="1">
											<Row>
												<Col sm="12">
													<h4>
														Tab 1 Contents
													</h4>
												</Col>
											</Row>
										</TabPane>
										<TabPane tabId="2">
											<Row>
												<Col sm="6">
													<Card body>
														<CardTitle>
															Special Title Treatment
														</CardTitle>
														<CardText>
															With supporting text below as a natural lead-in to additional content.
														</CardText>
														<Button>
															Go somewhere
														</Button>
													</Card>
												</Col>
												<Col sm="6">
													<Card body>
														<CardTitle>
															Special Title Treatment
														</CardTitle>
														<CardText>
															With supporting text below as a natural lead-in to additional content.
														</CardText>
														<Button>
															Go somewhere
														</Button>
													</Card>
												</Col>
											</Row>
										</TabPane>
										<TabPane tabId="3">
  <Row>
    <Col sm="12">
      <Card>
        <CardBody>
          <div className="upload-container" style={{ textAlign: 'center', padding: '20px', border: '1px dashed #A9A9A9', borderRadius: '5px', cursor: 'pointer' }}>
            <Upload size={50} color="#A9A9A9" />
            <p>Drag and drop file or</p>
            <Button color="primary" size="sm" onClick={() => document.getElementById('fileUpload').click()}>Browse files</Button>
            <Input type="file" name="file" id="fileUpload" style={{ display: 'none' }} onChange={_handleImgChange} />
            <p>Accepted file formats: Excel, TSV</p>
          </div>
		  <div className="email-alert-section-upload">
            <div className="email-input-container-upload">
              <Label for="emailAlert">Email alert</Label>
              <Input type="email" name="email" id="emailAlert" placeholder="Enter your email" />
              <small className="text-muted">Send an email alert when the upload is complete.</small>
            </div>
            <div className="checkbox-container-upload">
              <CustomInput type="checkbox" id="rememberEmail" label="Remember my email address for future alerts" />
            </div>
          </div>
          <Button color="secondary" size="md" block style={{ marginTop: '10px' }}>Submit products</Button>
     
        </CardBody>
      </Card>
    </Col>
  </Row>
</TabPane>
                                        <TabPane tabId="4">
											<Row>
												<Col sm="12">
													<h4>
														Tab 1 Contents
													</h4>
												</Col>
											</Row>
										</TabPane>
									</TabContent>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Add_product;
