import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../components/app'
import Datatable from '../components/common/datatable'
import Createcoupons from '../components/coupons/create-coupons'
import ListCoupons from '../components/coupons/list-coupons'
import Dashboard from '../components/dashboard'
import Invoice from '../components/invoice'
import Rates from '../components/localization/rates'
import StockList from '../components/stock/stock-list'
import StockHome from '../components/stock/home'
import NewStock from '../components/stock/new-stock'
import WarehouseMoves from '../components/stock/warehouse-moves'
import Warehouses from '../components/stock/warehouses'
import Taxes from '../components/localization/taxes'
import Translations from '../components/localization/translations'
import Media from '../components/media/media'
import Createmenu from '../components/menus/create-menu'
import Listmenu from '../components/menus/list-menu'
import Createpage from '../components/pages/create-page'
import ListPages from '../components/pages/list-page'
import Digitaladdpro from '../components/products/digital/digital-add-pro'
import Digitalcategory from '../components/products/digital/digital-category'
import Digitalprolist from '../components/products/digital/digital-pro-list'
import Digitalsubcategory from '../components/products/digital/digital-sub-category'
import Addproduct from '../components/products/physical/add-product'
import AddProductAmazon from '../components/products/physical/add-product-amazon'
import AddMoreProducts from '../components/products/physical/add-more-products.js'
import Woman from '../components/products/physical/woman'
import Man from '../components/products/physical/man'
import MomAndChild from '../components/products/physical/momAndChild'
import Home from '../components/products/physical/home'
import ShoeAndBag from '../components/products/physical/shoeAndBag'
import Electronic from '../components/products/physical/electronic'
import SportOutdoor from '../components/products/physical/sportOutdoor.js'
import Productdetail from '../components/products/physical/product-detail'
import Productlist from '../components/products/physical/product-list'
import Subcategory from '../components/products/physical/sub-category'
import Reports from '../components/reports/report'
import Campaigns from '../components/campaigns/campaign'
import AddCampaigns from '../components/campaigns/addCampaign'
import Influencers from '../components/influencers/influencers'
import Statistics from '../components/statistics/statistic'
import Orders from '../components/sales/orders'
import Transactionsales from '../components/sales/transactions-sales'
import Profile from '../components/settings/profile'
import Createuser from '../components/users/create-user'
import Listuser from '../components/users/list-user'
import CommentsUser from '../components/users/comments-user'
import Createvendors from '../components/vendors/create.vendors'
import Listvendors from '../components/vendors/list-vendors'

const LayoutRoutes = () => {
  return (
    <Fragment>
        <Routes>
            <Route element={<App />}>
            <Route
							path={`${process.env.PUBLIC_URL}/dashboard`}
							element={<Dashboard />}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/woman`}
							element={<Woman />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/man`}
							element={<Man />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/momAndChild`}
							element={<MomAndChild />}
						/>
						
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/home`}
							element={<Home />}
						/>
				
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/shoeAndBag`}
							element={<ShoeAndBag />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/electronic`}
							element={<Electronic />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/sportOutdoor`}
							element={<SportOutdoor />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/sub-category`}
							element={<Subcategory />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/product-list`}
							element={<Productlist />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/product-detail`}
							element={<Productdetail />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/add-product`}
							element={<Addproduct />}
						/>
	                    <Route
							path={`${process.env.PUBLIC_URL}/products/physical/add-product-amazon`}
							element={<AddProductAmazon />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/add-more-products`}
							element={<AddMoreProducts />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/digital/digital-category`}
							element={<Digitalcategory />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/digital/digital-sub-category`}
							element={<Digitalsubcategory />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/digital/digital-product-list`}
							element={<Digitalprolist />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/digital/digital-add-product`}
							element={<Digitaladdpro />}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/sales/orders`}
							element={<Orders />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/sales/transactions`}
							element={<Transactionsales />}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/coupons/list-coupons`}
							element={<ListCoupons />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/coupons/create-coupons`}
							element={<Createcoupons />}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/pages/list-page`}
							element={<ListPages />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/pages/create-page`}
							element={<Createpage />}
						/>

						<Route path={`${process.env.PUBLIC_URL}/media`} element={<Media />} />

						<Route
							path={`${process.env.PUBLIC_URL}/menus/list-menu`}
							element={<Listmenu />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/menus/create-menu`}
							element={<Createmenu />}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/users/list-user`}
							element={<Listuser />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/users/comments-user`}
							element={<CommentsUser />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/users/create-user`}
							element={<Createuser />}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/vendors/list_vendors`}
							element={<Listvendors />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/vendors/create-vendors`}
							element={<Createvendors />}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/localization/transactions`}
							element={<Translations />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/localization/currency-rates`}
							element={<Rates />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/stock/stock-list`}
							element={<StockList />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/stock/home`}
							element={<StockHome />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/stock/new-stock`}
							element={<NewStock />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/stock/warehouse-moves`}
							element={<WarehouseMoves />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/stock/warehouses`}
							element={<Warehouses />}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/localization/taxes`}
							element={<Taxes />}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/reports/report`}
							element={<Reports />}
						/>

                        <Route
							path={`${process.env.PUBLIC_URL}/campaigns/campaign`}
							element={<Campaigns />}
						/>
						 <Route
							path={`${process.env.PUBLIC_URL}/campaigns/addCampaign`}
							element={<AddCampaigns />}
						/>
                        <Route
							path={`${process.env.PUBLIC_URL}/influencers/influencers`}
							element={<Influencers />}
						/>
						
						  <Route
							path={`${process.env.PUBLIC_URL}/statistics/statistic`}
							element={<Statistics />}
						/>
						<Route 
							path={`${process.env.PUBLIC_URL}/settings/profile`}
							element={<Profile />}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/invoice`}
							element={<Invoice />}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/data-table`}
							element={<Datatable />}
						/>
                </Route>
        </Routes>
    </Fragment>
    )
}

export default LayoutRoutes