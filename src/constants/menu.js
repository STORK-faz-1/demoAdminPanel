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
        path: '/dashboard', title: 'Ana Sayfa', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Ürünler', icon: Box, type: 'sub', active: false, children: [
            // {
            //     title: 'Kadın', type: 'sub', active: false, children: [
            //         { path: '/products/physical/category', title: 'Tüm Ürünler', type: 'link' },
            //          { path: '/products/physical/sub-category', title: 'Sub Category', type: 'link' },
            //          { path: '/products/physical/product-list', title: 'Product List', type: 'link' },
            //          { path: '/products/physical/product-detail', title: 'Product Detail', type: 'link' },
            //          { path: '/products/physical/add-product', title: 'Ürün Ekle', type: 'link' },
                
            //     ]
            // },
            { path: '/products/physical/woman', title: 'Kadın', type: 'link' },
            { path: '/products/physical/man', title: 'Erkek', type: 'link' },
            { path: '/products/physical/momAndChild', title: 'Anne & Çocuk', type: 'link' },
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
        title: 'Amazon Ürün Ekle', path: '/products/physical/add-product-amazon', icon: PlusCircle, type: 'link', active: false
    },
    {
        title: 'Toplu Ürün Ekle', path: '/products/physical/add-product', icon: FilePlus, type: 'link', active: false
    },
 
    {
        title: 'Ürünleri Yükle', path: '/products/physical/add-more-products', icon: UploadCloud, type: 'link', active: false
    },
    {
        title: 'Satışlar', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/sales/orders', title: 'Siparişler', type: 'link' },
            { path: '/sales/transactions', title: 'Sipariş Yönetimi', type: 'link' },
        ]
    },
    {
        title: 'Kuponlar', icon: Tag, type: 'sub', active: false, children: [
            { path: '/coupons/list-coupons', title: 'Kupon Listesi', type: 'link' },
            { path: '/coupons/create-coupons', title: 'Kupon Oluştur', type: 'link' },
        ]
    },
    // {
    //     title: 'Sayfalar', icon: Clipboard , type: 'sub', active: false, children: [
    //         { path: '/pages/list-page', title: 'Sayfa Listesi', type: 'link' },
    //         { path: '/pages/create-page', title: 'Sayfa Oluştur', type: 'link' },
    //     ]
    // },
    {
        title: 'Medya', path: '/media', icon: Camera, type: 'link', active: false
    },
    // {
    //     title: 'Menüler', icon: AlignLeft, type: 'sub', active: false, children: [
    //         { path: '/menus/list-menu', title: 'Menü Listesi', type: 'link' },
    //         { path: '/menus/create-menu', title: 'Menü Oluştur', type: 'link' },
    //     ]
    // },
    {
        title: 'Kullanıcılar', icon: UserPlus, type: 'sub', active: false, children: [
            { path: '/users/list-user', title: 'Kullanıcı Listesi', type: 'link' },
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
        title: 'Döviz', path: '/localization/currency-rates', icon: Activity, type: 'link', active: false
    },
   
    {
        title: 'Maliyet', path: '/localization/taxes', icon: Book, type: 'link', active: false
    },

    {
        title: 'Stok', icon: Package, type: 'sub', active: false, children: [
            { path: '/stock/home', title: 'Stok Yönetim', type: 'link' },
            { path: '/stock/new-stock', title: 'Yeni Stok', type: 'link' },
            { path: '/stock/stock-list', title: 'Stok Listesi', type: 'link' },
            { path: '/stock/warehouses', title: 'Depolar', type: 'link' },
            { path: '/stock/warehouse-moves', title: 'Depo Hareketi', type: 'link' },
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
        title: 'İstatistikler',path:'/statistics/statistic', icon: PieChart, type: 'link', active: false
    },
    {
        title: 'Raporlar',path:'/reports/report', icon: BarChart, type: 'link', active: false
    },

    {
        title: 'Kampanyalar', icon: Gift, type: 'sub', children: [
            { path: '/campaigns/campaign', title: 'Kampanyalar', type: 'link' },
            { path: '/campaigns/addCampaign', title: 'Kampanya Oluştur', type: 'link' },
        ]
    },
   
    // {
    //     title: 'Reklam',path:'/dashboard', icon: Film, type: 'link', active: false
    // },
    
    {
        title: 'Faturalar',path:'/invoice', icon: FileText, type: 'link', active: false
    },
    {
        title: 'Ayarlar', icon: Settings, type: 'sub', children: [
            { path: '/settings/profile', title: 'Profil', type: 'link' },
        ]
    },
   
    {
        title: 'Çıkış',path:'/auth/login', icon: LogIn, type: 'link', active: false
    }
]
