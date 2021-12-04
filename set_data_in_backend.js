
import envVars from 'dotenv';
envVars.config();
import connDB from './config/conn.js';
connDB();

const products = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 3,
            "count": 400
        }
    },
    {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 1.9,
            "count": 100
        }
    },
    {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 3.3,
            "count": 203
        }
    },
    {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 2.9,
            "count": 470
        }
    },
    {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
    {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 2.9,
            "count": 250
        }
    },
    {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category": "electronics",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 2.2,
            "count": 140
        }
    },
    {
        "id": 15,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 2.6,
            "count": 235
        }
    },
    {
        "id": 16,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "category": "women's clothing",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 2.9,
            "count": 340
        }
    },
    {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 3.8,
            "count": 679
        }
    },
    {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 4.7,
            "count": 130
        }
    },
    {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 4.5,
            "count": 146
        }
    },
    {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://via.placeholder.com/500/6366f1",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    }
]

const usersList = [
    {
        "userId": "admin",
        "email": "admin@admin.com",
        "password": "admin",
        "role": 2,
        "secretKey": "PARSHURAM-NIKAM-FakeStoreAPI-secret-key-4417801370547814"
    },
    // ================================================================================
    {
        "userId": "default1",
        "email": "default1@default.com",
        "password": "default1",
        "role": 0,
        "secretKey": "PARSHURAM-NIKAM-FakeStoreAPI-secret-key-4417801370547814"
    },
    {
        "userId": "default2",
        "email": "default2@default.com",
        "password": "default2",
        "role": 0,
        "secretKey": "PARSHURAM-NIKAM-FakeStoreAPI-secret-key-4417801370547814"
    },
    {
        "userId": "default3",
        "email": "default3@default.com",
        "password": "default3",
        "role": 0,
        "secretKey": "PARSHURAM-NIKAM-FakeStoreAPI-secret-key-4417801370547814"
    },
    // ================================================================================
    {
        "userId": "user1",
        "email": "user1@user.com",
        "password": "user1"
    },
    {
        "userId": "user2",
        "email": "user2@user.com",
        "password": "user2"
    },
    {
        "userId": "user3",
        "email": "user3@user.com",
        "password": "user3"
    },
    {
        "userId": "user4",
        "email": "user4@user.com",
        "password": "user4"
    },
    {
        "userId": "user5",
        "email": "user5@user.com",
        "password": "user5"
    },
]

let usersInDB = [
    {
        "userId": "default2",
        "email": "default2@default.com",
        "password": "$2b$10$I/4FimWl.fThfKgvSNO4IenNXicS7Yo1L6aWiIAcouyiWNcz9nQqK",
        "cart": "619769b8b67e377603c0abd2",
        "apiKey": null,
        "token": [
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkZWZhdWx0MiIsInJvbGUiOjAsImlhdCI6MTYzNzMxMjk1MiwiZXhwIjoxNjM3NDg1NzUyfQ.jaKZfq-rmtZ_3Svm3vdQVYCyleNx2EMnIXGpYJZMIMI"
        ],
        "role": 0,
        "_id": "619769b9b67e377603c0abde",
        "createdAt": "2021-11-19T09:09:13.240Z",
        "updatedAt": "2021-11-19T09:09:13.240Z",
        "__v": 0
    },
    { 
        "userId": "user1",
        "email": "user1@user.com",
        "password": "$2b$10$XxVRl89qZDttWBwMVaaMpee/PGWMrRAVr3PAIbcT28vFypWmp9886",
        "cart": "619769b8b67e377603c0abd4",
        "apiKey": "4945d3ec-8fe1-448b-b700-e5504a46dfe8",
        "token": [
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMSIsImlhdCI6MTYzNzMxMjk1MiwiZXhwIjoxNjM3NDg1NzUyfQ.EB3110Fi5uRavKjfUSsGNjPdFGr88D1b0vbfc5Ktlt8"
        ],
        "role": 1,
        "_id": "619769b9b67e377603c0abe2",
        "createdAt": "2021-11-19T09:09:13.548Z",
        "updatedAt": "2021-11-19T09:09:13.548Z",
        "__v": 0
    },
    {
        "userId": "default1",
        "email": "default1@default.com",
        "password": "$2b$10$x5gUNrcjRpBlQFsk7ilVtuxozaN4yu8fk//5OIzkmMwV6iBzlnWnq",
        "cart": "619769b7b67e377603c0abce",
        "apiKey": null,
        "token": [
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkZWZhdWx0MSIsInJvbGUiOjAsImlhdCI6MTYzNzMxMjk1MSwiZXhwIjoxNjM3NDg1NzUxfQ.zAHxMjQjNuBOzmPmY9DzkfJiXWzisVShqjWj9T94vLk"
        ],
        "role": 0,
        "_id": "619769b9b67e377603c0abdc",
        "createdAt": "2021-11-19T09:09:13.085Z",
        "updatedAt": "2021-11-19T09:09:13.085Z",
        "__v": 0
    },
    {
        "userId": "admin",
        "email": "admin@admin.com",
        "password": "$2b$10$LRtfFBpCnME4tY2igPD9w.CePLAVSlcaONmQ4i3DPB4ysTd8bktea",
        "cart": "619769b7b67e377603c0abcc",
        "apiKey": "577abda1-076c-488e-882f-e1e812ef1b04",
        "token": [
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsInJvbGUiOjIsImlhdCI6MTYzNzMxMjk1MSwiZXhwIjoxNjM3NDg1NzUxfQ.QNqDae5Wc_0b-EOPUlxlBAIKlpqggiHSjtO2NF_lCgk"
        ],
        "role": 2,
        "_id": "619769b8b67e377603c0abd8",
        "createdAt": "2021-11-19T09:09:12.439Z",
        "updatedAt": "2021-11-19T09:09:12.439Z",
        "__v": 0
    },
    {
        "userId": "default3",
        "email": "default3@default.com",
        "password": "$2b$10$XZ67QoY7F52G440Boe1akOoJXfNqg0GJ4wak5mMLvxH2RnX0HgEOy",
        "cart": "619769b8b67e377603c0abd6",
        "apiKey": null,
        "token": [
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkZWZhdWx0MyIsInJvbGUiOjAsImlhdCI6MTYzNzMxMjk1MiwiZXhwIjoxNjM3NDg1NzUyfQ.kczOKuJYc5ShHohGoeBf_EZLk0lInBCVeWKjNeEGJa4"
        ],
        "role": 0,
        "_id": "619769b9b67e377603c0abe0",
        "createdAt": "2021-11-19T09:09:13.394Z",
        "updatedAt": "2021-11-19T09:09:13.394Z",
        "__v": 0
    },
    {
        "userId": "user3",
        "email": "user3@user.com",
        "password": "$2b$10$xj.Tx0E7/NRVPMy3jSeQTePWSESP9in3pG9iGqOfDWf6RSdDLfaNy",
        "cart": "619769b7b67e377603c0abd0",
        "apiKey": "6966f069-2b68-437c-bab4-7eddc12545e8",
        "token": [
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMyIsImlhdCI6MTYzNzMxMjk1MSwiZXhwIjoxNjM3NDg1NzUxfQ.s0TRWp0K1w1QtzOQ1NxnsJZmcR5jw1LK0NxcvmjvGxE"
        ],
        "role": 1,
        "_id": "619769b8b67e377603c0abda",
        "createdAt": "2021-11-19T09:09:12.930Z",
        "updatedAt": "2021-11-19T09:09:12.930Z",
        "__v": 0
    },
    {
        "userId": "user4",
        "email": "user4@user.com",
        "password": "$2b$10$Sfxc6y9hYeBCgqLnJN6Pk.XnWB3DTKJyhR/B0e27I6GMXBqk5SKFy",
        "cart": "619769bab67e377603c0abe7",
        "apiKey": "aa34837a-0080-4f0f-a5dd-bb652837febb",
        "token": [
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyNCIsImlhdCI6MTYzNzMxMjk1NCwiZXhwIjoxNjM3NDg1NzU0fQ.t4ILpMzYMAFJTuuu2QBk4sRjRpPZxEt8R_Fz69e9IQs"
        ],
        "role": 1,
        "_id": "619769bab67e377603c0abed",
        "createdAt": "2021-11-19T09:09:14.352Z",
        "updatedAt": "2021-11-19T09:09:14.352Z",
        "__v": 0
    },
    {
        "userId": "user2",
        "email": "user2@user.com",
        "password": "$2b$10$sMcCNcVGUjz/jKs/5NZrzubOBUHVIq8jWvtgqvx1MbAAF4G5ke33S",
        "cart": "619769bab67e377603c0abe9",
        "apiKey": "fc52f2f1-6a3d-4334-a4f2-043eb5cc6cb3",
        "token": [
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMiIsImlhdCI6MTYzNzMxMjk1NCwiZXhwIjoxNjM3NDg1NzU0fQ.Y7cksI2M3fVUXyQh8jpZHtVtjwJ0wbqM1j-eMrk-k08"
        ],
        "role": 1,
        "_id": "619769bab67e377603c0abef",
        "createdAt": "2021-11-19T09:09:14.504Z",
        "updatedAt": "2021-11-19T09:09:14.504Z",
        "__v": 0
    },
    {
        "userId": "user5",
        "email": "user5@user.com",
        "password": "$2b$10$KIjSScB/HgliVzEW1czfVeaEHgpo5u7bIrxw94TKTh32R6LvFDSSC",
        "cart": "619769bab67e377603c0abeb",
        "apiKey": "7789bd70-5fbf-43c4-8faf-c386ad16568f",
        "token": [
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyNSIsImlhdCI6MTYzNzMxMjk1NCwiZXhwIjoxNjM3NDg1NzU0fQ.9teNYF8zCBDGoGrz5lOzvTdE-rKwPuouHO70Ka9_cKU"
        ],
        "role": 1,
        "_id": "619769bab67e377603c0abf1",
        "createdAt": "2021-11-19T09:09:14.681Z",
        "updatedAt": "2021-11-19T09:09:14.681Z",
        "__v": 0
    }
];

const prouctsInDB = [
    {
        "id": "7",
        "productType": "default",
        "title": "White Gold Plated Princess",
        "price": 9,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "rating": {
            "rate": 3,
            "count": 400
        },
        "availability": "InStock",
        "_id": "61976dcbe72f0516218fbdef",
        "createdAt": "2021-11-19T09:26:35.905Z",
        "updatedAt": "2021-11-19T09:26:35.905Z",
        "__v": 0
    },
    {
        "id": "5",
        "productType": "default",
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "rating": {
            "rate": 4.6,
            "count": 400
        },
        "availability": "InStock",
        "_id": "61976dcbe72f0516218fbdf1",
        "createdAt": "2021-11-19T09:26:35.930Z",
        "updatedAt": "2021-11-19T09:26:35.930Z",
        "__v": 0
    },
    {
        "id": "6",
        "productType": "default",
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "rating": {
            "rate": 3.9,
            "count": 70
        },
        "availability": "InStock",
        "_id": "61976dcce72f0516218fbdfb",
        "createdAt": "2021-11-19T09:26:36.454Z",
        "updatedAt": "2021-11-19T09:26:36.454Z",
        "__v": 0
    },
    {
        "id": "10",
        "productType": "default",
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "rating": {
            "rate": 2.9,
            "count": 470
        },
        "availability": "InStock",
        "_id": "61976dcce72f0516218fbdfe",
        "createdAt": "2021-11-19T09:26:36.473Z",
        "updatedAt": "2021-11-19T09:26:36.473Z",
        "__v": 0
    },
    {
        "id": "9",
        "productType": "default",
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "rating": {
            "rate": 3.3,
            "count": 203
        },
        "availability": "InStock",
        "_id": "61976dcce72f0516218fbe00",
        "createdAt": "2021-11-19T09:26:36.489Z",
        "updatedAt": "2021-11-19T09:26:36.489Z",
        "__v": 0
    },
    {
        "id": "8",
        "productType": "default",
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "rating": {
            "rate": 1.9,
            "count": 100
        },
        "availability": "InStock",
        "_id": "61976dcce72f0516218fbe02",
        "createdAt": "2021-11-19T09:26:36.511Z",
        "updatedAt": "2021-11-19T09:26:36.511Z",
        "__v": 0
    },
    {
        "id": "11",
        "productType": "default",
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "rating": {
            "rate": 4.8,
            "count": 319
        },
        "availability": "InStock",
        "_id": "61976dcce72f0516218fbe0a",
        "createdAt": "2021-11-19T09:26:36.616Z",
        "updatedAt": "2021-11-19T09:26:36.616Z",
        "__v": 0
    },
    {
        "id": "12",
        "productType": "default",
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "rating": {
            "rate": 4.8,
            "count": 400
        },
        "availability": "InStock",
        "_id": "61976dcce72f0516218fbe0c",
        "createdAt": "2021-11-19T09:26:36.644Z",
        "updatedAt": "2021-11-19T09:26:36.644Z",
        "__v": 0
    },
    {
        "id": "13",
        "productType": "default",
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "rating": {
            "rate": 2.9,
            "count": 250
        },
        "availability": "InStock",
        "_id": "61976dcce72f0516218fbe14",
        "createdAt": "2021-11-19T09:26:36.749Z",
        "updatedAt": "2021-11-19T09:26:36.749Z",
        "__v": 0
    },
    {
        "id": "14",
        "productType": "default",
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category": "electronics",
        "rating": {
            "rate": 2.2,
            "count": 140
        },
        "availability": "InStock",
        "_id": "61976dcce72f0516218fbe16",
        "createdAt": "2021-11-19T09:26:36.774Z",
        "updatedAt": "2021-11-19T09:26:36.774Z",
        "__v": 0
    },
    {
        
    }
];


usersList.map(user => {
    fetch('http://localhost:8000/api/auth/signup', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
    .then(data =>{
         console.log(data)
        // usersInDB.push(data.user);    
    });
})

products.map(product => {
    fetch('http://localhost:8000/api/product/add', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // here admin api key used to set default ptoducts!
            'Authorization': "Bearer 577abda1-076c-488e-882f-e1e812ef1b04",
        },
        body: JSON.stringify(product)
    }).then(res => res.json())
    .then(data =>{
         console.log(data)
        prouctsInDB.push(data.savedProduct);    
    }).catch(err => console.log(err.message));
})


