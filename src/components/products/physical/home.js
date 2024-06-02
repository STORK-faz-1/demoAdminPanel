import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useEffect } from 'react';
import Datatable from "../../common/datatable";
import Select from 'react-select';

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
	const storeOptions = [
		{ value: 'England', label: 'England' },
		{ value: 'Canada', label: 'Kanada' },
		{ value: 'Mexican', label: 'Meksika' },
		
	  ];
	  const Checkbox = ({ children, ...props }) => (
		<label style={{ marginRight: '1em' }}>
		  <input type="checkbox" {...props} />
		  {children}
		</label>
	  );
	const cellContents = [
		[
		  { text: "Yemek Takımı", link: "link1" },
		  { text: "Havlu & Havlu Seti", link: "link2" },
		  { text: "Yatak Odası", link: "link2" },
		  { text: "Dekoratif Aksesuar", link: "link2" },
		  { text: "Avize", link: "link2" },
		  { text: "Salon & Oturma Odası", link: "link2" },
		  { text: "Parti Malzemeleri", link: "link2" },
		  { text: "Koşu Bandı", link: "link2" },
		  { text: "Sınav Hazırlık Kitapları", link: "link2" },
		  { text: "Defter", link: "link2" },
		  { text: "Oto Aksesuar", link: "link2" },
		  { text: "Banyo Yapı Malzemeleri", link: "link2" }

		],
		[
			{ text: "Çatal Kaşık Bıçak Seti", link: "link1" },
			{ text: "Bornoz", link: "link2" },
			{ text: "Halı & Kilim & Paspas", link: "link2" },
			{ text: "Tablo", link: "link2" },
			{ text: "Lambader", link: "link2" },
			{ text: "Yatak Odası", link: "link2" },
			{ text: "Müzik Alet ve Ekipmanları", link: "link2" },
			{ text: "Dumbell & Ağırlık", link: "link2" },
			{ text: "Ders ve Yardımcı Kitaplar", link: "link2" },
			{ text: "Ajanda", link: "link2" },
			{ text: "Oto Paspası", link: "link2" },
			{ text: "Elektrikli El Aleti", link: "link2" }

		],
		[
			{ text: "Baharat Takımı", link: "link1" },
			{ text: "Banyo Seti", link: "link2" },
			{ text: "Perde", link: "link2" },
			{ text: "Duvar Saati", link: "link2" },
			{ text: "Abajur", link: "link2" },
			{ text: "Bahçe Mobilyası", link: "link2" },
			{ text: "Hediyelik Ürünler", link: "link2" },
			{ text: "Pilates & Yoga", link: "link2" },
			{ text: "Roman & Edebiyat Kitapları", link: "link2" },
			{ text: "Fotokopi Kağıdı", link: "link2" },
			{ text: "Oto Lastik", link: "link2" },
			{ text: "Hırdavat Ürünleri", link: "link2" }
  
		],
		[
			{ text: "Bardak", link: "link1" },
			{ text: "Banyo Paspası", link: "link2" },
			{ text: "Nevresim Takımı", link: "link2" },
			{ text: "Ayna", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Çalışma Odası", link: "link2" },
			{ text: "Hobi Malzemeleri", link: "link2" },
			{ text: "Eliptik Bisiklet", link: "link2" },
			{ text: "Kişisel Gelişim & Psikoloji Kitapları", link: "link2" },
			{ text: "Kalem", link: "link2" },
			{ text: "Kask", link: "link2" },
			{ text: "Boya", link: "link2" }
  
		],
		
		[
			{ text: "Fırın & Kek Kalıbı", link: "link1" },
			{ text: "Kadın Bornoz", link: "link2" },
			{ text: "Yastık", link: "link2" },
			{ text: "Oda Kokusu", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Yemek Odası", link: "link2" },
			{ text: "Uzaktan Kumandalı Araçlar", link: "link2" },
			{ text: "Yoga Matı", link: "link2" },
			{ text: "Çocuk Bakım Kitapları", link: "link2" },
			{ text: "Boya Seti", link: "link2" },
			{ text: "Kol Dayama & Kolçak", link: "link2" },
			{ text: "Matkap", link: "link2" }
  
		],
		[
			{ text: "Çaydanlık", link: "link1" },
			{ text: "Erkek Bornoz", link: "link2" },
			{ text: "Kırlent ve Kılıfı", link: "link2" },
			{ text: "Trendyol Sanatı", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Oturma Grupları", link: "link2" },
			{ text: "Drone", link: "link2" },
			{ text: "Sporcu Eldiveni", link: "link2" },
			{ text: "Yabancı Dil Eğitim Kitapları", link: "link2" },
			{ text: "Dosyalama Arşivleme", link: "link2" },
			{ text: "Güneşlik & Perde", link: "link2" },
			{ text: "Ampul", link: "link2" }
  
		  ],
		  [
			  { text: "Tencere Seti", link: "link1" },
			  { text: "Peştamal", link: "link2" },
			  { text: "Mutfak Havlusu", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Genç Odası", link: "link2" },
			  { text: "Oyun Grupları", link: "link2" },
			  { text: "Pilates Topu", link: "link2" },
			  { text: "E-Kitaplar", link: "link2" },
			  { text: "Masaüstü Gereçleri", link: "link2" },
			  { text: "Araç Kokusu", link: "link2" },
			  { text: "Vidalama", link: "link2" }
	
		  ],
		  [
			  { text: "Kadeh", link: "link1" },
			  { text: "Ayak Havlusu", link: "link2" },
			  { text: "Uyku Seti", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Koltuk Takımı", link: "link2" },
			  { text: "Yılbaşı Ürünleri", link: "link2" },
			  { text: "Sporcu Sulukları", link: "link2" },
			  { text: "Din Kitapları", link: "link2" },
			  { text: "Ofis Teknolojisi", link: "link2" },
			  { text: "Motosiklet Eldiveni", link: "link2" },
			  { text: "", link: "link2" }
	
		  ],
		  [
			  { text: "Servis Tabağı", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Yatak Örtüsü", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Mutfak Dolabı", link: "link2" },
			  { text: "Led Işık", link: "link2" },
			  { text: "Termoslar", link: "link2" },
			  { text: "Çizgi Roman ve Manga", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Motosiklet Montu", link: "link2" },
			  { text: "", link: "link2" }
	
		  ],
		  [
			{ text: "Yemek Tabağı", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "Battaniye", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Şifonyer", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Yabancı Dil Çocuk Kitapları", link: "link2" },
			{ text: "", link: "link2" },
			{ text: " Motosiklet Botu", link: "link2" },
			{ text: "", link: "link2" }
  
		],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Yorgan", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Mutfak Tezgahı", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Motosiklet Sepeti", link: "link2" },
			  { text: "", link: "link2" }
	
			],
		  [
			{ text: "", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "Elektrikli Battaniye", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Dolap", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" }
  
		  ],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Gardırop", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" }
	
			],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Sandalye", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" }
	
			],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Zigon", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" }
	
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
	  const categoryHeaders = ['Sofra & Mutfak', 'Banyo', 'Ev Tekstili', 'Ev Dekorasyon', 'Aydınlatma', 'Mobilya', 'Hobi', 'Spor & Outdoor', 'Kitap', 'Kırtasiye', 'Otomobil & Motosiklet', 'Yapı Market'];
	  const columnHeaders = ['Ürün Id', 'Ürün İsmi','Platform', 'Marka', 'Renkler',  'Bedenler', 'Fiyat'  ];
  const toggle = () => setModal(!modal);
	return (
		<Fragment>
			<Breadcrumb title="Ev & Yaşam Ürünleri" parent="Ürünler" />
			<Container fluid={true}>
			<Col lg="4">
			<Row>
					<FormGroup row>
	
            <Col xl="6 xl-100">
			<Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={storeOptions[0]}
		isClearable={true} // Her zaman clearable
        isSearchable={true} // Her zaman searchable
        name="store"
        options={storeOptions}
      />
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
	  Categories
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
      placeholder="🔎 Search.."
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