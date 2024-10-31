const cocktails = [
    {
        id: 1,
        name: "Old Fashioned",
        price: 15.00,
        images: [
            "https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Tequila-sunrise-fb8b3ab.jpg?quality=90&resize=556,505"
        ],
        description: "A classic cocktail made with bourbon, sugar, bitters, and an orange twist.",
        alcoholContent: "40%",
        ingredients: [
            "Bourbon",
            "Sugar",
            "Bitters",
            "Orange Twist"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.9,
        reviews: 120,
        calories: 150,
        servingSize: "8 oz",
        specialNotes: "Best enjoyed neat or on the rocks."
    },
    {
        id: 2,
        name: "Manhattan",
        price: 14.00,
        images: [
            "https://www.acouplecooks.com/wp-content/uploads/2023/05/Strawberry-Mojito-0008.jpg"
        ],
        description: "A classic cocktail made with rye whiskey, sweet vermouth, and bitters.",
        alcoholContent: "35%",
        ingredients: [
            "Rye Whiskey",
            "Sweet Vermouth",
            "Bitters"
        ],
        popularity: "Medium",
        recommended: false,
        rating: 4.5,
        reviews: 80,
        calories: 140,
        servingSize: "6 oz",
        specialNotes: "Serve in a chilled cocktail glass."
    },
    {
        id: 3,
        name: "Martini",
        price: 13.00,
        images: [
            "https://www.liquor.com/thmb/DJ-RKEMLRzbPznOBBwCIVCSXGH0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__06__18113946__beat-house-punch-720x720-recipe-80fda42167e84265ac3b7e873b4529dd.jpg"
        ],
        description: "A classic cocktail made with gin or vodka and dry vermouth.",
        alcoholContent: "35%",
        ingredients: [
            "Gin/Vodka",
            "Dry Vermouth"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.7,
        reviews: 110,
        calories: 120,
        servingSize: "4 oz",
        specialNotes: "Garnish with an olive or a twist of lemon."
    },
    {
        id: 4,
        name: "Margarita",
        price: 12.00,
        images: [
            "https://b3331843.smushcdn.com/3331843/wp-content/uploads/blue-hawaii-418x235.jpg?lossy=2&strip=1&webp=1",
            "https://b3331843.smushcdn.com/3331843/wp-content/uploads/electric-lemonade-2-418x235.jpg?lossy=2&strip=1&webp=1",
            "https://b3331843.smushcdn.com/3331843/wp-content/uploads/aqua-velva-667x375.jpg?lossy=2&strip=1&webp=1"
        ],
        description: "A classic cocktail made with tequila, triple sec, and lime juice.",
        alcoholContent: "30%",
        ingredients: [
            "Tequila",
            "Triple Sec",
            "Lime Juice"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.6,
        reviews: 100,
        calories: 160,
        servingSize: "8 oz",
        specialNotes: "Serve with salt on the rim."
    },
    {
        id: 5,
        name: "Daiquiri",
        price: 11.00,
        images: [
            "https://cdn.loveandlemons.com/wp-content/uploads/2024/07/best-summer-cocktails-1.jpg",
            "https://assets.epicurious.com/photos/642da49267d53df640581f0c/1:1/w_240,c_limit/FrozenMargarita_RECIPE_033123_50664.jpg",
            "https://www.mashed.com/img/gallery/costco-shoppers-are-thirsty-for-this-favorite-ready-to-drink-cocktail/l-intro-1656437848.jpg",
            "https://i.pinimg.com/236x/66/40/9a/66409ab5097ae1bf16a193c13dab4d33.jpg"
        ],
        description: "A classic cocktail made with rum, lime juice, and simple syrup.",
        alcoholContent: "25%",
        ingredients: [
            "Rum",
            "Lime Juice",
            "Simple Syrup"
        ],
        popularity: "Medium",
        recommended: false,
        rating: 4.4,
        reviews: 70,
        calories: 150,
        servingSize: "6 oz",
        specialNotes: "Blend with ice for a frozen version."
    },
    {
        id: 6,
        name: "Cosmopolitan",
        price: 14.00,
        images: [
            "https://punchdrink.com/wp-content/uploads/2023/06/Article2-Enzoni-Cocktail-Recipe.jpg?w=800",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPUNPk0deQjwNdIjFXnAF5kVNf5R2rhMxFHZ53pGTneEN7fF7DTOD76XAocGaFD1R_Ic&usqp=CAU"
        ],
        description: "A classic cocktail made with vodka, cranberry juice, lime juice, and triple sec.",
        alcoholContent: "28%",
        ingredients: [
            "Vodka",
            "Cranberry Juice",
            "Lime Juice",
            "Triple Sec"
        ],
        popularity: "Medium",
        recommended: false,
        rating: 4.3,
        reviews: 60,
        calories: 180,
        servingSize: "6 oz",
        specialNotes: "Garnish with a lime twist."
    },
    {
        id: 7,
        name: "Mojito",
        price: 13.00,
        images: [
            "https://www.texanerin.com/content/uploads/2022/07/georgia-peach-cocktail-image-650x974.jpg",
            "https://thelittlestcrumb.com/wp-content/uploads/georgia-peach-drink-featured-image.jpg"
        ],
        description: "A classic cocktail made with rum, lime juice, mint, and club soda.",
        alcoholContent: "25%",
        ingredients: [
            "Rum",
            "Lime Juice",
            "Mint",
            "Club Soda"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.8,
        reviews: 130,
        calories: 160,
        servingSize: "8 oz",
        specialNotes: "Muddle the mint leaves before adding other ingredients."
    },
    {
        id: 8,
        name: "Whiskey Sour",
        price: 12.00,
        images: [
            "https://cdn.prod.website-files.com/63d0addf979277c67abc4517/65b24345769dd664ceb70bb5_Frozen-Mango-Mojito-Rita-4-700x1050.jpeg",
            "https://www.foodandwine.com/thmb/9ggPjyO30SY_K0FCgfu3CJKqmkU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/frozen-cucumber-margaritas-withchili-sumac-salt-FT-RECIPE0819-cbf266f65c5a407cb76aeab8bd816dec.jpg"
        ],
        description: "A classic cocktail made with whiskey, lemon juice, and simple syrup.",
        alcoholContent: "30%",
        ingredients: [
            "Whiskey",
            "Lemon Juice",
            "Simple Syrup"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.7,
        reviews: 100,
        calories: 170,
        servingSize: "6 oz",
        specialNotes: "Serve with a cherry garnish."
    },
    {
        id: 9,
        name: "Negroni",
        price: 14.00,
        images: [
            "https://www.acouplecooks.com/wp-content/uploads/2020/04/Strawberry-Margarita-011-735x919.jpg",
            "https://bgordonbuilders.com/wp-content/uploads/2022/02/moscato-margarita-cocktail.png"
        ],
        description: "A classic cocktail made with gin, Campari, and sweet vermouth.",
        alcoholContent: "38%",
        ingredients: [
            "Gin",
            "Campari",
            "Sweet Vermouth"
        ],
        popularity: "Medium",
        recommended: false,
        rating: 4.2,
        reviews: 50,
        calories: 150,
        servingSize: "4 oz",
        specialNotes: "Serve over ice with an orange twist."
    },
    {
        id: 10,
        name: "Sazerac",
        price: 15.00,
        images: [
            "https://www.californiastrawberries.com/wp-content/uploads/2021/06/Red-White-and-Blue-Frozen-Cocktail-5.jpg",
            "https://i.pinimg.com/736x/b6/0b/ca/b60bca7ac7a24c752a7b537f6b11115e.jpg"
        ],
        description: "A classic cocktail made with rye whiskey, absinthe, and Peychaud's bitters.",
        alcoholContent: "40%",
        ingredients: [
            "Rye Whiskey",
            "Absinthe",
            "Peychaud's Bitters"
        ],
        popularity: "Low",
        recommended: true,
        rating: 4.5,
        reviews: 40,
        calories: 160,
        servingSize: "4 oz",
        specialNotes: "Rinse the glass with absinthe before adding other ingredients."
    },
    {
        id: 11,
        name: "Sidecar",
        price: 13.00,
        images: [
            "https://www.liquor.com/thmb/a55xwC-HH7lxCVLN22xtqif9h-0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Figgy-Smalls-720x720-recipe-183e099b0878473d9710587df3b18902.jpg",
            "https://www.westviamidwest.com/wp-content/uploads/2016/04/Purple-Tears-Cocktail-1_opt-1300--735x1105.jpg.webp"
        ],
        description: "A classic cocktail made with brandy, Cointreau, and lemon juice.",
        alcoholContent: "30%",
        ingredients: [
            "Brandy",
            "Cointreau",
            "Lemon Juice"
        ],
        popularity: "Medium",
        recommended: false,
        rating: 4.4,
        reviews: 60,
        calories: 170,
        servingSize: "6 oz",
        specialNotes: "Serve chilled and garnish with a lemon twist."
    },
    {
        id: 12,
        name: "Tom Collins",
        price: 12.00,
        images: [
            "https://www.pineappleandcoconut.com/wp-content/uploads/2021/03/Hibiscus-Spritz4907.jpg",
            "https://www.pineappleandcoconut.com/wp-content/uploads/2021/03/Hibiscus-Spritz4849.jpg"
        ],
        description: "A classic cocktail made with gin, lemon juice, simple syrup, and club soda.",
        alcoholContent: "25%",
        ingredients: [
            "Gin",
            "Lemon Juice",
            "Simple Syrup",
            "Club Soda"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.6,
        reviews: 90,
        calories: 150,
        servingSize: "8 oz",
        specialNotes: "Serve in a tall glass with ice."
    }
];

const food = [
    {
        id: 1,
        name: "Burger",
        price: 18.00,
        images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/19/4d/7d/6b/regular-burget.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/02/ed/22/72/palanda.jpg"
        ],
        description: "A juicy beef patty with lettuce, tomato, and cheese on a brioche bun.",
        type: "Entree",
        dietaryRestrictions: ["Gluten"],
        ingredients: [
            "Beef Patty",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Brioche Bun"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.8,
        reviews: 150,
        calories: 600,
        servingSize: "1",
        specialNotes: "Add bacon or avocado for extra flavor."
    },
    {
        id: 2,
        name: "Nachos",
        price: 12.00,
        images: [
            "https://www.seriouseats.com/thmb/YBUAG17xy1nWYGPmFcJKeoODTzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cheese-sauce-for-cheese-fries-and-nachos-hero-01-e6ccf966688c43ec8025cf9a19678423.jpg",
            "https://www.budgetbytes.com/wp-content/uploads/2023/02/Easy-Nacho-Cheese-Sauce-eat.jpg",
            "https://therecipecritic.com/wp-content/uploads/2023/01/nacho_cheese-2-667x1000.jpg"
        ],
        description: "Crispy tortilla chips topped with cheese, beans, salsa, and sour cream.",
        type: "Appetizer",
        dietaryRestrictions: ["Gluten", "Dairy"],
        ingredients: [
            "Tortilla Chips",
            "Cheese",
            "Beans",
            "Salsa",
            "Sour Cream"
        ],
        popularity: "Medium",
        recommended: false,
        rating: 4.2,
        reviews: 80,
        calories: 450,
        servingSize: "1",
        specialNotes: "Add jalapeños for a spicy kick."
    },
    {
        id: 3,
        name: "Caesar Salad",
        price: 10.00,
        images: [
            "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
            "https://www.joyfulhealthyeats.com/wp-content/uploads/2022/04/Classic-Caesar-Salad-with-Homemade-Croutons-web-4.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjNpmShmgf6meAidNsCFT_7D7kVRBMeFcqQ&s"
        ],
        description: "Romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
        type: "Salad",
        dietaryRestrictions: ["Gluten", "Dairy"],
        ingredients: [
            "Romaine Lettuce",
            "Caesar Dressing",
            "Croutons",
            "Parmesan Cheese"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.7,
        reviews: 120,
        calories: 300,
        servingSize: "1",
        specialNotes: "Add grilled chicken for extra protein."
    },
    {
        id: 4,
        name: "Pizza",
        price: 16.00,
        images: [
            "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
            "https://publish.purewow.net/wp-content/uploads/sites/2/2022/06/best-pizza-spots-in-manhattan.jpg?resize=720%2C780"
        ],
        description: "A classic cheese pizza with tomato sauce, mozzarella, and basil.",
        type: "Entree",
        dietaryRestrictions: ["Gluten", "Dairy"],
        ingredients: [
            "Tomato Sauce",
            "Mozzarella",
            "Basil",
            "Crust"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.9,
        reviews: 160,
        calories: 550,
        servingSize: "1",
        specialNotes: "Available in different sizes."
    },
    {
        id: 5,
        name: "Tacos",
        price: 14.00,
        images: [
            "https://cookingwithcocktailrings.com/wp-content/uploads/2021/11/Birria-Tacos-114.jpg"
        ],
        description: "Three corn tortillas filled with seasoned beef, lettuce, tomato, and cheese.",
        type: "Entree",
        dietaryRestrictions: ["Gluten"],
        ingredients: [
            "Seasoned Beef",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Corn Tortillas"
        ],
        popularity: "Medium",
        recommended: false,
        rating: 4.3,
        reviews: 70,
        calories: 400,
        servingSize: "3",
        specialNotes: "Add guacamole or salsa for extra flavor."
    },
    {
        id: 6,
        name: "Spaghetti",
        price: 13.00,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSkrGJTbe-vTPmacKKcDfEZpngepqiJPNm8w&s"
        ],
        description: "Classic spaghetti with tomato sauce and Parmesan cheese.",
        type: "Pasta",
        dietaryRestrictions: ["Gluten", "Dairy"],
        ingredients: [
            "Spaghetti",
            "Tomato Sauce",
            "Parmesan Cheese"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.6,
        reviews: 110,
        calories: 500,
        servingSize: "1",
        specialNotes: "Add meatballs or sausage for extra protein."
    },
    {
        id: 7,
        name: "Chicken Wings",
        price: 11.00,
        images: [
            "https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3-500x500.jpg",
            "https://www.budgetbytes.com/wp-content/uploads/2024/01/buffalo-wings-overhead-horizontal-WR-500x500.jpg"
        ],
        description: "Crispy chicken wings served with your choice of sauce.",
        type: "Appetizer",
        dietaryRestrictions: [],
        ingredients: [
            "Chicken Wings",
            "Your Choice of Sauce"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.5,
        reviews: 90,
        calories: 450,
        servingSize: "1 lb",
        specialNotes: "Choose from BBQ, Buffalo, or Teriyaki sauce."
    },
    {
        id: 8,
        name: "Fish and Chips",
        price: 15.00,
        images: [
            "https://www.thespruceeats.com/thmb/sdVTq0h7xZvJjPr6bE2fhh5M3NI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-best-fish-and-chips-recipe-434856-hero-01-27d8b57008414972822b866609d0af9b.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfHel9GTYF86RxO4QoVlT-WR82HIS7TSX8g&s"
        ],
        description: "Crispy battered fish served with fries and tartar sauce.",
        type: "Entree",
        dietaryRestrictions: ["Gluten"],
        ingredients: [
            "Battered Fish",
            "Fries",
            "Tartar Sauce"
        ],
        popularity: "Medium",
        recommended: false,
        rating: 4.4,
        reviews: 60,
        calories: 600,
        servingSize: "1",
        specialNotes: "Available with different types of fish."
    },
    {
        id: 9,
        name: "Mac and Cheese",
        price: 9.00,
        images: [
            "https://www.allrecipes.com/thmb/e8uotDI18ieXNBY0KpmtGKbxMRM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_008-4x3-6ed91ba87a1344558aacc0f9ef0f4b41.jpg",
            "https://bakingmischief.com/wp-content/uploads/2016/08/mac-and-cheese-for-one-image.jpg"
        ],
        description: "Creamy macaroni and cheese with a crispy breadcrumb topping.",
        type: "Side",
        dietaryRestrictions: ["Gluten", "Dairy"],
        ingredients: [
            "Macaroni",
            "Cheese Sauce",
            "Breadcrumb Topping"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.7,
        reviews: 100,
        calories: 400,
        servingSize: "1",
        specialNotes: "Add bacon or jalapeños for extra flavor."
    },
    {
        id: 10,
        name: "Sliders",
        price: 12.00,
        images: [
            "https://donuts2crumpets.com/wp-content/uploads/2023/06/cheeseburger-sliders.jpg",
            "https://www.simplejoy.com/wp-content/uploads/2020/08/ham-and-cheese-sliders.jpg"
        ],
        description: "Three mini burgers with lettuce, tomato, and cheese on a brioche bun.",
        type: "Appetizer",
        dietaryRestrictions: ["Gluten"],
        ingredients: [
            "Mini Beef Patties",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Brioche Buns"
        ],
        popularity: "Medium",
        recommended: false,
        rating: 4.2,
        reviews: 70,
        calories: 350,
        servingSize: "3",
        specialNotes: "Add avocado or bacon for extra flavor."
    },
    {
        id: 11,
        name: "Chicken Caesar Wrap",
        price: 11.00,
        images: [
            "https://projectmealplan.com/wp-content/uploads/2022/09/caesar-chicken-salad-wraps-hero-side-1-scaled.jpg",
            "https://www.servedfromscratch.com/wp-content/uploads/2023/07/Chicken-Caesar-Salad-Wrap-12-500x500.jpg"
        ],
        description: "Grilled chicken, romaine lettuce, Caesar dressing, and Parmesan cheese in a wrap.",
        type: "Entree",
        dietaryRestrictions: ["Gluten"],
        ingredients: [
            "Grilled Chicken",
            "Romaine Lettuce",
            "Caesar Dressing",
            "Parmesan Cheese",
            "Wrap"
        ],
        popularity: "High",
        recommended: true,
        rating: 4.6,
        reviews: 90,
        calories: 450,
        servingSize: "1",
        specialNotes: "Add avocado or tomatoes for extra flavor."
    }
];