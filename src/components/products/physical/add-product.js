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
								<h5>Toplu şekilde ürün ekleyin.</h5>
								<hr/>
								<p><CheckCircle className="mr-2" size={14} /> Mağazanıza eklemek istediğiniz ürünlerin ASIN'lerini veya ürün URL'lerini sistemimizde zahmetsizce ekleyebilirsiniz.</p>
								<p><CheckCircle className="mr-2" size={14} /> Ekleme işlemini tamamladıktan sonra, ürünleriniz 60 dakika içinde mağazanıza yüklemeye başlar.</p>
							</CardHeader> 
							<CardBody>
							<Form>
					
						<FormGroup>
							<Label for="exampleSelect">
							Seçim Yapın
							</Label>
							<Input
							id="exampleSelect"
							name="select"
							type="select"
							>
							<option>
								ASIN
							</option>
							<option>
								Ürün URL
							</option>
							
							</Input>
							<Label >
							ASIN veya ürün URL'ine göre mi ekleme yapıcaksınız?
							</Label>
						</FormGroup>
					<br/>
						<FormGroup>
							<Label for="exampleText">
							ASIN veya ürün URL Listesi
							</Label>
							<Input
							id="exampleText"
							name="text"
							type="textarea"
							placeholder="Her satıra bir tane olmak üzere bir ASIN listesi girin."
							style={{ height: '200px' }}
							/>
							<Label >
							Bir seferde en fazla 5.000 ASIN veya ürün URL'i girebilirsiniz.
							</Label>
						</FormGroup>
						<FormGroup row>
    <Label
      for="exampleEmail2"
      sm={2}
    >
      SKU Prefix
    </Label>
    <Col sm={10}>
      <Input
        id="exampleEmail2"
        name="email"
        type="email"
		value={skuPrefix} // SKU prefix değerini state üzerinden alıyoruz
	    onChange={handleSkuPrefixChange} // SKU prefix değeri değiştiğinde bu fonksiyon çağrılacak
      />
	  <Label >
	  
	  SKU'larınız için bir ön ek belirleyin.
	</Label>
	<br/>
	<Label >

	  SKU şöyle görünecektir: AMZR-XXXX-123456
</Label>
    </Col>
	
  </FormGroup>
  <br/>
						<Button className="mx-auto d-block">
							Ürünleri Ekle
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
