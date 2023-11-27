import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { CheckCircle} from 'react-feather';

import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Form,
	FormGroup,
	Input,
	Label,
	Row,
	Button,
	FormText
} from "reactstrap";
import one from "../../../assets/images/pro3/1.jpg";
import user from "../../../assets/images/user.png";
import MDEditor from "@uiw/react-md-editor";

const Add_product = () => {
	const [skuPrefix, setSkuPrefix] = useState(''); // SKU prefix değeri için bir state ekliyoruz

	const handleSkuPrefixChange = (e) => {
		const value = e.target.value.toUpperCase(); // Girilen metni büyük harfe çeviriyoruz
		setSkuPrefix(value);
	}
	const [value, setValue] = useState('')
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

	const onChange = (e) =>{
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

	//	image upload

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

	const handleValidSubmit = () => {};
	return (
		<Fragment>
			<Breadcrumb title="Yeni Ürün Ekle" parent="Physical" />

			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							 <CardHeader>
								<h5>Ürün Kimliği</h5>
							
							</CardHeader> 
							<CardBody>
							<Form>
  <Row>
    {/* <Col md={3}>
      <FormGroup>
        <Label for="exampleEmail">
          Ürün ID
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Ürün ID Giriniz."
          type="email"
        />
      </FormGroup>
    </Col> */}
    {/* <Col md={3}>
      <FormGroup>
        <Label for="examplePassword">
          Ürün Url
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Ürün Url Giriniz."
          type="password"
        />
      </FormGroup>
    </Col> */}
	<Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Öğe Adı (diğer adıyla Başlık)
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Öğe Adı Giriniz"
          type="password"
        />
      </FormGroup>
    </Col>
	<Col md={6}>
	<FormGroup row>
    <Label
      for="exampleSelect"
     
    >
      Ürün Tipi
    </Label>
    <Col sm={10}>
      <Input
        id="exampleSelect"
        name="select"
        type="select"
      >
        <option>
          kadın çanta
        </option>
        <option>
          erkek ayakkabı
        </option>
        <option>
          oyuncak
        </option>
        <option>
          bisiklet
        </option>
      
      </Input>
    </Col>
  </FormGroup>
    </Col>
  </Row>
  <Row>
  <Col md={6}>
  <Label
      for="exampleSelect"
     
    >
      Varyasyonlar
    </Label>
    <br></br>
    <Label
      for="exampleSelect"
     
    >
       Ürünün Varyasyonları Var Mı? 
    </Label>
   
    <br></br>
   
  <FormGroup
    check
    inline
  >
    
    <Input type="checkbox" />
    <Label check>
    Evet
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check>
      Hayır
    </Label>
  </FormGroup>
    </Col>
	<Col md={6}>
	<FormGroup row>
    <Label
      for="exampleSelect"
     
    >
      Marka Adı
    </Label>
    <Col sm={10}>
    <Input
          id="examplePassword"
          name="password"
          placeholder="Marka Adı Giriniz"
          type="password"
        />
        <Input type="checkbox" />
    <Label check>
    Bu ürünün bir markası yok
    </Label>
    </Col>
  </FormGroup>

    </Col>
	
  </Row>
  <Row>
    {/* <Col md={3}>
      <FormGroup>
        <Label for="exampleEmail">
          Ürün ID
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Ürün ID Giriniz."
          type="email"
        />
      </FormGroup>
    </Col> */}
    {/* <Col md={3}>
      <FormGroup>
        <Label for="examplePassword">
          Ürün Url
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Ürün Url Giriniz."
          type="password"
        />
      </FormGroup>
    </Col> */}
	<Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Ürün Kimliği
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Örnek: 522947292"
          type="password"
        />
         <Input type="checkbox" />
    <Label check>
    Ürün Kimliğim Yok
    </Label>
      </FormGroup>
    </Col>
	<Col md={6}>
	<FormGroup row>
    <Label
      for="exampleSelect"
     
    >
     UPC
    </Label>
    <Col sm={10}>
      <Input
        id="exampleSelect"
        name="select"
        type="select"
      >
        <option>
         UPC
        </option>
        <option>
          Diğer
        </option>
       
      
      </Input>
    </Col>
  </FormGroup>
    </Col>
  </Row>
  {/* <Row>
  <Col md={3}>
	<FormGroup row>
    <Label
      for="exampleSelect"
     
    >
      Marka
    </Label>
    <Col sm={10}>
      <Input
        id="exampleSelect"
        name="select"
        type="select"
      >
        <option>
          zara
        </option>
        <option>
          koton
        </option>
       
      </Input>
    </Col>
  </FormGroup>
    </Col>
	<Col md={3}>
      <FormGroup>
        <Label for="exampleEmail">
          Ürün İsmi
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Ürün Adı Giriniz"
          type="email"
        />
      </FormGroup>
    </Col>
	<Col md={3}>
	<FormGroup>
    <Label for="exampleSelectMulti">
      Ürün Renkleri
    </Label>
    <Input
      id="exampleSelectMulti"
      multiple
      name="selectMulti"
      type="select"
    >
      <option>
        yeşil
      </option>
      <option>
        mavi
      </option>
     
    </Input>
  </FormGroup>
  </Col>
  <Col md={3}>
	<FormGroup>
    <Label for="exampleSelectMulti">
      Ürün Bedenleri
    </Label>
    <Input
      id="exampleSelectMulti"
      multiple
      name="selectMulti"
      type="select"
    >
      <option>
        s
      </option>
      <option>
        xs
      </option>
     
    </Input>
  </FormGroup>
  </Col>
  </Row> */}

  {/* <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
    />
    <FormText>
      This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
    </FormText>
  </FormGroup> */}
  <Button>
    Ürün, Ekle
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

export default Add_product;
