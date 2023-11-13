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
		  { text: "Tişört", link: "link1" },
		  { text: "Spor Ayakkabı", link: "link2" },
		  { text: "Parfüm", link: "link2" },
		  { text: "Sırt Çantası", link: "link2" },
		  { text: "Büyük Beden Sweatshirt", link: "link2" },
		  { text: "Saat", link: "link2" },
		  { text: "Boxer", link: "link2" },
		  { text: "Eşofman", link: "link2" },
		  { text: "Tıraş Makinesi", link: "link2" },
		  { text: "Lüks Giyim", link: "link2" },

		],
		[
			{ text: "Şort", link: "link1" },
			{ text: "Günlük Ayakkabı", link: "link2" },
			{ text: "Cinsel Sağlık", link: "link2" },
			{ text: "Spor Çanta", link: "link2" },
			{ text: "Büyük Beden T-shirt", link: "link2" },
			{ text: "Güneş Gözlüğü", link: "link2" },
			{ text: "Çorap", link: "link2" },
			{ text: "Spor Ayakkabı", link: "link2" },
			{ text: "Cep Telefonu", link: "link2" },
			{ text: "Lüks Ayakkabı", link: "link2" },

		],
		[
			{ text: "Gömlek", link: "link1" },
			{ text: "Yürüyüş Ayakkabısı", link: "link2" },
			{ text: "Tıraş Sonrası Ürünler", link: "link2" },
			{ text: "Laptop Çantası", link: "link2" },
			{ text: "Büyük Beden Gömlek", link: "link2" },
			{ text: "Cüzdan", link: "link2" },
			{ text: "Pijama", link: "link2" },
			{ text: "T-shirt", link: "link2" },
			{ text: "Akıllı Saat", link: "link2" },
			{ text: "Lüks Çanta", link: "link2" },

		],
		[
			{ text: "Eşofman", link: "link1" },
			{ text: "Krampon", link: "link2" },
			{ text: "Tıraş Bıçağı", link: "link2" },
			{ text: "Valiz & Bavul", link: "link2" },
			{ text: "Büyük Beden Pantolon", link: "link2" },
			{ text: "Kemer", link: "link2" },
			{ text: "Atlet", link: "link2" },
			{ text: "Sweatshirt", link: "link2" },
			{ text: "Akıllı Bileklik", link: "link2" },
			{ text: "", link: "link2" },

		],
		
		[
			{ text: "Pantolon", link: "link1" },
			{ text: "Sneaker", link: "link2" },
			{ text: "Deodorant", link: "link2" },
			{ text: "Postacı Çantası", link: "link2" },
			{ text: "Büyük Beden Mont", link: "link2" },
			{ text: "Çanta", link: "link2" },
			{ text: "İçlik", link: "link2" },
			{ text: "Forma", link: "link2" },
			{ text: "Laptop", link: "link2" },
			{ text: "", link: "link2" },

		],
		[
			{ text: "Ceket", link: "link1" },
			{ text: "Klasik", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Bel Çantası", link: "link2" },
			{ text: "Büyük Beden Kazak", link: "link2" },
			{ text: "Şapka", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Spor Çorap", link: "link2" },
			{ text: "Oyun & Konsollar", link: "link2" },
			{ text: "", link: "link2" },

		  ],
		  [
			  { text: "Kot Pantolon", link: "link1" },
			  { text: "Bot", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Bez Çanta", link: "link2" },
			  { text: "Büyük Beden Hırka", link: "link2" },
			  { text: "Kartlık", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Spor Giyim", link: "link2" },
			  { text: "Elektrikli Bisiklet", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			  { text: "Yelek", link: "link1" },
			  { text: "Kar Botu", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Evrak Çantası", link: "link2" },
			  { text: "Büyük Beden Kaban", link: "link2" },
			  { text: "Valiz", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Outdoor Ayakkabı", link: "link2" },
			  { text: "E-pin ve Cüzdan Kodu", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			  { text: "Kazak", link: "link1" },
			  { text: "Deri Ayakkabı", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Cüzdan", link: "link2" },
			  { text: "Büyük Beden Eşofman Altı", link: "link2" },
			  { text: "Kravat", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Outdoor Bot", link: "link2" },
			  { text: "Playstation 5", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			{ text: "Mont", link: "link1" },
			{ text: "Loafer", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Boyunluk", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Spor Ekipmanları", link: "link2" },
			{ text: "Hediye Kartları", link: "link2" },
			{ text: "", link: "link2" },

		],
		  [
			  { text: "Takım Elbise", link: "link1" },
			  { text: "Ev Terliği", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Atkı", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Outdoor Ekipmanları", link: "link2" },
			  { text: "Bluetooth Kulaklık", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			{ text: "Sweatshirt", link: "link1" },
			{ text: "Koşu Ayakkabısı", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Bere", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Sporcu Besinleri", link: "link2" },
			{ text: "Gaming PC", link: "link2" },
			{ text: "", link: "link2" },

		  ],
		  [
			  { text: "Deri Mont", link: "link1" },
			  { text: "Çizme", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Eldiven", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Sporcu Aksesuarları", link: "link2" },
			  { text: "Oyuncu Koltuğu", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			  { text: "Kaban", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Sneaker", link: "link2" },
			  { text: "Xbox Series X", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			  { text: "Hırka", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Scooter", link: "link2" },
			  { text: "Drone", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  
		  [
			  { text: "Trençkot", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Bisiklet", link: "link2" },
			  { text: "", link: "link2" },
			  
		  ],
		  
		  [
			{ text: "Palto", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Dalış Malzemeleri", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },

		  ],
		  [
			  { text: "Yağmurluk", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Rüzgarlık", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			  { text: "Blazer", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Aksiyon Kamerası", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			  { text: "Polar", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kamp Malzemeleri", link: "link2" },
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
	  const categoryHeaders = ['Giyim', 'Ayakkabı', 'Kişisel Bakım', 'Çanta', 'Büyük Beden', 'Saat & Aksesuar', 'İç Giyim', 'Spor & Outdoor','Elektronik','Lüks & Designer'];
	  const columnHeaders = ['Ürün Id', 'Ürün İsmi','Platform', 'Marka', 'Renkler',  'Bedenler', 'Fiyat'  ];
  const toggle = () => setModal(!modal);
	return (
		<Fragment>
			<Breadcrumb title="Erkek Ürünler" parent="Ürünler" />
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