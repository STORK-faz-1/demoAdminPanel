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
		  { text: "Spor Tişört", link: "link1" },
		  { text: "Eşofman Takımı", link: "link2" },
		  { text: "Sneaker", link: "link2" },
		  { text: "Elastik Bant", link: "link2" },
		  { text: "Deniz & Plaj", link: "link2" },
		  { text: "Şehir Bisikleti", link: "link2" },
		  { text: "Protein Tozu", link: "link2" },
		  { text: "Pilates Malzemeleri", link: "link2" },
		  { text: "Basketbol Topu", link: "link2" }

		],
		[
			{ text: "Ceket & Yelek", link: "link1" },
			{ text: "Tayt", link: "link2" },
			{ text: "Koşu Ayakkabısı", link: "link2" },
			{ text: "El Yayı", link: "link2" },
			{ text: "Kaykay", link: "link2" },
			{ text: "Dağ Bisikleti", link: "link2" },
			{ text: "Amino Asit", link: "link2" },
			{ text: "Fitness Aletleri", link: "link2" },
			{ text: "Futbol Topu", link: "link2" }

		],
		[
			{ text: "Yağmurluk", link: "link1" },
			{ text: "Şort", link: "link2" },
			{ text: "Halı Saha Ayakkabısı", link: "link2" },
			{ text: "Mat", link: "link2" },
			{ text: "Paten", link: "link2" },
			{ text: "Katlanabilir Bisikletler", link: "link2" },
			{ text: "Karbonhidrat", link: "link2" },
			{ text: "Kondisyon Bisikleti", link: "link2" },
			{ text: "", link: "link2" }

		],
		[
			{ text: "Spor Sütyeni", link: "link1" },
			{ text: "Termal Giyim", link: "link2" },
			{ text: "Basketbol Ayakkabısı", link: "link2" },
			{ text: "Çalışma İstasyonları", link: "link2" },
			{ text: "Kamp Malzemeleri", link: "link2" },
			{ text: "Yol Bisikletleri", link: "link2" },
			{ text: "L-Karnitin (CLA)", link: "link2" },
			{ text: "Koşu Bandı", link: "link2" },
			{ text: "", link: "link2" }

		],
		
		[
			{ text: "Sweatshirt", link: "link1" },
			{ text: "Çorap", link: "link2" },
			{ text: "Yürüyüş Ayakkabısı", link: "link2" },
			{ text: "Atlama İpi", link: "link2" },
			{ text: "Dağcılık & Tırmanış", link: "link2" },
			{ text: "Çocuk Bisikletleri", link: "link2" },
			{ text: "Güç ve Performans", link: "link2" },
			{ text: "Yoga Malzemeleri", link: "link2" },
			{ text: "", link: "link2" }

		],
		[
			{ text: "Atlet", link: "link1" },
			{ text: "Spor Pantolon", link: "link2" },
			{ text: "Outdoor Ayakkabı", link: "link2" },
			{ text: "Boks Eldiveni", link: "link2" },
			{ text: "Aksiyon Kamera", link: "link2" },
			{ text: "Elektrikli Bisikletler", link: "link2" },
			{ text: "Gıda Takviyesi & Vitaminler", link: "link2" },
			{ text: "Dambıl Seti", link: "link2" },
			{ text: "", link: "link2" }

		  ],
		  [
			  { text: "Forma", link: "link1" },
			  { text: "Terlik", link: "link2" },
			  { text: "Tenis Ayakkabısı", link: "link2" },
			  { text: "Dambıl Seti", link: "link2" },
			  { text: "Çadır Uyku Tulumu", link: "link2" },
			  { text: "Bisikletçi Ekipmanları", link: "link2" },
			  { text: "Kreatin", link: "link2" },
			  { text: "Ağırlık Plakaları", link: "link2" },
			  { text: "", link: "link2" }

		  ],
		  [
			  { text: "Spor Mont", link: "link1" },
			  { text: "Eşofman", link: "link2" },
			  { text: "Voleybol Ayakkabısı", link: "link2" },
			  { text: "Eliptik Bisiklet", link: "link2" },
			  { text: "Su Sporu Malzemeleri", link: "link2" },
			  { text: "Bisiklet Gözlükleri", link: "link2" },
			  { text: "Protein Bar", link: "link2" },
			  { text: "Barfiks", link: "link2" },
			  { text: "", link: "link2" }

		  ],
		  [
			  { text: "Spor Şapka", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Fitness Ayakkabısı", link: "link2" },
			  { text: "Barfiks Barı", link: "link2" },
			  { text: "Dalış Malzemeleri", link: "link2" },
			  { text: "Bisiklet Kaskları", link: "link2" },
			  { text: "Shaker", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" }

		  ],
		  [
			{ text: "", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "Deniz Ayakkabısı", link: "link2" },
			{ text: "Eldiven", link: "link2" },
			{ text: "Balıkçılık Malzemeleri", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" }

		],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Kaykay Ayakkabısı", link: "link2" },
			  { text: "Kettlebell", link: "link2" },
			  { text: "Tenis Malzemeleri", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" }

			],
		  [
			{ text: "", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "Outdoor Bot", link: "link2" },
			{ text: "Kondisyon Bisikleti", link: "link2" },
			{ text: "Kayak ve Snowboard", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" }

		  ],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Terlik", link: "link2" },
			  { text: "Yürüme Bandı", link: "link2" },
			  { text: "Okçuluk", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" }

			],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Sandalet", link: "link2" },
			  { text: "Pilates Topu", link: "link2" },
			  { text: "Çadır", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" }

			],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Çizme", link: "link2" },
			  { text: "Kürek Çekme Aleti", link: "link2" },
			  { text: "Havlu", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" }

			],
		  
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Bot", link: "link2" },
			  { text: "Boks Bandajı", link: "link2" },
			  { text: "Suluk", link: "link" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" }

			],
		  
		  [
			{ text: "", link: "link1" },
			{ text: "", link: "link2" },
			{ text: "Kar Botu", link: "link2" },
			{ text: "Crossfit", link: "link2" },
			{ text: "Matlar", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" },
			{ text: "", link: "link2" }

		  ],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Kayak Ayakkabısı", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Bisiklet", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" }

			],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Snowboard Botu", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Termos", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "", link: "link2" }

			],
		  [
			  { text: "", link: "link1" },
			  { text: "", link: "link2" },
			  { text: "Havuz Terliği", link: "link2" },
			  { text: "", link: "link2" },
			  { text: "Pilates Topları", link: "link2" },
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
	  const categoryHeaders = ['Spor Üst Giyim', 'Spor Alt Giyim', 'Spor Ayakkabı', 'Evde Spor Aletleri', 'Spor Malzemeleri', 'Bisiklet', 'Fitness Kondisyon', 'Sporcu Besinleri', 'Top'];
	  const columnHeaders = ['Ürün Id', 'Ürün İsmi','Platform', 'Marka', 'Renkler',  'Bedenler', 'Fiyat'  ];
  const toggle = () => setModal(!modal);
	return (
		<Fragment>
			<Breadcrumb title="Spor & Outdoor Ürünleri" parent="Ürünler" />
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