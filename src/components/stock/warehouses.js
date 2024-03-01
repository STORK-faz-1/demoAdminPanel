import React, { Fragment, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import { Card, CardHeader, CardBody, Col, Container, Row, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { MapPin } from 'react-feather';
import Button from '@mui/material/Button';
import AddHomeWork from '@mui/icons-material/AddHomeWork';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

  const columns1 = [
    { id: 'productName', label: 'Ürün Adı', minWidth: 170 },
    { id: 'stockAmount', label: 'Stok Miktarı', minWidth: 170 },
    { id: 'buying', label: 'Alış', minWidth: 170 },
    { id: 'selling', label: 'Satış', minWidth: 170 },

  ];
  const rows1 = [
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
    { productName: 'red dress', stockAmount: '1324171354', buying: 328763, selling: 358263 },
  ];
  
  const columns2 = [
    { id: 'productName', label: 'Ürün Adı', minWidth: 170 },
    { id: 'operationType', label: 'İşlem Türü', minWidth: 170 },
    { id: 'customer', label: 'Müşteri', minWidth: 170 },
    { id: 'date', label: 'Tarih', minWidth: 170 },
    { id: 'amount', label: 'Miktar', minWidth: 170 },
  ];
  
  const rows2 = [
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
    { productName: 'Skirt', operationType: 'Başarılı Sipariş', customer: 'B. Ayaz', date: '2022-01-01', amount: 2 },
  ];
const Warehouses = () => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const [activeTab1, setActiveTab1] = useState('1');
  const [activeTab2, setActiveTab2] = useState('1');
  const [activeTab3, setActiveTab3] = useState('3');
  const [activeTab4, setActiveTab4] = useState('3');

  const toggleTab1 = tab => {
    if(activeTab1 !== tab) setActiveTab1(tab);
  }
  const toggleTab2 = tab => {
    if(activeTab2 !== tab) setActiveTab2(tab);
  }
  const toggleTab3 = tab => {
    if(activeTab3 !== tab) setActiveTab3(tab);
  }
  const toggleTab4 = tab => {
    if(activeTab4 !== tab) setActiveTab4(tab);
  }

  return (
    <Fragment>
      <Breadcrumb title="Depolar" parent="Stok" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
              <Button onClick={handleClickOpen} variant="contained" endIcon={<AddHomeWork />} size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1,  
      backgroundColor: '#67c7ff', 
      color: '#fff', 
      '&:hover': {
        backgroundColor: '#5baad9', 
      },
    }}>
    Depo Ekle
  </Button>
  <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='md'>
  <DialogTitle>Yeni Depo Ekle</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Yeni depo bilgilerini aşağıya giriniz.
    </DialogContentText>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <TextField
        autoFocus
        margin="dense"
        id="depo-adi"
        label="Depo Adı"
        type="text"
        fullWidth
        variant="outlined"
      />
      <TextField
        margin="dense"
        id="acik-adres"
        label="Açık Adres"
        type="text"
        fullWidth
        multiline
        rows={4}
        variant="outlined"
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          margin="dense"
          id="ilce"
          label="İlçe"
          type="text"
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="il"
          label="İl"
          type="text"
          variant="outlined"
        />
      </div>
    </form>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>İptal</Button>
    <Button onClick={handleClose}>Ekle</Button>
  </DialogActions>
</Dialog>


                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <MapPin size={20} color="#67c7ff" style={{ marginRight: '8px'}} />
                      Depo 1

                    </AccordionSummary>
                     
                    <AccordionDetails>
                    <p size={20} color="#67c7ff" style={{ marginRight: '8px'}} >Adres - Fatih</p>
                      <div>
                        <Nav tabs>
                          <NavItem>
                            <NavLink
                              className={activeTab1 === '1' ? "active" : ""}
                              onClick={() => toggleTab1('1')}
                            >
                              Ürünler
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={activeTab1 === '2' ? "active" : ""}
                              onClick={() => toggleTab1('2')}
                            >
                              Stok Geçmişi
                            </NavLink>
                          </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab1}>
                          <TabPane tabId="1">
                            <Row>
                              <Col sm="12">
                 
                              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns1.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns1.map((column) => {
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
        count={rows1.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId="2">
                            <Row>
                            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns2.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns2.map((column) => {
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
        count={rows2.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

                            </Row>
                          </TabPane>
                        </TabContent>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <MapPin size={20} color="#67c7ff" style={{ marginRight: '8px'}} />
                      Depo 2
                    </AccordionSummary>
                    <AccordionDetails>
                    <p size={20} color="#67c7ff" style={{ marginRight: '8px'}} >Adres - Fatih</p>
                    <div>
                        <Nav tabs>
                          <NavItem>
                            <NavLink
                              className={activeTab3 === '3' ? "active" : ""}
                              onClick={() => toggleTab3('3')}
                            >
                              Ürünler
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={activeTab3 === '4' ? "active" : ""}
                              onClick={() => toggleTab3('4')}
                            >
                              Stok Geçmişi
                            </NavLink>
                          </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab3}>
                          <TabPane tabId="3">
                            <Row>
                              <Col sm="12">
                              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns1.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns1.map((column) => {
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
        count={rows1.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId="4">
                            <Row>
                            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns2.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns2.map((column) => {
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
        count={rows2.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

                            </Row>
                          </TabPane>
                        </TabContent>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Warehouses;
