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
		  { text: "Süpürge", link: "link1" },
		  { text: "Akıllı Saat", link: "link2" },
		  { text: "Cep Telefonu", link: "link2" },
		  { text: "Aksiyon Kamera", link: "link2" },
		  { text: "Televizyon", link: "link2" },
		  { text: "Buzdolabı", link: "link2" },
		  { text: "Bilgisayarlar", link: "link2" },
		  { text: "Saç Düzleştirici", link: "link2" },
		  { text: "", link: "link2" },

		],
		[
			{ text: "Ütü", link: "link1" },
			{ text: "Akıllı Bileklik", link: "link2" },
			{ text: "Android Cep Telefonları", link: "link2" },
			{ text: "Fotoğraf Makinesi", link: "link2" },
			{ text: "Smart TV", link: "link2" },
			{ text: "Büro Tipi / Mini Buzdolabı", link: "link2" },
			{ text: "Tablet", link: "link2" },
			{ text: "Tıraş Makinesi", link: "link2" },
		    { text: "", link: "link2" },
		],
		[
			{ text: "Robot Süpürge", link: "link1" },
			{ text: "VR Gözlük", link: "link2" },
			{ text: "iPhone iOS Cep Telefonları", link: "link2" },
			{ text: "Video Kamera", link: "link2" },
			{ text: "QLED TV", link: "link2" },
			{ text: "Gardrop Tipi Buzdolabı", link: "link2" },
			{ text: "Bilgisayar Bileşenleri", link: "link2" },
			{ text: "Saç Maşası", link: "link2" },
		    { text: "", link: "link2" },
		],
		[
			{ text: "Kahve Makinesi", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "Kapak & Kılıf", link: "link2" },
			{ text: "DSLR Fotoğraf Makinesi", link: "link2" },
			{ text: "OLED TV", link: "link2" },
			{ text: "XXL Buzdolabı", link: "link2" },
			{ text: "Monitör", link: "link2" },
			{ text: "Saç Kurutma Makinesi", link: "link2" },
		    { text: "", link: "link2" },
		],
		
		[
			{ text: "Blender", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "Şarj Cihazları", link: "link2" },
			{ text: "Şipşak Fotoğraf Makinesi", link: "link2" },
			{ text: "Mini Televizyon", link: "link2" },
			{ text: "Çamaşır Makinesi", link: "link2" },
			{ text: "Yazıcı & Tarayıcı", link: "link2" },
			{ text: "", link: "link2" },
		    { text: "", link: "link2" },
		],
		[
			{ text: "Çay Makinesi", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "Powerbank", link: "link2" },
			{ text: "Dijital Fotoğraf Makinesi", link: "link2" },
			{ text: "TV Kumandaları", link: "link2" },
			{ text: "Kurutmalı Çamaşır Makinesi", link: "link2" },
			{ text: "Ağ & Modem", link: "link2" },
			{ text: "", link: "link2" },
		    { text: "", link: "link2" },
		  ],
		  [
			  { text: "Tost Makinesi", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Araç İçi Telefon Tutucu", link: "link2" },
			  { text: "Fotoğraf Makinesi Lensleri", link: "link2" },
			  { text: "Soundbar", link: "link2" },
			  { text: "Bulaşık Makinesi", link: "link2" },
			  { text: "Klavye", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			  { text: "Mutfak Robotu", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "iPhone Kılıflar", link: "link2" },
			  { text: "Hafıza Kartı", link: "link2" },
			  { text: "Projeksiyon Cihazı", link: "link2" },
			  { text: "Kurutma Makinesi", link: "link2" },
			  { text: "Mouse", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			  { text: "Buharlı Ütü", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Kulaklıklar", link: "link2" },
			  { text: "Analog Fotoğraf Makinesi", link: "link2" },
			  { text: "Media Player", link: "link2" },
			  { text: "Derin Dondurucu", link: "link2" },
			  { text: "Grafik Tablet", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			{ text: "Kapsül Kahve Makinesi", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Hoparlör", link: "link2" },
			{ text: "Klima", link: "link2" },
			{ text: "SSD", link: "link2" },
			{ text: "", link: "link2" },
		    { text: "", link: "link2" },
		],
		  [
			  { text: "Su Isıtıcı & Kettle", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kulaklık", link: "link2" },
			  { text: "Hava Temizleyici", link: "link2" },
			  { text: "RAM", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			{ text: "Dikey Süpürge", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "Uydu Alıcısı", link: "link2" },
			{ text: "Portatif Klima", link: "link2" },
			{ text: "Ekran Kartı", link: "link2" },
			{ text: "", link: "link2" },
		    { text: "", link: "link2" },
		  ],
		  [
			  { text: "Elektrikli Izgara", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Çanak Anten", link: "link2" },
			  { text: "Kombi", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			  { text: "Airfryer & Fritöz", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "HDMI Kablo", link: "link2" },
			  { text: "Mikrodalga Fırın", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			  { text: "Elektrikli Isıtıcı", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Akım Korumalı Prizler", link: "link2" },
			  { text: "Aspiratör", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kablo & Adaptör", link: "link2" },
			  { text: "Mini & Midi Fırın", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  
		  [
			{ text: "", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "LNB", link: "link2" },
			{ text: "Ankastre Setler", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
		    { text: "", link: "link2" },
		],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "TV Ekran Koruyucu", link: "link2" },
			  { text: "Ankastre Ocak", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "TV Askı Aparatı", link: "link2" },
			  { text: "Ankastre Davlumbaz", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
		  ],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Kablolu Hoparlör", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
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
	  const categoryHeaders = ['Küçük Ev Aletleri', 'Giyilebilir Teknoloji', 'Telefon', 'Foto & Kamera', 'TV & Görüntü & Ses', 'Beyaz Eşya', 'Bilgisayar & Tablet', 'Kişisel Bakım Aletleri', 'Dijital Kod & Ürünler'];
	  const columnHeaders = ['Ürün Id', 'Ürün İsmi','Platform', 'Marka', 'Renkler',  'Bedenler', 'Fiyat'  ];
  const toggle = () => setModal(!modal);
	return (
		<Fragment>
			<Breadcrumb title="Elektronik Ürünler" parent="Ürünler" />
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