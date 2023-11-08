import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/orders";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row, ButtonGroup, Button, DropdownItem, DropdownMenu, UncontrolledDropdown, DropdownToggle, Input, FormGroup} from "reactstrap";

const Orders = () => {
	return (
		<Fragment>
			<Breadcrumb title="Siparişler" parent="Satışlar" />

			<Container fluid={true}>
      <Col lg="4">
			<Row>
					<FormGroup row>
	
            <Col xl="6 xl-100">
              <Input
                id="exampleSelect"
                name="select"
                type="select"
            size={"sm"}
              >
            <option>
                İngiltere
                </option>
                <option>
                  Kanada
                </option>
                <option>
                  Meksika
                </option>
              </Input>
            </Col>
      
          </FormGroup>
		  </Row>
        </Col>
				<Row>
					<Col sm="12">
						<Card>
							{/* <CardHeader>
								<h5>Sipariş Yönetimi</h5>
							</CardHeader> */}
							<CardBody className="order-datatable">
							<div>
  <Button
    // color="primary"
    color="info"
    outline
	size="sm"
  >
    Tümü
  </Button>
  {' '}
  <Button outline size="sm"   color="info">
    Sold
  </Button>
  {' '}
  <Button
    // color="success"
    color="info"
    outline
	size="sm"
  >
    Placed
  </Button>
  {' '}
  <Button
     color="info"
    outline
	size="sm"
  >
    Confirmed
  </Button>
  {' '}
  <Button
    // color="warning"
    color="info"
    outline
	size="sm"
  >
    PreConfirmed
  </Button>
  {' '}

  <ButtonGroup>
    <UncontrolledDropdown>
      <DropdownToggle
      //  caret color="primary"
      caret color="info"
    outline
	size="sm">
	  Daha Fazla Seçenek
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          Delivered
        </DropdownItem>
		<DropdownItem>
          Shipped
        </DropdownItem>
		<DropdownItem>
          Canceled
        </DropdownItem>
		<DropdownItem>
          Return Requested
        </DropdownItem>
		<DropdownItem>
          Return Completed
        </DropdownItem>
		<DropdownItem>
          Refunded
        </DropdownItem>
		<DropdownItem>
          SRHouseOrders
        </DropdownItem>
		<DropdownItem>
          ManuelFulfillment
        </DropdownItem>
		<DropdownItem>
          ReturningToSeller
        </DropdownItem>
		<DropdownItem>
          NotDeliveredOnTime
        </DropdownItem>
		<DropdownItem>
          PackageMayBeLost
        </DropdownItem>
		<DropdownItem>
          CheckDeliveryInfo
        </DropdownItem>
		<DropdownItem>
          LateShipment
        </DropdownItem>
		<DropdownItem>
          ManuelTracking
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </ButtonGroup>
</div>
<hr/>
								<Datatable
									multiSelectOption={false}
									myData={data}
									pageSize={10}
									pagination={true}
									class="-striped -highlight"
								/>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Orders;
