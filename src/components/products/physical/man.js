import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb";
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
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Select from 'react-select';
import { ClipLoader } from 'react-spinners'; 

const Category = () => {
  const URL = "https://sellerwox.xyz/api/v1";
  const [products, setProducts] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true); 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [brandOptions, setBrandOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]); 
  const [subCategoryOptions, setSubCategoryOptions] = useState([]); 

  const colorOptions = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
  ];

  const sizeOptions = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
  ];

  const priceRangeOptions = [
    { value: '0-50', label: '0-50 TL' },
    { value: '50-100', label: '50-100 TL' },
  ];

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

  const fetchProducts = async (token, pageNum, categoryId = 83) => {
    try {
      const url = `${URL}/product?is_active=true&category_id=${categoryId}&page=${pageNum}`;
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-token': token
        },
      });
  
      if (response.status === 200 && response.data.success) {
        const productsData = response.data.data.map(product => {
          console.log('Product:', product); 
  
          const attributes = product.attributes || [];
          const images = product.images || [];
  
          const colorAttribute = attributes.find(attr => attr.key === 'Renk');
          const color = colorAttribute ? colorAttribute.value : '-';
          const firstImage = images.length > 0 ? images[0].image : '';
  
          return {
            id: product.id,
            name: product.name,
            platform: product.platform,
            brandName: product.platformBrandName,
            price: product.productVariant.length > 0 ? product.productVariant[0].price : 'N/A',
            productUrl: product.platformUrl,
            size: product.productVariant.map(variant => variant.variantValue).join(', ') || '-',
            color: color,
            image: firstImage,
          };
        });
  
        return productsData.slice(0, 15);
      } else {
        throw new Error('Products could not be fetched');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };

  const fetchBrands = async (token) => {
    try {
      const url = `${URL}/brand?page=1`;
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-token': token
        },
      });

      if (response.status === 200 && response.data.success) {
        const brandsData = response.data.data.map(brand => ({
          value: brand.id,
          label: brand.name,
        }));

        setBrandOptions(brandsData);
      } else {
        throw new Error('Brands could not be fetched');
      }
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const fetchCategories = async (token) => {
    try {
      const url = `${URL}/category/a51dfc6e-9706-11ee-b6c4-02120a000912/subcategory?page=1`;
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-token': token
        },
      });

      if (response.status === 200 && response.data.success) {
        const categoriesData = response.data.data.map(category => ({
          value: category.id,
          label: category.name,
        }));

        setCategoryOptions(categoriesData);
      } else {
        throw new Error('Categories could not be fetched');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    generateToken()
      .then(token => {
        if (!products[page]) {
          setLoading(true); 
          fetchProducts(token, page, selectedSubCategory?.value || selectedCategory?.value || 83)
            .then(productsData => {
              setProducts(prevProducts => ({
                ...prevProducts,
                [page]: productsData
              }));
              setLoading(false); 
            });
        }
        fetchBrands(token);
        fetchCategories(token); 
      })
      .catch(error => console.error('Token could not be retrieved:', error));
  }, [page, selectedCategory, selectedSubCategory]);

  const fetchSubCategories = async (category) => {
    const token = await generateToken();
    try {
      const url = `${URL}/category/a51dfc6e-9706-11ee-b6c4-02120a000912/subcategory?page=1`;
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-token': token
        },
      });

      if (response.status === 200 && response.data.success) {
        const subCategories = response.data.data.find(cat => cat.id === category.value).subCategories;
        const subCategoriesData = subCategories.map(subCategory => ({
          value: subCategory.id,
          label: subCategory.name,
        }));

        setSubCategoryOptions(subCategoriesData);
      } else {
        throw new Error('Subcategories could not be fetched');
      }
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setSelectedSubCategory(null);
    if (selectedOption) {
      fetchSubCategories(selectedOption);
      setLoading(true); 
      generateToken()
        .then(token => {
          fetchProducts(token, page, selectedOption.value)
            .then(productsData => {
              setProducts({ [page]: productsData }); 
              setLoading(false); 
            });
        })
        .catch(error => console.error('Token could not be retrieved:', error));
    }
  };

  const handleSubCategoryChange = (selectedOption) => {
    setSelectedSubCategory(selectedOption);
    if (selectedOption) {
      setLoading(true); 
      generateToken()
        .then(token => {
          fetchProducts(token, page, selectedOption.value)
            .then(productsData => {
              setProducts({ [page]: productsData }); 
              setLoading(false); 
            });
        })
        .catch(error => console.error('Token could not be retrieved:', error));
    }
  };

  const columns = [
    { id: 'id', label: 'Product Id', minWidth: 100 },
    { id: 'image', label: 'Product Image', minWidth: 100 },
    { id: 'name', label: 'Product Name', minWidth: 100 },
    { id: 'platform', label: 'Platform', minWidth: 100 },
    { id: 'brandName', label: 'Brand', minWidth: 100 },
    { id: 'color', label: 'Color', minWidth: 100 },
    { id: 'size', label: 'Sizes', minWidth: 100 },
    { id: 'price', label: 'Price', minWidth: 100 },
    { id: 'productUrl', label: 'Product Url', minWidth: 100 }
  ];

  const loadPreviousPage = () => {
    setPage(page - 1);
  };

  const loadNextPage = () => {
    setPage(page + 1);
  };

  const handlePageInputChange = (e) => {
    const pageNum = parseInt(e.target.value, 10);
    if (!isNaN(pageNum) && pageNum > 0) {
      setPage(pageNum);
    }
  };

  return (
    <Fragment>
      <Breadcrumb title="Man" parent="Products" />
      <Container fluid={true}>
        <style jsx="true">{`
          @media (max-width: 768px) {
            .select-container {
              width: 100% !important;
              margin-bottom: 10px;
            }
          }
        `}</style>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '20px' }}>
                  <Select
                    placeholder="Select Category"
                    options={categoryOptions}
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    styles={{
                      container: (provided) => ({ ...provided, width: '15%', marginBottom: '10px' }),
                      menu: (provided) => ({ ...provided, zIndex: 9999 })
                    }}
                    className="select-container"
                  />
                  <Select
                    placeholder="Select SubCategory"
                    options={subCategoryOptions}
                    value={selectedSubCategory}
                    onChange={handleSubCategoryChange}
                    styles={{
                      container: (provided) => ({ 
                        ...provided, 
                        width: '15%', 
                        marginBottom: '10px', 
                        border: selectedCategory ? 'none' : '1px solid red' 
                      }),
                      menu: (provided) => ({ ...provided, zIndex: 9999 })
                    }}
                    className="select-container"
                    isDisabled={!selectedCategory}
                  />
                  <Select
                    placeholder="Select Brand"
                    isMulti
                    options={brandOptions}
                    value={selectedBrand}
                    onChange={setSelectedBrand}
                    styles={{
                      container: (provided) => ({ ...provided, width: '15%', marginBottom: '10px' }),
                      menu: (provided) => ({ ...provided, zIndex: 9999 })
                    }}
                    className="select-container"
                  />
                  <Select
                    placeholder="Select Color"
                    isMulti
                    options={colorOptions}
                    value={selectedColor}
                    onChange={setSelectedColor}
                    styles={{
                      container: (provided) => ({ ...provided, width: '15%', marginBottom: '10px' }),
                      menu: (provided) => ({ ...provided, zIndex: 9999 })
                    }}
                    className="select-container"
                  />
                  <Select
                    placeholder="Select Size"
                    options={sizeOptions}
                    value={selectedSize}
                    onChange={setSelectedSize}
                    styles={{
                      container: (provided) => ({ ...provided, width: '15%', marginBottom: '10px' }),
                      menu: (provided) => ({ ...provided, zIndex: 9999 })
                    }}
                    className="select-container"
                  />
                  <Select
                    placeholder="Select Price Range"
                    options={priceRangeOptions}
                    value={selectedPriceRange}
                    onChange={setSelectedPriceRange}
                    styles={{
                      container: (provided) => ({ ...provided, width: '15%', marginBottom: '10px' }),
                      menu: (provided) => ({ ...provided, zIndex: 9999 })
                    }}
                    className="select-container"
                  />
                </div>
                <div className="clearfix"></div>
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
                        {loading ? ( // Show react-spinner while fetching data
                          <TableRow>
                            <TableCell colSpan={columns.length} align="center">
                              <ClipLoader color="#67c7ff" loading={loading} size={50} />
                            </TableCell>
                          </TableRow>
                        ) : (
                          products[page]?.map((product) => {
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
                                        <Link to={value} target="_blank">Go to product</Link>
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
                          })
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                  <Button onClick={loadPreviousPage} startIcon={<SkipPreviousIcon />} disabled={page === 1}>
                    {``}
                  </Button>
                  <input
                    type="number"
                    value={page}
                    onChange={handlePageInputChange}
                    style={{ width: '50px', textAlign: 'center', margin: '0 10px' }}
                  />
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
