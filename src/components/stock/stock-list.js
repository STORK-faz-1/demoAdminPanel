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
const StokList = () => {
	
		const [page, setPage] = React.useState(0);
		const [rowsPerPage, setRowsPerPage] = React.useState(10);
	  
		const handleChangePage = (event, newPage) => {
		  setPage(newPage);
		};
	  
		const handleChangeRowsPerPage = (event) => {
		  setRowsPerPage(+event.target.value);
		  setPage(0);
		};
			
	return (
		<Fragment>
			<Breadcrumb title="Stok Listesi" parent="Stok" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Stok Listesi </h5>
							</CardHeader>
							<CardBody>
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

export default StokList;
