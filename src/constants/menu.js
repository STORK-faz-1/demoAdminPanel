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
    BarChart,Settings,Archive, LogIn, Activity, Book
} from 'react-feather';

export const MENUITEMS = [
    {
        path: '/dashboard', title: 'Kontrol Paneli', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Ürünler', icon: Box, type: 'sub', active: false, children: [
            {
                title: 'Kadın', type: 'sub', active: false, children: [
                    { path: '/products/physical/category', title: 'Tüm Ürünler', type: 'link' },
                    // { path: '/products/physical/sub-category', title: 'Sub Category', type: 'link' },
                    // { path: '/products/physical/product-list', title: 'Product List', type: 'link' },
                    // { path: '/products/physical/product-detail', title: 'Product Detail', type: 'link' },
                     { path: '/products/physical/add-product', title: 'Ürün Ekle', type: 'link' },
                
                ]
            },
            {
                title: 'Erkek', type: 'sub', active: false, children: [
                    { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
                    // { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
                    // { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
                    { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
                ]
            },
            {
                title: 'Anne & Çocuk', type: 'sub', active: false, children: [
                    { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
                    // { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
                    // { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
                    { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
                ]
            },
            {
                title: 'Ev & Mobilya', type: 'sub', active: false, children: [
                    { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
                    // { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
                    // { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
                    { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
                ]
            },
            {
                title: 'Süpermarket', type: 'sub', active: false, children: [
                    { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
                    // { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
                    // { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
                    { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
                ]
            },
            {
                title: 'Ayakkabı & Çanta', type: 'sub', active: false, children: [
                    { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
                    // { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
                    // { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
                    { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
                ]
            },
            {
                title: 'Elektronik', type: 'sub', active: false, children: [
                    { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
                    // { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
                    // { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
                    { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
                ]
            },
            {
                title: 'Spor & Outdoor', type: 'sub', active: false, children: [
                    { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
                    // { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
                    // { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
                    { path: '/products/digital/digital-add-product', title: 'Ürün Ekle', type: 'link' },
                ]
            },
       
        ]
    },
    {
        title: 'Satışlar', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/sales/orders', title: 'Sipariş Yönetimi', type: 'link' },
            { path: '/sales/transactions', title: 'İşlemler', type: 'link' },
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
        title: 'Influencer Listesi', path: '/influencers/influencers', icon: Heart, type: 'link', active: false
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
        title: 'Döviz Kurları', path: '/localization/currency-rates', icon: Activity, type: 'link', active: false
    },
    {
        title: 'Maliyet', path: '/localization/taxes', icon: Book, type: 'link', active: false
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
        title: 'İstatistik',path:'/statistics/statistic', icon: PieChart, type: 'link', active: false
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
        title: 'Faturalar',path:'/invoice', icon: Archive, type: 'link', active: false
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
