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
                    const productsData = response.data.data.filter(product => {
                        return product.category && product.category.pid === 97;
                    }).map(product => {
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

                    if (productsData.length < 15) {
                        let remainingCount = 15 - productsData.length;
                        let nextPage = pageNum + 1;

                        while (remainingCount > 0) {
                            const nextPageUrl = `${URL}/product?is_active=true&page=${nextPage}`;
                            const nextResponse = await axios.get(nextPageUrl, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'x-api-token': token
                                },
                            });

                            if (nextResponse.status === 200 && nextResponse.data.success) {
                                const nextPageProducts = nextResponse.data.data.filter(product => {
                                    return product.category && product.category.pid === 97;
                                }).map(product => {
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

                                productsData.push(...nextPageProducts);
                                remainingCount = 15 - productsData.length;
                                nextPage++;
                            } else {
                                break; 
                            }
                        }
                    }

                    return productsData.slice(0, 15); 
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
	const [categories, setCategories] = useState([]);

	  const [modal, setModal] = useState(false);
	  useEffect(() => {
        axios.get(`${URL}/category/a41dfd6c-0716-11ee-b6c4-02120a000912/subcategory?only_main=true`)
            .then(response => {
                if (response.status === 200 && response.data.success) {
                    setCategories(response.data.data);
                } else {
                    throw new Error('Categories could not be fetched');
                }
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);
  const toggle = () => setModal(!modal);
	return (
		<Fragment>
			<Breadcrumb title="Anne & Çocuk Ürünleri" parent="Ürünler" />
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
      <Button variant="outlined"  onClick={toggle} >
        Kategoriler
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="m" centered>
                                        <ModalHeader toggle={toggle}></ModalHeader>
                                        <ModalBody>
                                            <TableContainer>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            {categories.map(category => (
                                                                <TableCell key={category.id}>
                                                                    <div className="text-center">{category.name}</div>
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow>
                                                            {categories.map(category => (
                                                                <TableCell key={category.id}>
                                                                    {category.subCategories && category.subCategories.map(subCategory => (
                                                                        <div key={subCategory.id}>
                                                                            <div className="text-center">{subCategory.name}</div>
                                                                        </div>
                                                                    ))}
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
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
