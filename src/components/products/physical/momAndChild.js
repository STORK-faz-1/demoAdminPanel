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
		  { text: "Bebek Takımları", link: "link1" },
		  { text: "Elbise", link: "link2" },
		  { text: "Sweatshirt", link: "link2" },
		  { text: "Bebek Bezi", link: "link2" },
		  { text: "Eğitici Oyuncaklar", link: "link2" },
		  { text: "Biberon & Emzik", link: "link2" },
		  { text: "Bebek Arabası & Puset", link: "link2" },
		  { text: "Bebek Beşiği", link: "link2" },

		],
		[
			{ text: "Ayakkabı", link: "link1" },
			{ text: "Sweatshirt", link: "link2" },
			{ text: "Spor Ayakkabı", link: "link2" },
			{ text: "Bebek Şampuanı", link: "link2" },
			{ text: "Oyuncak Araba", link: "link2" },
			{ text: "Göğüs Pompası", link: "link2" },
			{ text: "Park Yatak", link: "link2" },
			{ text: "Bebek Yatağı", link: "link2" },

		],
		[
			{ text: "Hastane Çıkışı", link: "link1" },
			{ text: "Spor Ayakkabı", link: "link2" },
			{ text: "Eşofman", link: "link2" },
			{ text: "Krem & Yağlar", link: "link2" },
			{ text: "Oyuncak Bebek", link: "link2" },
			{ text: "Mama Sandalyesi", link: "link2" },
			{ text: "Ana Kucağı", link: "link2" },
			{ text: "Bebek Nevresimleri", link: "link2" },

		],
		[
			{ text: "Yenidoğan Kıyafetleri", link: "link1" },
			{ text: "Eşofman", link: "link2" },
			{ text: "İç Giyim & Pijama", link: "link2" },
			{ text: "Bebek Çantası", link: "link2" },
			{ text: "Bebek & Okul Öncesi", link: "link2" },
			{ text: "Mama Önlüğü", link: "link2" },
			{ text: "Portbebe & Kanguru", link: "link2" },
			{ text: "Oyuncak Sepetleri", link: "link2" },

		],
		
		[
			{ text: "Tulum", link: "link1" },
			{ text: "İç Giyim & Pijama", link: "link2" },
			{ text: "Tişört & Atlet", link: "link2" },
			{ text: "Bebek Sabunları", link: "link2" },
			{ text: "Kumandalı Oyuncak", link: "link2" },
			{ text: "Alıştırma Bardağı", link: "link2" },
			{ text: "Yürüteç", link: "link2" },
			{ text: "Bebek Cibinlik", link: "link2" },

		],
		[
			{ text: "Body & Zıbın", link: "link1" },
			{ text: "Tişört & Atlet", link: "link2" },
			{ text: "Günlük Ayakkabı", link: "link2" },
			{ text: "Bebek Deterjanları", link: "link2" },
			{ text: "Robot Oyuncak", link: "link2" },
			{ text: "Biberon Temizleyici", link: "link2" },
			{ text: "Oto Koltuğu", link: "link2" },
			{ text: "Oyuncak Dolabı", link: "link2" },

		  ],
		  [
			  { text: "Tişört & Atlet", link: "link1" },
			  { text: "Tayt", link: "link2" },
			  { text: "Okul Çantası", link: "link2" },
			  { text: "Bebek Vücut Kremi", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Biberon Seti", link: "link2" },
			  { text: "Baston Puset", link: "link2" },
			  { text: "Bebek Odası Mobilyaları", link: "link2" },

		  ],
		  [
			  { text: "Elbise", link: "link1" },
			  { text: "Günlük Ayakkabı", link: "link2" },
			  { text: "Şort", link: "link2" },
			  { text: "Islak Mendil", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Bebek Maması", link: "link2" },
			  { text: "Kanguru", link: "link2" },
			  { text: "Bebek Oyun Matları", link: "link2" },

		  ],
		  [
			  { text: "Şort", link: "link1" },
			  { text: "Şort", link: "link2" },
			  { text: "Gömlek", link: "link2" },
			  { text: "Bebek Tarağı", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kavanoz Mama", link: "link2" },
			  { text: "Bebek Salıncakları", link: "link2" },
			  { text: "Bebek Oyun Parkı", link: "link2" },

		  ],
		  [
			{ text: "Bebek Patiği", link: "link1" },
			{ text: "Mont", link: "link2" },
			{ text: "Mont", link: "link2" },
			{ text: "Bebek Yağı", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Sterilizatör", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },

		],
		  [
			  { text: "Hırka", link: "link1" },
			  { text: "Çocuk Oyun Evi", link: "link2" },
			  { text: "Oyuncak Traktör", link: "link2" },
			  { text: "Bebek Buhar Makinesi", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Bebek Bakım Çantası", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			{ text: "Battaniye", link: "link1" },
			{ text: "Oyuncak Bebek", link: "link2" },
			{ text: "Akülü Araba", link: "link2" },
			{ text: "Bebek Ateş Ölçer", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Yemek Setleri", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },

		  ],
		  [
			  { text: "Alt Üst Takım", link: "link1" },
			  { text: "Oyuncak Mutfak", link: "link2" },
			  { text: "Kumandalı Araba", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kaşık Maması", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			  { text: "Tişört", link: "link1" },
			  { text: "Kaban", link: "link2" },
			  { text: "Bisiklet", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Buharlı Pişirici", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			  { text: "Etek", link: "link1" },
			  { text: "Abiye & Elbise", link: "link2" },
			  { text: "Boxer", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Termal Çanta", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  
		  [
			  { text: "Çorap", link: "link1" },
			  { text: "Ceket", link: "link2" },
			  { text: "İçlik", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Süt Pompası", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  
		  [
			{ text: "Şapka", link: "link1" },
			{ text: "Pantolon", link: "link2" },
			{ text: "Bot", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Emzirme Önlüğü", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },

		  ],
		  [
			  { text: "Eldiven", link: "link1" },
			  { text: "Kazak", link: "link2" },
			  { text: "Krampon", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Emzirme Minderi", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			  { text: "Eşofman", link: "link1" },
			  { text: "Bot", link: "link2" },
			  { text: "Şapka & Bere & Eldiven", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Göğüs Pedi", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },

		  ],
		  [
			  { text: "Bere", link: "link1" },
			  { text: "Şapka & Bere & Eldiven", link: "link2" },
			  { text: "Takım Elbise", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Göğüs Kremi", link: "link2" },
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
	  const categoryHeaders = ['Bebek', 'Kız Çocuk', 'Erkek Çocuk', 'Bebek Bakım', 'Oyuncak', 'Beslenme Emzirme', 'Taşıma & Güvenlik', 'Bebek Odası'];
	  const columnHeaders = ['Ürün Id', 'Ürün İsmi','Platform', 'Marka', 'Renkler',  'Bedenler', 'Fiyat'  ];
  const toggle = () => setModal(!modal);
	return (
		<Fragment>
			<Breadcrumb title="Anne & Çocuk Ürünler" parent="Ürünler" />
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