import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
const columns = [
	{ id: 'date', label: 'Tarih', minWidth: 170 },
	{ id: 'sourceWarehouse', label: 'Kaynak Depo', minWidth: 170 },
	{ id: 'targetWarehouse', label: 'Hedef Depo', minWidth: 170 },
	{ id: 'explanation', label: 'Açıklama', minWidth: 170 },
	
  ];
  
  function createData(date, sourceWarehouse, targetWarehouse, explanation) {
	return { date, sourceWarehouse, targetWarehouse, explanation };
  }
  
  const rows = [
	createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
	createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
  createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
	createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
  createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
	createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
  createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
	createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
  createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
	createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
  createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
	createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
  createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
	createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
  createData('21/12/2023', 'Depo 1', 'Depo 2', 'Ürünlerin Aktarımı'),
  ];
const WarehouseMoves = () => {
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
    
	return (
		<Fragment>
			<Breadcrumb title="Depo Hareketi" parent="Stok" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Depo Hareketi </h5>
							</CardHeader>
							<CardBody>
              <Button onClick={handleClickOpen} variant="contained" endIcon={<ArrowForwardIosIcon />} size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1,  
      backgroundColor: '#67c7ff', 
      color: '#fff', 
      '&:hover': {
        backgroundColor: '#5baad9', 
      },
    }}>
   Yeni Transfer Oluştur
  </Button>
  <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='md'>
  <DialogTitle>Yeni Transfer Oluştur</DialogTitle>
  <DialogContent>
    {/* <DialogContentText>
      Yeni depo bilgilerini aşağıya giriniz.
    </DialogContentText> */}
    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <TextField
        autoFocus
        margin="dense"
        id="depo-adi"
        label="Açıklama"
        type="text"
        fullWidth
        variant="outlined"
      />
      <TextField
        autoFocus
        margin="dense"
        id="depo-adi"
        label="Kaynak Depo"
        type="text"
        fullWidth
        variant="outlined"
      />
      <TextField
        autoFocus
        margin="dense"
        id="depo-adi"
        label="Teslim Eden"
        type="text"
        fullWidth
        variant="outlined"
      />
     <TextField
        autoFocus
        margin="dense"
        id="depo-adi"
        label="Hedef Depo"
        type="text"
        fullWidth
        variant="outlined"
      />
      <TextField
        autoFocus
        margin="dense"
        id="depo-adi"
        label="Teslim Alan"
        type="text"
        fullWidth
        variant="outlined"
      />
       <TextField
          label="Düzenleme Tarihi"
          type="date"
          defaultValue="2024-02-29"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        <TextField
          label="Fiili Sevk Tarihi"
          type="date"
          defaultValue="2024-02-29"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        <TextField
          label="Fiili Sevk Saati"
          type="time"
          defaultValue="13:09"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          margin="dense"
          id="ilce"
          label="Ürün"
          type="text"
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="il"
          label="Miktar"
          type="text"
          variant="outlined"
        />
      </div>
    </form>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Vazgeç</Button>
    <Button onClick={handleClose}>Kaydet</Button>
  </DialogActions>
</Dialog>
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
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default WarehouseMoves;
