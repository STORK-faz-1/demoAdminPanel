import React, { Fragment, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import { Card, CardBody, CardHeader, Col, Container, Row, Media, Form, FormGroup, Label, Input } from "reactstrap";
import {
    Briefcase
} from "react-feather";
import Button from '@mui/material/Button';
import Table from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import RepeatIcon from '@mui/icons-material/Repeat';
import ListIcon from '@mui/icons-material/List';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Modal, ModalHeader, ModalBody, ModalFooter, Nav, NavItem, NavLink, TabContent, TabPane, CardText, CardTitle } from 'reactstrap';
const Home = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [activeTab, setActiveTab] = useState('1');

  // Tab değiştirme fonksiyonu
  const toggleTab = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
	return (
		<Fragment>
			<Breadcrumb title="Stok Yönetim" parent="Stok" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Hızlı İşlemler </h5>
							</CardHeader>
							<CardBody>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="center">
  <Button onClick={toggle} variant="contained" endIcon={<ArrowCircleDownIcon />} size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      backgroundColor: '#6dce7a', 
      color: '#fff', 
      '&:hover': {
        backgroundColor: '#5cae67', 
      },
    }}>
    Stok Giriş
  </Button>
  <Modal isOpen={modal} toggle={toggle} size="xl" {...args}>
      <ModalHeader toggle={toggle}>Stok Fişi - Giriş</ModalHeader>
      <ModalBody>
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={activeTab === '1' ? "active" : ""}
                onClick={() => toggleTab('1')}
              >
                Genel Bilgiler
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === '2' ? "active" : ""}
                onClick={() => toggleTab('2')}
              >
                Detay Bilgiler
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === '3' ? "active" : ""}
                onClick={() => toggleTab('3')}
              >
                Resim
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === '4' ? "active" : ""}
                onClick={() => toggleTab('4')}
              >
                Siparişler
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                <Form>
    <FormGroup row>
      <Label for="evrakTarihi" sm={2}>Evrak Tarihi :</Label>
      <Col sm={2}>
        <Input type="date" name="date" id="evrakTarihi" placeholder="Evrak Tarihi seçiniz" />
      </Col>
      <Col sm={2}>
        <Input type="time" name="time" id="evrakSaati" placeholder="Saat" />
      </Col>
      <Label for="depo" sm={2}>Depo :</Label>
      <Col sm={4}>
        <Input type="select" name="depo" id="depo">
        </Input>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="evrakNo" sm={2}>Evrak No :</Label>
      <Col sm={4}>
        <Input type="text" name="evrakNo" id="evrakNo" placeholder="Evrak Numarasını giriniz" />
      </Col>
      <Label for="teslimEden" sm={2}>Teslim Eden :</Label>
      <Col sm={4}>
        <Input type="select" name="teslimEden" id="teslimEden">
        </Input>
      </Col>
    </FormGroup>
    <FormGroup row>
    <Label for="aciklama" sm={2}>Açıklama :</Label>
      <Col sm={4}>
        <Input type="textarea" name="aciklama" id="aciklama" />
      </Col>
      <Label for="teslimAlan" sm={2}>Teslim Alan :</Label>
      <Col sm={4}>
        <Input type="select" name="teslimAlan" id="teslimAlan">
          {/* Teslim alan seçeneklerinizi buraya ekleyin */}
        </Input>
      </Col>
    </FormGroup>
    <FormGroup row>
    <Label for="aciklama" sm={2}>Sarf Yeri :</Label>
      <Col sm={8}>
        <Input type="select" name="teslimAlan" id="teslimAlan" />
      </Col>
     
    </FormGroup>
   
  </Form>
  
                </Col>
              </Row>
              <div className="d-flex justify-content-start">
  <Button size="small" sx={{ fontSize: '0.60rem', mx: 1, my: 1, backgroundColor: '#67c7ff', color: '#fff', '&:hover': { backgroundColor: '#5baad9' } }}>
    Barkod Ekle
  </Button>
  <Button size="small" sx={{ fontSize: '0.60rem', mx: 1, my: 1, backgroundColor: '#67c7ff', color: '#fff', '&:hover': { backgroundColor: '#5baad9' } }}>
    Barkod Okut
  </Button>
  <Button size="small" sx={{ fontSize: '0.60rem', mx: 1, my: 1, backgroundColor: '#67c7ff', color: '#fff', '&:hover': { backgroundColor: '#5baad9' } }}>
    Ürün Sil
  </Button>
  <Button size="small" sx={{ fontSize: '0.60rem', mx: 1, my: 1, backgroundColor: '#67c7ff', color: '#fff', '&:hover': { backgroundColor: '#5baad9' } }}>
    Stok Kartı
  </Button>
  <Button size="small" sx={{ fontSize: '0.60rem', mx: 1, my: 1, backgroundColor: '#67c7ff', color: '#fff', '&:hover': { backgroundColor: '#5baad9' } }}>
    Depo Durum
  </Button>
  <Button size="small" sx={{ fontSize: '0.60rem', mx: 1, my: 1, backgroundColor: '#67c7ff', color: '#fff', '&:hover': { backgroundColor: '#5baad9' } }}>
    Excel'den Aktar
  </Button>
  <Button size="small" sx={{ fontSize: '0.60rem', mx: 1, my: 1, backgroundColor: '#67c7ff', color: '#fff', '&:hover': { backgroundColor: '#5baad9' } }}>
    Paket Ekle
  </Button>
</div>

            </TabPane>
            <TabPane tabId="2">

              <Row>
    <Col sm="6">
      <Form>
        <FormGroup>
          <Label for="ozelAlan1">Özel Alan 1 :</Label>
          <Input type="text" name="ozelAlan1" id="ozelAlan1" />
        </FormGroup>
        <FormGroup>
          <Label for="ozelAlan2">Özel Alan 2 :</Label>
          <Input type="text" name="ozelAlan2" id="ozelAlan2" />
        </FormGroup>
        <FormGroup>
          <Label for="ozelAlan3">Özel Alan 3 :</Label>
          <Input type="text" name="ozelAlan3" id="ozelAlan3" />
        </FormGroup>
        <FormGroup>
          <Label for="gonderimTarihi">Gönderim Tarihi :</Label>
          <Input type="date" name="gonderimTarihi" id="gonderimTarihi" />
        </FormGroup>
        <FormGroup>
          <Label for="teslimTarihi">Teslim Tarihi :</Label>
          <Input type="date" name="teslimTarihi" id="teslimTarihi" />
        </FormGroup>
        <FormGroup>
          <Label for="teslimSekli">Teslim Şekli :</Label>
          <Input type="text" name="teslimSekli" id="teslimSekli" />
        </FormGroup>
        <FormGroup>
          <Label for="teslimYeri">Teslim Yeri :</Label>
          <Input type="text" name="teslimYeri" id="teslimYeri" />
        </FormGroup>
      
      </Form>
    </Col>
    <Col sm="6">
      <Form>
        <FormGroup>
          <Label for="kargoTakipNo">Kargo Takip No :</Label>
          <Input type="text" name="kargoTakipNo" id="kargoTakipNo" />
        </FormGroup>
        <FormGroup>
          <Label for="aracPlakasi">Araç Plakası :</Label>
          <Input type="text" name="aracPlakasi" id="aracPlakasi" />
        </FormGroup>
        <FormGroup>
          <Label for="soforAdi">Şoför Adı :</Label>
          <Input type="text" name="soforAdi" id="soforAdi" />
        </FormGroup>
        <FormGroup>
          <Label for="tasiyiciFirma">Taşıyıcı Firma :</Label>
          <Input type="text" name="tasiyiciFirma" id="tasiyiciFirma" />
        </FormGroup>
        <FormGroup>
          <Label for="projeAdi">Proje Adı :</Label>
          <Input type="text" name="projeAdi" id="projeAdi" />
        </FormGroup>
        <FormGroup>
          <Label for="notlar">Notlar :</Label>
          <Input type="textarea" name="notlar" id="notlar" />
        </FormGroup>
      </Form>
    </Col>
  </Row>
        
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="6">
                  {/* Resim içeriği */}
                </Col>
              </Row>
            </TabPane><TabPane tabId="3">
  <Row>
    <Col sm="12">
      <div className="d-flex justify-content-left mb-1">
      <Button variant="contained" size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      ml: 1, 
      backgroundColor: '#6dce7a', 
      color: '#fff', 
      '&:hover': {
        backgroundColor: '#5cae67', 
      },
    }}>
  Resim Ekle
  </Button>
  <Button variant="contained"size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      ml: 1, 
      backgroundColor: '#6dce7a', 
      color: '#fff', 
      '&:hover': {
        backgroundColor: '#5cae67', 
      },
    }}>
Resim Sil
  </Button>
  <Button variant="contained" size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      ml: 1, 
      backgroundColor: '#6dce7a', 
      color: '#fff', 
      '&:hover': {
        backgroundColor: '#5cae67', 
      },
    }}>
Göster
  </Button>
  <Button variant="contained" size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      ml: 1, 
      backgroundColor: '#6dce7a', 
      color: '#fff', 
      '&:hover': {
        backgroundColor: '#5cae67', 
      },
    }}>
İndir
  </Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Dosya Adı</th>
          </tr>
        </thead>
        <tbody>
          {/* Burada resim dosyalarınızın listesi olacak */}
        </tbody>
      </Table>
    </Col>
  </Row>
</TabPane>
            <TabPane tabId="4">
              <Row>
                <Col sm="6">
                  {/* Siparişler içeriği */}
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
         Kaydet 
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          İptal
        </Button>
      </ModalFooter>
    </Modal>
  <Button variant="contained" endIcon={<ArrowCircleUpIcon />} size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      backgroundColor: '#ff6a50',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#d95c47',
      },
    }}>
    Stok Çıkış
  </Button>
  <Button variant="contained" endIcon={<RepeatIcon />} size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      backgroundColor: '#9e80f7',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#846bcd', 
      },
    }}>
    Depo Transfer Fişi
  </Button>
  <Button variant="contained" endIcon={<ListIcon />} size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      backgroundColor: '#67c7ff', 
      color: '#fff',
      '&:hover': {
        backgroundColor: '#5baad9', 
      },
    }}>
    Stok Listesi
  </Button>
  <Button variant="contained" endIcon={<ReceiptLongIcon />} size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      backgroundColor: '#67c7ff', 
      color: '#fff', 
      '&:hover': {
        backgroundColor: '#5baad9', 
      },
    }}>
    Stok Fiş Listesi
  </Button>
  <Button variant="contained" endIcon={<ManageSearchIcon />} size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      backgroundColor: '#ffa844', 
      color: '#fff',
      '&:hover': {
        backgroundColor: '#de913a', 
      },
    }}>
    Stok Durum Listesi
  </Button>
  <Button variant="contained" endIcon={<ManageSearchIcon />} size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      backgroundColor: '#ffa844',
      color: '#fff', 
      '&:hover': {
        backgroundColor: '#de913a',
      },
    }}>
    Depo Transfer Raporu
  </Button>
  <Button variant="contained" endIcon={<ManageSearchIcon />} size="small"  sx={{ 
      fontSize: '0.60rem', 
      my: 1, 
      backgroundColor: '#ffa844', 
      color: '#fff',
      '&:hover': {
        backgroundColor: '#de913a',
      },
    }}>
    Depo-Stok Raporu
  </Button>
</Stack>

							</CardBody>
						</Card>
					</Col>
				</Row>
                <Row>
                    		
					<Col xl="4 xl-100">
						<Card className="height-equal">
							<CardHeader>
								<h4>Stok Kart Sayısı</h4>
							</CardHeader>
							<CardBody>
								<Media>
									<Media body>
										<h4 className="mb-0">400</h4>
									</Media>
								</Media>
							</CardBody>
								
						</Card>
					</Col>
					<Col xl="4 xl-100">
						<Card className="height-equal">
							<CardHeader>
								<h4>Depo Sayısı</h4>
							</CardHeader>
							<CardBody>
								<Media>
									<Media body>
										<h4 className="mb-0">6</h4>
									</Media>
								</Media>
							</CardBody>
								
						</Card>
					</Col>
                    <Col xl="4 xl-100">
						<Card className="height-equal">
							<CardHeader>
								<h4>Bügünkü İşlem Sayısı</h4>
							</CardHeader>
              <CardBody>
								<Media>
									<Media body>
										<h4 className="mb-0">0</h4>
									</Media>
								</Media>
							</CardBody>
						</Card>
					</Col>
                </Row>
			</Container>
		</Fragment>
	);
};

export default Home;
