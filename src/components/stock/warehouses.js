import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../common/breadcrumb";
import { Card, CardBody, Col, Container, Row, } from "reactstrap";

import MUIDataTable from "mui-datatables";
import axios from "axios"; 

const Warehouses = () => {
    const columns = ["Depo Adı", "Adres", "Şehir", "İlçe"];
    const [warehouseData, setWarehouseData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("/api/warehouses/getAll", {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhcnUxMWtAZ21haWwuY29tIiwiZXhwIjoxNzExMjEzMDc5LCJpZCI6IjdjZWIyMTEyLTY0OTktNGQ1MC05N2NjLTkzN2I4YTk5YjdlZSIsInJvbGUiOiJhZG1pbiJ9.IPyUut8rGE_NjdvGrjcgEPPrJZ6hXBTkGludYQwPscA"
                }
            });
            const transformedData = result.data.map(item => {
                return [item.name, item.address, item.city, item.district];
            });
            setWarehouseData(transformedData);
        };
        fetchData();
    }, []);
    
    const options = {
        filterType: 'checkbox',
    };

  return (
    <Fragment>
      <Breadcrumb title="Depolar" parent="Stok" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
              <MUIDataTable
             title={"Depo Listesi"}
             data={warehouseData}
             columns={columns}
             options={options}
             />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Warehouses;
