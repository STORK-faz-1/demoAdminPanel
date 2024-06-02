import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    Heart,
    AlignLeft,
    Layers,
    PieChart,
    Gift,
    Film,
    UserPlus,
    Users,
    Chrome,
    Paperclip,
    BarChart,Settings,Archive, LogIn, Activity, Book, PlusCircle, UploadCloud, FilePlus, Package, FileText
} from 'react-feather';

export const MENUITEMS = [
    {
        path: '/dashboard', title: 'Home', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Products', icon: Box, type: 'sub', active: false, children: [
            // {
            //     title: 'Kadın', type: 'sub', active: false, children: [
            //         { path: '/products/physical/category', title: 'Tüm Ürünler', type: 'link' },
            //          { path: '/products/physical/sub-category', title: 'Sub Category', type: 'link' },
            //          { path: '/products/physical/product-list', title: 'Product List', type: 'link' },
            //          { path: '/products/physical/product-detail', title: 'Product Detail', type: 'link' },
            //          { path: '/products/physical/add-product', title: 'Ürün Ekle', type: 'link' },
                
            //     ]
            // },
            { path: '/products/physical/woman', title: 'Woman', type: 'link' },
            { path: '/products/physical/man', title: 'Man', type: 'link' },
            { path: '/products/physical/momAndChild', title: 'Mom & Kids', type: 'link' },
            // { path: '/products/physical/home', title: 'Ev & Yaşam', type: 'link' },
            // { path: '/products/physical/shoeAndBag', title: 'Ayakkabı & Çanta', type: 'link' },
            // { path: '/products/physical/electronic', title: 'Elektronik', type: 'link' },
            // { path: '/products/physical/sportOutdoor', title: 'Spor & Outdoor', type: 'link' },

            // {
            //     title: 'Erkek', type: 'sub', active: false, children: [
            //     { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
            //         { path: '/products/physical/category', title: 'Tüm Ürünler', type: 'link' },
            //         { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
            //          { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
            //          { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
            //     ]
            // },
            // {
            //     title: 'Anne & Çocuk', type: 'sub', active: false, children: [
            //          { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
            //         { path: '/products/physical/category', title: 'Tüm Ürünler', type: 'link' },
            //          { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
            //          { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
            //          { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
            //     ]
            // },
            // {
            //     title: 'Ev & Mobilya', type: 'sub', active: false, children: [
            //         { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
            //          { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
            //          { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
            //          { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
            //     ]
            // },
            // {
            //     title: 'Süpermarket', type: 'sub', active: false, children: [
            //         { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
            //          { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
            //          { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
            //          { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
            //     ]
            // },
            // {
            //     title: 'Ayakkabı & Çanta', type: 'sub', active: false, children: [
            //         { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
            //          { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
            //          { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
            //          { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
            //     ]
            // },
            // {
            //     title: 'Elektronik', type: 'sub', active: false, children: [
            //         { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
            //          { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
            //          { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
            //          { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
            //     ]
            // },
            // {
            //     title: 'Spor & Outdoor', type: 'sub', active: false, children: [
            //         { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
            //          { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
            //          { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
            //          { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
            //     ]
            // },
       
        ]
    },
    {
        title: 'Add Product to Amazon', path: '/products/physical/add-product-amazon', icon: PlusCircle, type: 'link', active: false
    },
    {
        title: 'Add Products in Bulk', path: '/products/physical/add-product', icon: FilePlus, type: 'link', active: false
    },
 
    {
        title: 'Add Products', path: '/products/physical/add-more-products', icon: UploadCloud, type: 'link', active: false
    },
    {
        title: 'Sales', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/sales/orders', title: 'Orders', type: 'link' },
            { path: '/sales/transactions', title: 'Order Management', type: 'link' },
        ]
    },
    {
        title: 'Coupons', icon: Tag, type: 'sub', active: false, children: [
            { path: '/coupons/list-coupons', title: 'Coupon List', type: 'link' },
            { path: '/coupons/create-coupons', title: 'Create Coupon', type: 'link' },
        ]
    },
    // {
    //     title: 'Sayfalar', icon: Clipboard , type: 'sub', active: false, children: [
    //         { path: '/pages/list-page', title: 'Sayfa Listesi', type: 'link' },
    //         { path: '/pages/create-page', title: 'Sayfa Oluştur', type: 'link' },
    //     ]
    // },
    {
        title: 'Media', path: '/media', icon: Camera, type: 'link', active: false
    },
    // {
    //     title: 'Menüler', icon: AlignLeft, type: 'sub', active: false, children: [
    //         { path: '/menus/list-menu', title: 'Menü Listesi', type: 'link' },
    //         { path: '/menus/create-menu', title: 'Menü Oluştur', type: 'link' },
    //     ]
    // },
    {
        title: 'Users', icon: UserPlus, type: 'sub', active: false, children: [
            { path: '/users/list-user', title: 'User List', type: 'link' },
            // { path: '/users/comments-user', title: 'Kullanıcı Soruları', type: 'link' },
            // { path: '/users/create-user', title: 'Kullanıcı Oluştur', type: 'link' },
        ]
    },
    {
        title: 'Influencers', path: '/influencers/influencers', icon: Heart, type: 'link', active: false
    },
    // {
    //     title: 'Satıcılar', icon: Users, type: 'sub', active: false, children: [
    //         { path: '/vendors/list_vendors', title: 'Satıcı Listesi', type: 'link' },
    //         { path: '/vendors/create-vendors', title: 'Satıcı Oluştur', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Yerelleştirme', icon: Chrome, type: 'sub', children: [
    //         { path: '/localization/transactions', title: 'Çeviriler', type: 'link' },
    //         { path: '/localization/currency-rates', title: 'Döviz Kurları', type: 'link' },
    //         { path: '/localization/taxes', title: 'Vergiler', type: 'link' }
    //     ]
    // },
    {
        title: 'Foreign Currency', path: '/localization/currency-rates', icon: Activity, type: 'link', active: false
    },
   
    {
        title: 'Cost', path: '/localization/taxes', icon: Book, type: 'link', active: false
    },

    {
        title: 'Stock', icon: Package, type: 'sub', active: false, children: [
            { path: '/stock/home', title: 'Stock Management', type: 'link' },
            { path: '/stock/new-stock', title: 'New Stock', type: 'link' },
            { path: '/stock/stock-list', title: 'Stock List', type: 'link' },
            { path: '/stock/stock-detail-list', title: 'Stock Detail List', type: 'link' },
            { path: '/stock/warehouses', title: 'Warehouses', type: 'link' },
            { path: '/stock/warehousesTwo', title: 'Warehouses 2', type: 'link' },
            { path: '/stock/warehouse-moves', title: 'Warehouse Movement', type: 'link' },
        ]
    },
   
    // {
    //     title: 'Envanter', icon: Paperclip, type: 'sub', children: [
    //         { path: '/dashboard', title: 'Ürün Varyasyonları', type: 'link' },
    //         { path: '/dashboard', title: 'Kategori Listeleri', type: 'link' },
    //         { path: '/dashboard', title: 'Marka Listeleri', type: 'link' },
    //         // { path: '/dashboard', title: 'Ürün Listeleri', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Entegrasyon',path:'/dashboard', icon: Layers, type: 'link', active: false
    // },
    {
        title: 'Statistics',path:'/statistics/statistic', icon: PieChart, type: 'link', active: false
    },
    {
        title: 'Reports',path:'/reports/report', icon: BarChart, type: 'link', active: false
    },

    {
        title: 'Campaigns', icon: Gift, type: 'sub', children: [
            { path: '/campaigns/campaign', title: 'Campaigns', type: 'link' },
            { path: '/campaigns/addCampaign', title: 'Create Campaign', type: 'link' },
        ]
    },
   
    // {
    //     title: 'Reklam',path:'/dashboard', icon: Film, type: 'link', active: false
    // },
    
    {
        title: 'Bills',path:'/invoice', icon: FileText, type: 'link', active: false
    },
    
    {
        title: 'Settings',path:'/settings/profile', icon: Settings, type: 'link', active: false
    },
    {
        title: 'Log out',path:'/auth/login', icon: LogIn, type: 'link', active: false
    }
]
