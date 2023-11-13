import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useEffect } from 'react';
import Datatable from "../../common/datatable";
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Form,
	FormGroup,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Row,
	UncontrolledPopover,
	PopoverHeader,
	PopoverBody,
	Popover,
	Table
} from "reactstrap";

const Category = () => {
	const cellContents = [
		[
		  { text: "Spor Ayakkabı", link: "link1" },
		  { text: "Spor Ayakkabı", link: "link2" },
		  { text: "Spor Ayakkabı", link: "link2" },
		  { text: "Sırt Çantası", link: "link2" },
		  { text: "Saat", link: "link2" },
		  { text: "Saat", link: "link2" },
		  { text: "Omuz Çantası", link: "link2" },
		  { text: "Sırt Çantası", link: "link2" },
		  { text: "Lüks Çanta", link: "link2" },
		],
		[
			{ text: "Topuklu Ayakkabı", link: "link1" },
			{ text: "Günlük Ayakkabı", link: "link2" },
			{ text: "Günlük Ayakkabı", link: "link2" },
			{ text: "Okul Çantası", link: "link2" },
			{ text: "Güneş Gözlüğü", link: "link2" },
			{ text: "Takı", link: "link2" },
			{ text: "Sırt Çantası", link: "link2" },
			{ text: "Postacı Çantası", link: "link2" },
			{ text: "Lüks Ayakkabı", link: "link2" },
		],
		[
			{ text: "Günlük Ayakkabı", link: "link1" },
			{ text: "Klasik Ayakkabı", link: "link2" },
			{ text: "Babet", link: "link2" },
			{ text: "Çekçekli Çanta", link: "link2" },
			{ text: "Cüzdan", link: "link2" },
			{ text: "Şapka", link: "link2" },
			{ text: "Cüzdan", link: "link2" },
			{ text: "Cüzdan & Kartlık", link: "link2" },
			{ text: "Tasarım Çanta", link: "link2" },
		],
		[
			{ text: "Bot & Bootie", link: "link1" },
			{ text: "Bot", link: "link2" },
			{ text: "Bot", link: "link2" },
			{ text: "Beslenme Çantası", link: "link2" },
			{ text: "Kemer", link: "link2" },
			{ text: "Güneş Gözlüğü", link: "link2" },
			{ text: "Spor Çantası", link: "link2" },
			{ text: "Spor Çantası", link: "link2" },
			{ text: "Tasarım Ayakkabı", link: "link2" },
		],
		
		[
			{ text: "Sandalet", link: "link1" },
			{ text: "Sneaker", link: "link2" },
			{ text: "Sneaker", link: "link2" },
			{ text: "Lisanslı Çantalar", link: "link2" },
			{ text: "Şapka", link: "link2" },
			{ text: "Saç Aksesuarları", link: "link2" },
			{ text: "Bel Çantası", link: "link2" },
			{ text: "Laptop Çantası", link: "link2" },
			{ text: "", link: "link2" },
		],
		[
			{ text: "Terlik", link: "link1" },
			{ text: "Koşu Ayakkabısı", link: "link2" },
			{ text: "Sandalet", link: "link2" },
			{ text: "Bel Çantası", link: "link2" },
			{ text: "Bileklik", link: "link2" },
			{ text: "Kemer", link: "link2" },
			{ text: "El Çantası", link: "link2" },
			{ text: "Bel Çantası", link: "link2" },
			{ text: "", link: "link2" },
		  ],
		  [
			  { text: "Sneaker", link: "link1" },
			  { text: "Krampon", link: "link2" },
			  { text: "Terlik", link: "link2" },
			  { text: "Postacı Çanta", link: "link2" },
			  { text: "Kravat", link: "link2" },
			  { text: "Gümüş Kolye", link: "link2" },
			  { text: "Portföy", link: "link2" },
			  { text: "Omuz Çantası", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			  { text: "Babet", link: "link1" },
			  { text: "Loafer", link: "link2" },
			  { text: "Panduf", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kolye", link: "link2" },
			  { text: "Hasır Bilezik", link: "link2" },
			  { text: "Bez Çanta", link: "link2" },
			  { text: "Portföy Çanta", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			  { text: "Loafer", link: "link1" },
			  { text: "Halı Saha Ayakkabısı", link: "link2" },
			  { text: "Çizme", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Rozet", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kartlık", link: "link2" },
			  { text: "Tıraş Çantası", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			{ text: "Anne Ayakkabısı", link: "link1" },
			{ text: "Sandalet", link: "link2" },
			{ text: "Basketbol Ayakkabısı", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Papyon", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Abiye Çanta", link: "link2" },
			{ text: "Olta Çantası", link: "link2" },
			{ text: "", link: "link2" },
		],
		  [
			  { text: "Taşlı Sandalet", link: "link1" },
			  { text: "Bot", link: "link2" },
			  { text: "Krampon", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Postacı Çantası", link: "link2" },
			  { text: "Okul Çantası", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			{ text: "Hastane Terlikleri", link: "link1" },
			{ text: "Çizme", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Plaj Çantası", link: "link2" },
			{ text: "Valiz", link: "link2" },
			{ text: "", link: "link2" },
		  ],
		  [
			  { text: "Topuklu Terlik", link: "link1" },
			  { text: "Postal", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Laptop Çantası", link: "link2" },
			  { text: "Outdoor Çanta", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			  { text: "Topuklu Bot", link: "link1" },
			  { text: "Basketbol Ayakkabısı", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kapitone Çanta", link: "link2" },
			  { text: "El Çantası", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			  { text: "Çizme", link: "link1" },
			  { text: "Terlik", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Evrak Çantası", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  
		  [
			  { text: "Kovboy Çizmesi", link: "link1" },
			  { text: "Ev Terliği", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kutu Çanta", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  
		  [
			{ text: "Dolgu Topuk Ayakkabı", link: "link1" },
			{ text: "Panduf", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Makyaj Çantası", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
		  ],
		  [
			  { text: "Kar Botu", link: "link1" },
			  { text: "Deniz Ayakkabısı", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Peluş Çanta", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			  { text: "Yağmur Botu", link: "link1" },
			  { text: "Süet Ayakkabı", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Hasır Çanta", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			  { text: "Panduf", link: "link1" },
			  { text: "Yürüyüş Ayakkabısı", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Valiz & Bavul", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  
	  ];
	  
	const [open, setOpen] = useState(false);
	const [products, setProducts] = useState([]);
	const onOpenModal = () => {
		setOpen(true);
	};
	const onCloseModal = () => {
		setOpen(false);
	};
	const apiUrl = 'https://localhost:7217/ProductGatherer?category=0&pi=1';
	useEffect(() => {
		axios.get(apiUrl)
		.then((response) => {
		  console.log('API Response Data:', response.data);
		  setProducts(response.data);
		})
		.catch((error) => {
		  console.error('API isteği başarısız: ', error);
		});
	  
	  }, []); 
	  const [modal, setModal] = useState(false);
	  const categoryHeaders = ['Kadın Ayakkabı', 'Erkek Ayakkabı', 'Çocuk Ayakkabı', 'Çocuk Çanta', 'Erkek Aksesuar', 'Kadın Aksesuar', 'Kadın Çanta', 'Erkek Çanta', 'Lüks & Designer'];
	  const columnHeaders = ['Ürün Id', 'Ürün İsmi','Platform', 'Marka', 'Renkler',  'Bedenler', 'Fiyat'  ];
  const toggle = () => setModal(!modal);
	return (
		<Fragment>
			<Breadcrumb title="Ayakkabı & Çanta Ürünler" parent="Ürünler" />
			<Container fluid={true}>
			<Col lg="4">
			<Row>
					<FormGroup row>
	
            <Col xl="6 xl-100">
              <Input
                id="exampleSelect"
                name="select"
                type="select"
            size={"sm"}
              >
            <option>
                İngiltere
                </option>
                <option>
                  Kanada
                </option>
                <option>
                  Meksika
                </option>
              </Input>
            </Col>
      
          </FormGroup>
		  </Row>
        </Col>
				<Row>
					<Col sm="12">
						<Card>	
							<CardBody>
							<div>
      <Button color="secondary" onClick={toggle} >
        Kategoriler
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="xl" centered>
        <ModalHeader toggle={toggle}></ModalHeader>
		<ModalBody>
          <Table >
            <thead>
              <tr>
                {categoryHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
            {cellContents.map((row, rowIndex) => (
  <tr key={rowIndex}>
    {row.map((cellData, colIndex) => (
      <td key={colIndex}>
        <a href={cellData.link}>{cellData.text}</a>
      </td>
    ))}
  </tr>
))}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </div>
<hr/>
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
							
								<div className="clearfix"></div>
								<div className="table-container" >
								<Table>
                  <thead>
                    <tr>
                      {columnHeaders.map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td>{product.productId}</td>
                        <td>{product.productName}</td>
						<td>{product.platform}</td>
						<td>{product.brand}</td>
                        <td>{product.price}</td>
						<td>{product.shipmentDay}</td>
						<td>{product.sizes}</td>
                        <td>{product.city}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Category;