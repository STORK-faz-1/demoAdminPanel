import React, { Fragment, useState, useEffect  } from "react";
import Breadcrumb from "../../common/breadcrumb";
import "react-toastify/dist/ReactToastify.css";
import Select from 'react-select';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Link } from 'react-router-dom'; 
import {
	Card,
	CardBody,
	Col,
	Container,
	Form,
	FormGroup,
	Input,
	Modal,
	ModalBody,
	ModalHeader,
	Row
} from "reactstrap";

const Category = () => {
	const storeOptions = [
		{ value: 'England', label: 'İngiltere' },
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
	  const URL = "http://185.165.76.194:9069/api/v1";

	  const [products, setProducts] = useState([]);
	  const [page, setPage] = useState(1);
  
	  useEffect(() => {
		  let ignore = false;
  
		  const generateToken = async () => {
			  const url = `${URL}/generate-token`;
			  const payload = {
				  email: 'taner.akdemir@algebransoft.com',
				  password: 'Abcde123*',
			  };
  
			  const response = await axios.post(url, payload, {
				  headers: {
					  'Content-Type': 'application/json',
				  },
			  });
  
			  if (response.status === 200 && response.data.success) {
				  return response.data.data;
			  } else {
				  throw new Error('Token could not be retrieved');
			  }
		  };
  
		  const fetchProducts = async (token, pageNum) => {
            try {
                const url = `${URL}/product?is_active=true&page=${pageNum}`;
                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-token': token
                    },
                });

                if (response.status === 200 && response.data.success) {
                    const productsData = response.data.data.map(product => {
                        const colorAttribute = product.attributes.find(attr => attr.key === 'Renk');
                        const color = colorAttribute ? colorAttribute.value : '-'; 
                        const firstImage = product.images.length > 0 ? product.images[0].image : '';
                        
                        return {
                            id: product.id,
                            name: product.name,
                            platform: product.platform,
                            brandName: product.platformBrandName,
                            price: product.productVariant[0].price,
                            productUrl: product.platformUrl,
                            size: product.productVariant.map(variant => variant.variantValue).join(', '),
                            color: color,
                            image: firstImage,
                        };
                    });
                    return productsData;
                } else {
                    throw new Error('Products could not be fetched');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                return [];
            }
        };
		
		  generateToken()
			  .then(token => fetchProducts(token, page))
			  .then(productsData => setProducts(productsData))
			  .catch(error => console.error('Token could not be retrieved:', error));
  
		  return () => { ignore = true; };
	  }, [page]);
  
	  const columns = [
		  { id: 'id', label: 'Ürün Id', minWidth: 100 },
		  { id: 'image', label: 'Ürün Resmi', minWidth: 100 },
		  { id: 'name', label: 'Ürün İsmi', minWidth: 100 },
		  { id: 'platform', label: 'Platform', minWidth: 100 },
		  { id: 'brandName', label: 'Marka', minWidth: 100 },
		  { id: 'color', label: 'Renk', minWidth: 100 },
		  { id: 'size', label: 'Bedenler', minWidth: 100 },
		  { id: 'price', label: 'Fiyat', minWidth: 100 },
		  { id: 'seller', label: 'Satıcı', minWidth: 100 },
		  { id: 'productUrl', label: 'Ürün Url', minWidth: 100 }
	  ];
  
	  const loadPreviousPage = () => {
		  setPage(page - 1);
	  };
  
	  const loadNextPage = () => {
		  setPage(page + 1);
	  };
  
	const [open, setOpen] = useState(false);
	const onOpenModal = () => {
		setOpen(true);
	};
	const onCloseModal = () => {
		setOpen(false);
	};
	  const [modal, setModal] = useState(false);
	  const categoryHeaders = ['Giyim', 'Ayakkabı', 'Aksesuar & Çanta', 'Çanta', 'İç Giyim', 'Lüks & Designer', 'Spor & Outdoor'];

  const toggle = () => setModal(!modal);
	return (
		<Fragment>
			<Breadcrumb title="Kadın Ürünleri" parent="Ürünler" />
			<Container fluid={true}>
			<Col lg="4">
			<Row>
				<FormGroup row>
	
					<Col xl="6 xl-100">
					<Select
				className="basic-single"
				classNamePrefix="select"
				defaultValue={storeOptions[0]}
				isClearable={true} 
				isSearchable={true} 
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
								{/* <div className="table-container" ></div> */}
								               <Paper sx={{ width: '100%', overflowX: 'auto' }}>
                                        <TableContainer>
                                            <Table stickyHeader aria-label="sticky table">
                                                <TableHead>
                                                    <TableRow>
                                                        {columns.map((column) => (
                                                            <TableCell
                                                                key={column.id}
                                                                align="center"
                                                                style={{ minWidth: column.minWidth }}
                                                            >
                                                                {column.label}
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                </TableHead>
												<TableBody>
												{products.map((product) => {
    return (
        <TableRow key={product.id}>
            {columns.map((column) => {
                const value = product[column.id];
                if (column.id === 'image') {
                    return (
                        <TableCell key={column.id}>
                            <img src={value} alt={product.name} style={{ width: '100px', height: 'auto' }} />
                        </TableCell>
                    );
                } else if (column.id === 'productUrl') {
                    return (
                        <TableCell key={column.id} align={column.align}>
                            <Link to={value} target="_blank">Ürüne Git</Link>
                        </TableCell>
                    );
                } else if (column.id === 'price') {
                    return (
                        <TableCell key={column.id} align={column.align}>
                            {value + ' TL'}
                        </TableCell>
                    );
                } else if (column.id === 'size') {
                    return (
                        <TableCell key={column.id} align={column.align}>
                            {value ? value : '-'}
                        </TableCell>
                    );
                }
                return (
                    <TableCell key={column.id} align={column.align}>
                        {value}
                    </TableCell>
                );
            })}
        </TableRow>
    );
})}

</TableBody>

                                            </Table>
                                        </TableContainer>
                                    </Paper>                        
									<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
									<Button onClick={loadPreviousPage} startIcon={<SkipPreviousIcon />} disabled={page === 1}>
										{``}
									</Button>
									<p style={{ margin: '0 10px',textAlign: 'center' }}>{`Sayfa ${page}`}</p>
									<Button onClick={loadNextPage} endIcon={<SkipNextIcon />}>
										{``}
									</Button>
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
