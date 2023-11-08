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
		  { text: "Elbise", link: "link1" },
		  { text: "Topuklu Ayakkabı", link: "link2" },
		  { text: "Çanta", link: "link2" },
		  { text: "Omuz Çantası", link: "link2" },
		  { text: "Pijama Takımı", link: "link2" },
		  { text: "Lüks Çanta", link: "link2" },
		  { text: "Sweatshirt", link: "link2" }
		],
		[
			{ text: "Tişört", link: "link1" },
			{ text: "Sneaker", link: "link2" },
			{ text: "Saat", link: "link2" },
			{ text: "Sırt Çantası", link: "link2" },
			{ text: "Gecelik", link: "link2" },
			{ text: "Lüks Giyim", link: "link2" },
			{ text: "Tişört", link: "link2" }
		],
		[
			{ text: "Gömlek", link: "link1" },
			{ text: "Günlük Ayakkabı", link: "link2" },
			{ text: "Takı", link: "link2" },
			{ text: "Bel Çantası", link: "link2" },
			{ text: "Sütyen", link: "link2" },
			{ text: "Lüks Ayakkabı", link: "link2" },
			{ text: "Spor Sütyeni", link: "link2" }
		],
		[
			{ text: "Kot Pantolon", link: "link1" },
			{ text: "Babet", link: "link2" },
			{ text: "Cüzdan", link: "link2" },
			{ text: "Okul Çantası", link: "link2" },
			{ text: "İç Çamaşırı Takımları", link: "link2" },
			{ text: "Tasarım Giyim", link: "link2" },
			{ text: "Tayt", link: "link2" }
		],
		
		[
			{ text: "Kot Ceket", link: "link1" },
			{ text: "Sandalet", link: "link2" },
			{ text: "Atkı", link: "link2" },
			{ text: "Laptop Çantası", link: "link2" },
			{ text: "Fantezi Giyim", link: "link2" },
			{ text: "Tasarım Ayakkabı", link: "link2" },
			{ text: "Eşofman", link: "link2" }
		],
		[
			{ text: "Pantolon", link: "link1" },
			{ text: "Bot", link: "link2" },
			{ text: "Bere", link: "link2" },
			{ text: "Portföy", link: "link2" },
			{ text: "Çorap", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Koşu Ayakkabısı", link: "link2" }
		  ],
		  [
			  { text: "Mont", link: "link1" },
			  { text: "Çizme", link: "link2" },
			  { text: "Eldiven", link: "link2" },
			  { text: "Postacı Çantası", link: "link2" },
			  { text: "Korse", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Spor Çantası", link: "link2" }
		  ],
		  [
			  { text: "Bluz", link: "link1" },
			  { text: "Kar Botu", link: "link2" },
			  { text: "Kemer", link: "link2" },
			  { text: "El Çantası", link: "link2" },
			  { text: "Külot", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Spor Ekipmanları", link: "link2" }
		  ],
		  [
			  { text: "Ceket", link: "link1" },
			  { text: "Loafer", link: "link2" },
			  { text: "Şal", link: "link2" },
			  { text: "Kanvas Çanta", link: "link2" },
			  { text: "Büstiyer", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Outdoor Ayakkabı", link: "link2" }
		  ],
		  [
			{ text: "Etek", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Makyaj Çantası", link: "link2" },
			{ text: "Bralet", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Kar Botu", link: "link2" }
		],
		  [
			  { text: "Kazak", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Abiye Çanta", link: "link2" },
			  { text: "Atlet & Body", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Outdoor Ekipmanları", link: "link2" }
		  ],
		  [
			{ text: "Tesettür", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Çapraz Çanta", link: "link2" },
			{ text: "Kombinezon", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Sporcu Besinleri", link: "link2" }
		  ],
		  [
			  { text: "Büyük Beden", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Bez Çanta", link: "link2" },
			  { text: "Jartiyer", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Sporcu Aksesuarları", link: "link2" }
		  ],
		  [
			  { text: "Trençkot", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Anne Bebek Çantası", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Outdoor Çanta", link: "link2" }
		  ],
		  [
			  { text: "Yağmurluk & Rüzgarlık", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Evrak Çantası", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kayak Malzemeleri", link: "link2" }
		  ],
		  
		  [
			  { text: "Sweatshirt", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Tote Çanta", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Uyku Tulumu", link: "link2" }
		  ],
		  
		  [
			{ text: "Kazak", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Beslenme Çantası", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Mat", link: "link2" }
		  ],
		  [
			  { text: "Kaban", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kartlık", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Dağcılık", link: "link2" }
		  ],
		  [
			  { text: "Hırka", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Cüzdan", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kadın Spor Ceket", link: "link2" }
		  ],
		  [
			  { text: "Palto", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kadın Spor Çantası", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Spor Ayakkabı", link: "link2" }
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
	  const categoryHeaders = ['Giyim', 'Ayakkabı', 'Aksesuar & Çanta', 'Çanta', 'İç Giyim', 'Lüks & Designer', 'Spor & Outdoor'];
	  const columnHeaders = ['Ürün Id', 'Ürün İsmi','Platform', 'Marka', 'Renkler',  'Bedenler', 'Fiyat'  ];
  const toggle = () => setModal(!modal);
	return (
		<Fragment>
			<Breadcrumb title="Kadın Ürünler" parent="Tüm Ürünler" />
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