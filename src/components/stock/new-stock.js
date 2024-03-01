import Breadcrumb from "../common/breadcrumb";
import React, { Fragment, useState } from "react";
import { Camera } from 'react-feather';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Visibility from '@mui/icons-material/Visibility';
import Print from '@mui/icons-material/Print';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import {
	Card,
	CardBody,
	Col,
	Container,
	Nav,
	NavItem,
	NavLink,
	TabContent,
	Row,
	TabPane,
	Input,
	
} from "reactstrap";
import user from "../../assets/images/user.png";

const NewStock = (args) => {

	const [activeTab, setActiveTab] = useState('1');
	const [skuPrefix, setSkuPrefix] = useState('');
	const [value, setValue] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [file, setFile] = useState();
	const [dummyimgs, setDummyimgs] = useState([
		{ img: user },
		{ img: user },
		{ img: user },
		{ img: user },
		{ img: user },
		{ img: user },
	]);

	const handleSkuPrefixChange = (e) => {
		const value = e.target.value.toUpperCase();
		setSkuPrefix(value);
	}

	const onChange = (e) => {
		setValue(e)
	}

	const IncrementItem = () => {
		if (quantity < 9) {
			setQuantity(quantity + 1);
		} else {
			return null;
		}
	};

	const DecreaseItem = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		} else {
			return null;
		}
	};
    const [unit, setUnit] = React.useState('');

	const handleChange = (event) => {
		setQuantity(event.target.value);
        setUnit(event.target.value);
	};

	const _handleImgChange = (e, i) => {
		e.preventDefault();
		let reader = new FileReader();
		const image = e.target.files[0];
		reader.onload = () => {
			dummyimgs[i].img = reader.result;
			setFile({ file: file });
			setDummyimgs(dummyimgs);
		};
		reader.readAsDataURL(image);
	};

	const handleTabToggle = (tab) => {
		if (activeTab !== tab) {
			setActiveTab(tab);
		}
	}

	const handleValidSubmit = () => { };
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const columns = [
	{ id: 'depo', label: 'Depo', minWidth: 170 },
	{ id: 'stokCode', label: 'Stok Kodu', minWidth: 170 },
	{ id: 'billNo', label: 'Fatura No', minWidth: 170 },
	{ id: 'barcodeNo', label: 'Barkod No', minWidth: 170 },
	{ id: 'boxBarcodeNo', label: 'Koli Barkod No', minWidth: 170 },
	{ id: 'cargo', label: 'Kargo Şube', minWidth: 170 },
	{ id: 'duty', label: 'Gümrük', minWidth: 170 },
	{ id: 'plate', label: 'Şoför Plaka', minWidth: 170 },
	
	{
	  id: 'istikamet',
	  label: 'İstikamet',
	  minWidth: 170,
	},
	{
	  id: 'exitDate',
	  label: 'Çıkış Tarihi',
	  minWidth: 170,
	},
	{
	  id: 'deliveryDate',
	  label: 'Teslim Tarihi',
	  minWidth: 170,
	},
	{ id: 'completingRate', label: 'Tamamlanma Oranı', minWidth: 170 },
	{ id: 'explanation', label: 'Açıklama', minWidth: 170 },
  ];
  
  function createData(depo, stokCode, billNo, barcodeNo, boxBarcodeNo, cargo, duty, plate, istikamet, exitDate, deliveryDate, completingRate, explanation) {
	return { depo, stokCode, billNo, barcodeNo, boxBarcodeNo, cargo, duty, plate, istikamet, exitDate, deliveryDate, completingRate, explanation };
  }
  
  const rows = [
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),
	createData('Depo 1', 1324171354, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263, 3287263),

  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
	setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
	setRowsPerPage(+event.target.value);
	setPage(0);
  };
  const data = [];

	return (
		<Fragment>
			<Breadcrumb title="Stok Kartı" parent="Stok" />

			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardBody>
								<div>
									<Nav tabs>
										<NavItem>
											<NavLink
												className={activeTab === '1' ? 'active' : ''}
												onClick={() => handleTabToggle('1')}
											>
												Hareketler
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={activeTab === '2' ? 'active' : ''}
												onClick={() => handleTabToggle('2')}
											>
												Fotoğraflar
											</NavLink>
										</NavItem>
                                        <NavItem>
											<NavLink
												className={activeTab === '3' ? 'active' : ''}
												onClick={() => handleTabToggle('3')}
											>
												Barkod-Lot
											</NavLink>
										</NavItem>
                                        <NavItem>
											<NavLink
												className={activeTab === '4' ? 'active' : ''}
												onClick={() => handleTabToggle('4')}
											>
												Detaylar
											</NavLink>
										</NavItem>
									</Nav>
									<TabContent activeTab={activeTab}>
										<TabPane tabId="1">
											<hr/>
							<Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" size="medium">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                     <TableCell
					 key={column.id}
					 align={column.align}
					 style={{ minWidth: column.minWidth }}
					 sx={{ backgroundColor: '#67c7ff', color: '#fff', fontWeight: 'bold' }}
				   >
					 {column.label}
				   </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
							
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
						
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
		labelRowsPerPage=""
      />
    </Paper>
										</TabPane>
										<TabPane tabId="2">
  <Row>
    <Col sm="12">
      <Card>
        <CardBody>
		
									
          <div className="upload-container" style={{ textAlign: 'center', padding: '20px', border: '1px dashed #A9A9A9', borderRadius: '5px', cursor: 'pointer' }}>
            <Camera size={50} color="#A9A9A9" />
            <br></br>
            <Button color="primary" size="sm" onClick={() => document.getElementById('fileUpload').click()}>Fotoğraf Ekle</Button>
            <Input type="file" name="file" id="fileUpload" style={{ display: 'none' }} onChange={_handleImgChange} />
          </div>
        </CardBody>
      </Card>
    </Col>
  </Row>
</TabPane>
                                        <TabPane tabId="3">
											
                                        <Row>
    <Col sm="12">
      <Card>
        <CardBody>
    <h6>Barkodlar</h6>
  <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
      <InputLabel id="demo-select-small-label">Birim</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={unit}
        label="Birim"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Seç..</em>
        </MenuItem>
        <MenuItem value={10}>Adet</MenuItem>
        <MenuItem value={20}>Paket</MenuItem>
        <MenuItem value={30}>Koli</MenuItem>
      </Select>
    </FormControl>
    <TextField sx={{ m: 1, minWidth: 300 }} size="small" id="outlined-basic" label="Barkod No" variant="outlined" />
    <br></br>
    <Button onClick={toggle} variant="contained" endIcon={<Print />} size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      ml: 2,
      backgroundColor: '#67c7ff',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#5baad9',
      },
    }}>
    Barkod Etiket Yazdır
  </Button>
  <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Şablon Listesi</ModalHeader>
        <ModalBody>
        <Container>
    <Row className="align-items-center">
      <Col md="8">ETIKET-1</Col>
      <Col md="4" className="text-right">
      <IconButton aria-label="gör">
        <Visibility />
      </IconButton>
      <IconButton aria-label="sil">
        <DeleteRoundedIcon />
      </IconButton>
      </Col>
    </Row>
    <hr />
    <Row className="align-items-center">
      <Col md="8">ETIKET-2</Col>
      <Col md="4" className="text-right">
      <IconButton aria-label="gör">
        <Visibility />
      </IconButton>
      <IconButton aria-label="sil">
        <DeleteRoundedIcon />
      </IconButton>
      </Col>
    </Row>
    <hr />
    <Row className="align-items-center">
      <Col md="8">ETIKET-3</Col>
      <Col md="4" className="text-right">
      <IconButton aria-label="gör">
        <Visibility />
      </IconButton>
      <IconButton aria-label="sil">
        <DeleteRoundedIcon />
      </IconButton>
      </Col>
    </Row>
  </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Yeni Şablon
          </Button>
      
        </ModalFooter>
      </Modal>
 
        </CardBody>
      </Card>
    </Col>
  </Row>
										</TabPane>
                   <TabPane tabId="4">
				   <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <TextField
        autoFocus
        margin="dense"
        id="gtip-no"
        label="Gtip No"
        type="text"
        fullWidth
        variant="outlined"
      />
      <TextField
        autoFocus
        margin="dense"
        id="raf-no"
        label="Raf No"
        type="text"
        fullWidth
        variant="outlined"
      />
    </form>
	<Typography variant="h6" component="div" style={{ padding: '20px' }}>
        Ölçüler
      </Typography>
	<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Birim</TableCell>
            <TableCell align="right">Net Ağırlık</TableCell>
            <TableCell align="right">Brüt Ağırlık</TableCell>
            <TableCell align="right">Net Hacim</TableCell>
            <TableCell align="right">Brüt Hacim</TableCell>
            <TableCell align="right">En</TableCell>
            <TableCell align="right">Boy</TableCell>
            <TableCell align="right">Yükseklik</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} align="center">Veri yok</TableCell>
            </TableRow>
          ) : (
            data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.birim}</TableCell>
                <TableCell align="right">{row.netAgirlik}</TableCell>
                <TableCell align="right">{row.brutAgirlik}</TableCell>
                <TableCell align="right">{row.netHacim}</TableCell>
                <TableCell align="right">{row.brutHacim}</TableCell>
                <TableCell align="right">{row.en}</TableCell>
                <TableCell align="right">{row.boy}</TableCell>
                <TableCell align="right">{row.yukseklik}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
										</TabPane>
									</TabContent>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default NewStock;
