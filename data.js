// =========================================================================
// CENTRAL DATA REGISTRY MATRIX (Dynamic Coordination Injection Layer)
// =========================================================================

const advertisementDatabase = [
    { 
        name: "Reliance Smart Plaza", 
        area: "Barrackpore", 
        img: "images/sample", 
        address: "Ghoshpara Road, Barrackpore", 
        phone: "+91 90888 82442",
        coords: { lat: 22.7644, lng: 88.3749 }
    },
    { 
        name: "Senco Gold & Diamonds", 
        area: "Naihati", 
        img: "images/ornaments.png", 
        address: "Station Road Corner, Naihati", 
        phone: "+91 90888 82442",
        coords: { lat: 22.8914, lng: 88.4197 }
    },
    { 
        name: "Trends Fashion Outlet", 
        area: "Shyamnagar", 
        img: "images/fashion.png", 
        address: "Feeder Road, Shyamnagar", 
        phone: "+91 90888 82442",
        coords: { lat: 22.8277, lng: 88.4022 }
    },
    { 
        name: "Mio Amore Bakery", 
        area: "Ichhapur", 
        img: "images/bakery.jpg", 
        address: "Badamtala Junction, Ichhapur", 
        phone: "+91 90888 82442",
        coords: { lat: 22.7915, lng: 88.3792 }
    },
    { 
        name: "Great Eastern Retail", 
        area: "Barrackpore", 
        img: "images/electronics.jpg", 
        address: "SN Banerjee Rd, Barrackpore", 
        phone: "+91 90888 82442",
        coords: { lat: 22.7601, lng: 88.3698 }
    },
    { 
        name: "Khadim's Footwear Hub", 
        area: "Kankinara", 
        img: "images/jutas.png", 
        address: "Bazaar Market, Kankinara", 
        phone: "+91 90888 82442",
        coords: { lat: 22.8647, lng: 88.4144 }
    },
    { 
        name: "Benarasi Niketan", 
        area: "Naihati", 
        img: "images/garments.png", 
        address: "RBC Road Crossing, Naihati", 
        phone: "+91 90888 82442",
        coords: { lat: 22.8930, lng: 88.4215 }
    },
    { 
        name: "Spencers Mega Mart", 
        area: "Palta", 
        img: "images/spencers.jpg", 
        address: "Palta Station Road, Palta", 
        phone: "+91 90888 82442",
        coords: { lat: 22.7852, lng: 88.3754 }
    },
    { 
        name: "Bata Premium Store", 
        area: "Barrackpore", 
        img: "images/juta.jpg", 
        address: "Chiriamore, Barrackpore", 
        phone: "+91 90888 82442",
        coords: { lat: 22.7538, lng: 88.3772 }
    },
    { 
        name: "PC Chandra Jewellers", 
        area: "Barrackpore", 
        img: "images/ornaments.png", 
        address: "Feeder Road, Barrackpore", 
        phone: "+91 90888 82442",
        coords: { lat: 22.7615, lng: 88.3711 }
    }
];

const shopDatabase = [
    { 
        id: "sp_001", 
        name: "Om Kamla Dresses", 
        area: "Jagatdal", 
        category: "Fashion & Garments", 
        offer: "5% off on all new arrivals", 
        sale: "Fata Fati Sale", 
        address: "80 east, Ghosh Para Rd, near by Shiv Mandir, Jagatdal, Kolkata, Bhatpara, West Bengal 743125", 
        phone: "+91 91237 63015", 
        tier: 499, 
        img: "images/Ohm Kamla Dresses/unnamed.jpg", 
        heroImages: [
            "images/Ohm Kamla Dresses/unnamed.jpg"
        ],
        productGallery: [
            { src: "images/Ohm Kamla Dresses/1.webp", name: "Modern Ladies Wear", description: "Lightweight cotton with embroidery detail" },
            { src: "images/Ohm Kamla Dresses/2.webp", name: "Premium Kids Wear", description: "Kids clothing for all occasions" },
            { src: "images/Ohm Kamla Dresses/3.webp", name: "Classic Women Fashion", description: "Comfortable and stylish options for women" },
            { src: "images/Ohm Kamla Dresses/4.webp", name: "Sarees", description: "Easy-wear design with modern finish" }
        ],
        defaultLikes: 56,
        coords: { lat: 22.8539, lng: 88.3798 }
    },

    { 
        id: "sp_002", 
        name: "Raju Garments", 
        area: "Jagatdal", 
        category: "Fashion & Garments", 
        offer: "5% off on all new arrivals", 
        sale: "Fata Fati Sale", 
        address: "80 east, Ghosh Para Rd, Opposite to Meghna Jute Mill gate, Jagatdal, Kolkata, Bhatpara, West Bengal 743125", 
        phone: "+91 90885 70542", 
        tier: 499, 
        img: "images/sample", 
        heroImages: [
            "images/sample"
        ],
        productGallery: [
            { src: "images/Raju Garments/1.webp", name: "Modern Ladies Wear", description: "Lightweight cotton with embroidery detail" },
            { src: "images/Raju Garments/2.webp", name: "Premium Kids Wear", description: "Kids clothing for all occasions" },
            { src: "images/Raju Garments/3.webp", name: "Classic Women Fashion", description: "Comfortable and stylish options for women" },
            { src: "images/Raju Garments/4.webp", name: "Modern Ladies Nighty", description: "Easy-wear design with modern finish" },
            { src: "images/Raju Garments/6.webp", name: "Trousers", description: "Comfortable Wear for all weather" },
            { src: "images/Raju Garments/7.webp", name: "Men's Wear", description: "Comfortable and stylish options for men" },
            { src: "images/Raju Garments/8.webp", name: "Women's Wear", description: "Easy-wear design with modern finish" }
        ],
        defaultLikes: 56,
        coords: { lat: 22.853592, lng: 88.379808 }
    },
    { 
        id: "sp_1", 
        name: "Sreeram Garments", 
        area: "Barrackpore", 
        category: "Fashion & Garments", 
        offer: "Buy 2 Get 1 Free on Kurtas", 
        sale: "Festive Clearance", 
        address: "SN Banerjee Road, Barrackpore", 
        phone: "+91 90888 82442", 
        tier: 499, 
        img: "images/garments.jpg", 
        heroImages: [
            "images/Sreeram Garments/hero/OIP.jfif",
            "images/Sreeram Garments/hero/OIP (1).jfif",
            "images/Sreeram Garments/hero/OIP (2).jfif"
        ],
        productGallery: [
            { src: "images/Sreeram Garments/products/fashion.jpg", name: "Festive Kurta Set", description: "Lightweight cotton with embroidery detail" },
            { src: "images/Sreeram Garments/products/garments.jpg", name: "Premium Suit Combo", description: "Semi-formal wear for family functions" },
            { src: "images/Sreeram Garments/products/juta.jpg", name: "Classic Leather Juta", description: "Comfortable footwear for daily use" },
            { src: "images/Sreeram Garments/products/jutas.jpg", name: "Sporty Casual Juta", description: "Easy-wear design with modern finish" }
        ],
        defaultLikes: 42,
        coords: { lat: 22.7622, lng: 88.3705 }
    },
    { 
        id: "sp_2", 
        name: "Maa Tara Electronics", 
        area: "Barrackpore", 
        category: "Electronics", 
        offer: "Free Installation on Smart ACs", 
        sale: "Summer Blast Deals", 
        address: "Ghoshpara Road, Barrackpore", 
        phone: "+91 90888 82442", 
        tier: 199, 
        img: "images/Electronics.png", 
        defaultLikes: 19,
        coords: { lat: 22.7655, lng: 88.3762 }
    },
    { 
        id: "sp_6", 
        name: "Annapurna Sweets & Bakery", 
        area: "Shyamnagar", 
        category: "Groceries & Sweets", 
        offer: "Flat 10% Off on Bulk Orders above ₹500", 
        sale: "None", 
        address: "Feeder Road, Shyamnagar", 
        phone: "+91 90888 82442", 
        tier: 199, 
        img: "images/sweets.png", 
        defaultLikes: 31,
        coords: { lat: 22.8285, lng: 88.4015 }
    },
    { 
        id: "sp_7", 
        name: "Variety Stores", 
        area: "titagarh", 
        category: "Groceries & Sweets", 
        offer: "Get Free Sugar Pack with 5kg Mustard Oil", 
        sale: "Ration Discount", 
        address: "titagarh", 
        phone: "+91 90888 82442", 
        tier: 199, 
        img: "images/sweets.jpg", 
        defaultLikes: 14,
        coords: { lat: 22.8299, lng: 88.4045 }
    },
    { 
        id: "sp_8", 
        name: "Saha Footwear Arcade", 
        area: "Shyamnagar", 
        category: "Others", 
        offer: "Flat 20% off on premium leather variants", 
        sale: "None", 
        address: "Bazaar Area, Shyamnagar", 
        phone: "+91 90888 82442", 
        tier: 199, 
        img: "images/juta.png", 
        defaultLikes: 22,
        coords: { lat: 22.8268, lng: 88.3998 }
    },
    { 
        id: "sp_9", 
        name: "Shyamnagar Digital World", 
        area: "Shyamnagar", 
        category: "Electronics", 
        offer: "Zero down payment EMI schemes", 
        sale: "Flash Tech Bonanza", 
        address: "Station Road East, Shyamnagar", 
        phone: "+91 90888 82442", 
        tier: 499, 
        img: "images/Electronics.png", 
        defaultLikes: 89,
        coords: { lat: 22.8271, lng: 88.4031 }
    },
    { 
        id: "sp_10", 
        name: "Naihati Digital Hub", 
        area: "Naihati", 
        category: "Electronics", 
        offer: "Up to ₹2000 Cashback on exchanges", 
        sale: "Monsoon Tech Splash", 
        address: "RBC Road, Naihati", 
        phone: "+91 90888 82442", 
        tier: 199, 
        img: "images/Electronics.png", 
        defaultLikes: 17,
        coords: { lat: 22.8942, lng: 88.4231 }
    },
    { 
        id: "sp_11", 
        name: "Alankar Jewellers", 
        area: "Naihati", 
        category: "Jewellery & Aesthetics", 
        offer: "Zero Making Charges on Gold Ornaments", 
        sale: "Wedding Special", 
        address: "Station Road Bazaar, Naihati", 
        phone: "+91 90888 82442", 
        tier: 499, 
        img: "images/ornaments.png", 
        defaultLikes: 112,
        coords: { lat: 22.8911, lng: 88.4189 }
    },
    { 
        id: "sp_12", 
        name: "Techno City Computers", 
        area: "Shyamnagar", 
        category: "Electronics", 
        offer: "Up to 15% discount on storage devices", 
        sale: "None", 
        address: "Siddheswari Tala, Shyamnagar", 
        phone: "+91 90888 82442", 
        tier: 199, 
        img: "images/Electronics.png", 
        defaultLikes: 25,
        coords: { lat: 22.8315, lng: 88.4062 }
    },
    { 
        id: "sp_3", 
        name: "Barrackpore Gift Center", 
        area: "Barrackpore", 
        category: "Others", 
        offer: "Flat 10% off on custom corporate frames", 
        sale: "None", 
        address: "Station Road, Barrackpore", 
        phone: "+91 90888 82442", 
        tier: 199, 
        img: "", 
        defaultLikes: 8,
        coords: { lat: 22.7594, lng: 88.3644 }
    },
    { 
        id: "sp_4", 
        name: "Chiriamore Cycle Hub", 
        area: "Barrackpore", 
        category: "Others", 
        offer: "Free basic toolkit bundle on purchases", 
        sale: "None", 
        address: "Chiriamore Crossing, Barrackpore", 
        phone: "+91 90888 82442", 
        tier: 199, 
        img: "", 
        defaultLikes: 12,
        coords: { lat: 22.7541, lng: 88.3769 }
    }
];
