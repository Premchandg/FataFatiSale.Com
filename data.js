// =========================================================================
// CENTRAL DATA REGISTRY MATRIX (Dynamic Coordination Injection Layer)
// =========================================================================

const advertisementDatabase = [
    { 
        name: "Reliance Smart Plaza", 
        area: "Barrackpore", 
        img: "images/sample", 
        address: "Ghoshpara Road, Barrackpore", 
        phone: "+91 90001 11101",
        coords: { lat: 22.7644, lng: 88.3749 }
    },
    { 
        name: "Senco Gold & Diamonds", 
        area: "Naihati", 
        img: "images/ornaments.png", 
        address: "Station Road Corner, Naihati", 
        phone: "+91 90001 11102",
        coords: { lat: 22.8914, lng: 88.4197 }
    },
    { 
        name: "Trends Fashion Outlet", 
        area: "Shyamnagar", 
        img: "images/fashion.png", 
        address: "Feeder Road, Shyamnagar", 
        phone: "+91 90001 11103",
        coords: { lat: 22.8277, lng: 88.4022 }
    },
    { 
        name: "Mio Amore Bakery", 
        area: "Ichhapur", 
        img: "images/bakery.png", 
        address: "Badamtala Junction, Ichhapur", 
        phone: "+91 90001 11104",
        coords: { lat: 22.7915, lng: 88.3792 }
    },
    { 
        name: "Great Eastern Retail", 
        area: "Barrackpore", 
        img: "images/electronics.png", 
        address: "SN Banerjee Rd, Barrackpore", 
        phone: "+91 90001 11105",
        coords: { lat: 22.7601, lng: 88.3698 }
    },
    { 
        name: "Khadim's Footwear Hub", 
        area: "Kankinara", 
        img: "images/jutas.png", 
        address: "Bazaar Market, Kankinara", 
        phone: "+91 90001 11106",
        coords: { lat: 22.8647, lng: 88.4144 }
    },
    { 
        name: "Benarasi Niketan", 
        area: "Naihati", 
        img: "images/garments.png", 
        address: "RBC Road Crossing, Naihati", 
        phone: "+91 90001 11107",
        coords: { lat: 22.8930, lng: 88.4215 }
    },
    { 
        name: "Spencers Mega Mart", 
        area: "Palta", 
        img: "images/spencers.jpg", 
        address: "Palta Station Road, Palta", 
        phone: "+91 90001 11108",
        coords: { lat: 22.7852, lng: 88.3754 }
    },
    { 
        name: "Digital Xpress Mini", 
        area: "Jagatdal", 
        img: "images/electronics.png", 
        address: "G.D. Road, Jagatdal", 
        phone: "+91 90001 11109",
        coords: { lat: 22.8492, lng: 88.4099 }
    },
    { 
        name: "Bata Premium Store", 
        area: "Barrackpore", 
        img: "images/juta.png", 
        address: "Chiriamore, Barrackpore", 
        phone: "+91 90001 11110",
        coords: { lat: 22.7538, lng: 88.3772 }
    },
    { 
        name: "PC Chandra Jewellers", 
        area: "Barrackpore", 
        img: "images/ornaments.png", 
        address: "Feeder Road, Barrackpore", 
        phone: "+91 90001 11111",
        coords: { lat: 22.7615, lng: 88.3711 }
    }
];

const shopDatabase = [
    { 
        id: "sp_1", 
        name: "Sreeram Garments", 
        area: "Barrackpore", 
        category: "Fashion & Garments", 
        offer: "Buy 2 Get 1 Free on Kurtas", 
        sale: "Festive Clearance", 
        address: "SN Banerjee Road, Barrackpore", 
        phone: "+91 98301 12345", 
        tier: 499, 
        img: "images/garments.jpg", 
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
        phone: "+91 98301 54321", 
        tier: 199, 
        img: "images/electronics.jpg", 
        defaultLikes: 19,
        coords: { lat: 22.7655, lng: 88.3762 }
    },
    { 
        id: "sp_3", 
        name: "Barrackpore Gift Center", 
        area: "Barrackpore", 
        category: "Others", 
        offer: "Flat 10% off on custom corporate frames", 
        sale: "None", 
        address: "Station Road, Barrackpore", 
        phone: "+91 98301 99999", 
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
        phone: "+91 98301 88888", 
        tier: 199, 
        img: "", 
        defaultLikes: 12,
        coords: { lat: 22.7541, lng: 88.3769 }
    },
    { 
        id: "sp_5", 
        name: "Royal Diner Cafe", 
        area: "Barrackpore", 
        category: "Groceries & Sweets", 
        offer: "Complimentary mocktail with large platters", 
        sale: "None", 
        address: "S.N. Banerjee Road, Barrackpore", 
        phone: "+91 98301 77777", 
        tier: 499, 
        img: "", 
        defaultLikes: 56,
        coords: { lat: 22.7618, lng: 88.3702 }
    },
    { 
        id: "sp_6", 
        name: "Annapurna Sweets & Bakery", 
        area: "Shyamnagar", 
        category: "Groceries & Sweets", 
        offer: "Flat 10% Off on Bulk Orders above ₹500", 
        sale: "None", 
        address: "Feeder Road, Shyamnagar", 
        phone: "+91 94332 98765", 
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
        phone: "+91 91633 11223", 
        tier: 199, 
        img: "", 
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
        phone: "+91 91633 44556", 
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
        phone: "+91 91633 77889", 
        tier: 499, 
        img: "images/electronics.png", 
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
        phone: "+91 90512 88990", 
        tier: 199, 
        img: "images/electronics.png", 
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
        phone: "+91 33 2581 4455", 
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
        phone: "+91 90001 11112", 
        tier: 199, 
        img: "images/electronics.png", 
        defaultLikes: 25,
        coords: { lat: 22.8315, lng: 88.4062 }
    }
];
