import React, { useState, Fragment, useEffect, useMemo, useCallback } from "react";
import Breadcrumb from "../../common/breadcrumb";
import Select from 'react-select';
import {
	Card,
	CardBody,
	Col,
	Container,
	FormGroup,
	Row,
  Button
} from "reactstrap";
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

const Category = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [token, setToken] = useState('');
  const storeOptions = [
		{ value: 'England', label: 'İngiltere' },
		{ value: 'Canada', label: 'Kanada' },
		{ value: 'Mexican', label: 'Meksika' },
		
	  ];
  const URL = "http://194.116.236.60:9069/api/v1";

  const generateToken = async () => {
    const url = `${URL}/generate-token`;
    const payload = {
      email: 'taner.akdemir@algebransoft.com',
      password: 'Abcde123*',
    };

    try {
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
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const fetchProductsFromApi = useCallback(async (page) => {
    setLoading(true);
    try {
      const url = `${URL}/product?is_active=true&page=${page}`;
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-token': token,
        },
      });

      if (response.status === 200 && response.data.success) {

            const productsFromApi = Array.isArray(response.data.data) ? response.data.data : [];
            const productsData = productsFromApi.map((product) => {
                const colorAttribute = Array.isArray(product.attributes) 
                ? product.attributes.find(attr => attr.key === 'Renk')
                : null;
              const color = colorAttribute ? colorAttribute.value : '-';
              
            const sizes = product.productVariant
            ? product.productVariant.map(variant => variant.variantValue).join(', '): 'Size information not available'; 
            const firstImage = product.images.length > 0 ? product.images[0].image : '';
  
            return {
              name: product.name,
              platform: product.platform,
              brandName: product.platformBrandName,
              price: product.productVariant?.[0]?.price || 'Fiyat bilgisi yok',
              size: sizes,
              color: color,
              image: firstImage,
            };
          });
  
        
          setData(prevData => [...prevData, ...productsData]);
          setHasMore(productsData.length === 20); 
          setCurrentPage(page);
        } else {
          throw new Error('Products could not be fetched');
        }
      } catch (error) {
        setError(error.toString());
      }
      setLoading(false);
    }, [token, URL]);
  
    useEffect(() => {
      (async () => {
        const tokenResponse = await generateToken();
        setToken(tokenResponse);
        await fetchProductsFromApi(1);
      })();
    }, [fetchProductsFromApi]);
  
    const loadMoreProducts = () => {
        if (hasMore && !loading) {
          fetchProductsFromApi(currentPage + 1);
        }
      };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Ürün İsmi',
      },
      {
        accessorKey: 'image',
        header: 'Resim',
        Cell: ({ cell }) => {
          const imgUrl = cell.getValue();
          return imgUrl ? <img src={imgUrl} alt="Product" style={{ width: 50, height: 50 }} /> : 'No image';
        },
      },
      {
        accessorKey: 'platform',
        header: 'Platform',
      },
      {
        accessorKey: 'brandName',
        header: 'Marka',
      },
      {
        accessorKey: 'color',
        header: 'Renk',
      },
      {
        accessorKey: 'size',
        header: 'Beden',
      },
 
      {
        accessorKey: 'price',
        header: 'Fiyat',
        Cell: ({ cell }) => {
          const price = cell.getValue();
          return typeof price === 'number' ? price.toFixed(2) : 'Fiyat Bilgisi Yok';
        },
      },
      
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: { showColumnFilters: true },
    getRowId: row => row.name, 
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || 'An error occurred'}</div>;

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
    
              {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <div>
          <MaterialReactTable table={table} />
          <br></br>
          {hasMore && (
            <Button size="sm" onClick={loadMoreProducts} disabled={loading}>
              Daha Fazla Ürün Yükle
            </Button>
          )}
        </div>
      )}
      </CardBody>
      </Card>
					</Col>
				</Row>
     
		</Container>
		</Fragment>
	);
};


export default Category;
