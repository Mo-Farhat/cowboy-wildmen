export const MOCK_HEROES = [
    {
        _id: "hero-1",
        seasonTitle: "The Shop Provision",
        mainHeading: "CURATED FOR THE WILD.",
        subheading: "High-spec silhouettes and limited statement pieces. Built to outlast the pavement.",
        heroImage: { asset: { url: "/cowboy-shop.jpeg" } },
        primaryButtonText: "Scout All Gear",
        primaryButtonLink: "/shop",
        secondaryButtonText: "View Trophies",
        secondaryButtonLink: "/shop"
    }
];

const MOCK_PRODUCTS = [
    {
        _id: "p1",
        name: "Viscose Geometric Shirt",
        price: 85,
        slug: { current: "viscose-geometric-shirt" },
        images: [{ asset: { url: "/images/western_chic_patterned_shirt.png" } }],
        category: { title: "Designer Shirts" },
        stock: 10,
        variantInfo: "Designer Shirt"
    },
    {
        _id: "p2",
        name: "Premium Lace Button-Down",
        price: 95,
        slug: { current: "premium-lace-button-down" },
        images: [{ asset: { url: "/images/western_chic_party_wear_lace.png" } }],
        category: { title: "Party Wears" },
        stock: 5,
        variantInfo: "Party Wear"
    },
    {
        _id: "p3",
        name: "Midnight Varsity Jacket",
        price: 150,
        slug: { current: "midnight-varsity-jacket" },
        images: [{ asset: { url: "/images/western_chic_varsity_jacket.png" } }],
        category: { title: "Varsity Jackets" },
        stock: 8,
        variantInfo: "Outerwear"
    },
    {
        _id: "p4",
        name: "Slim Fit Western Trouser",
        price: 110,
        slug: { current: "slim-fit-western-trouser" },
        images: [{ asset: { url: "/images/western_chic_pants_stylish.png" } }],
        category: { title: "Pants" },
        stock: 12,
        variantInfo: "Bottoms"
    },
    {
        _id: "p5",
        name: "Essential Premium Polo",
        price: 65,
        slug: { current: "essential-premium-polo" },
        images: [{ asset: { url: "/images/western_chic_polo_fitted.png" } }],
        category: { title: "Polos" },
        stock: 20,
        variantInfo: "Tops"
    },
    {
        _id: "p6",
        name: "Structured Crew Neck",
        price: 75,
        slug: { current: "structured-crew-neck" },
        images: [{ asset: { url: "/images/western_chic_sweatshirt_premium.png" } }],
        category: { title: "Sweatshirts" },
        stock: 15,
        variantInfo: "Essentials"
    },
    {
        _id: "p7",
        name: "Classic Silk Pattern Shirt",
        price: 120,
        slug: { current: "classic-silk-pattern-shirt" },
        images: [{ asset: { url: "/images/western_chic_patterned_shirt.png" } }],
        category: { title: "Designer Shirts" },
        stock: 4,
        variantInfo: "Designer Shirt"
    },
    {
        _id: "p8",
        name: "Western Night Blazer",
        price: 180,
        slug: { current: "western-night-blazer" },
        images: [{ asset: { url: "/images/western_chic_varsity_jacket.png" } }],
        category: { title: "Party Wears" },
        stock: 3,
        variantInfo: "Nightwear"
    }
];

export const MOCK_SHOWCASES = [
    {
        _id: "showcase-1",
        title: "THE NIGHT EDIT",
        subtitle: "Statement pieces built for the after-hours.",
        backgroundColor: "cream",
        products: MOCK_PRODUCTS.slice(0, 4),
        ctaText: "Explore Night Wear",
        ctaLink: "/shop"
    }
];

export const MOCK_PROMO_BANNERS = [
    {
        _id: "promo-1",
        placement: "promo-left",
        title: "Designer Shirts",
        description: "Bold patterns. Premium viscose.",
        image: { asset: { url: "/images/western_chic_patterned_shirt.png" } },
        ctaText: "View Collection",
        ctaLink: "/shop"
    },
    {
        _id: "promo-2",
        placement: "promo-top-right-1",
        title: "Party Wear",
        image: { asset: { url: "/images/western_chic_party_wear_lace.png" } },
        ctaText: "Shop Now",
        ctaLink: "/shop"
    },
    {
        _id: "promo-3",
        placement: "promo-top-right-2",
        title: "Premium Knits",
        image: { asset: { url: "/images/western_chic_polo_fitted.png" } },
        ctaText: "Explore",
        ctaLink: "/shop"
    },
    {
        _id: "promo-4",
        placement: "promo-bottom-right",
        title: "Essential Bottoms",
        description: "Tailored fits for the city.",
        image: { asset: { url: "/images/western_chic_pants_stylish.png" } },
        ctaText: "Scout Pants",
        ctaLink: "/shop"
    }
];

export const MOCK_MID_BANNERS = [
    {
        _id: "mid-1",
        placement: "mid-left",
        title: "Premium Varsity",
        description: "Classic silhouettes, elevated materials.",
        image: { asset: { url: "/images/western_chic_varsity_jacket.png" } },
        ctaText: "View Jackets",
        ctaLink: "/shop"
    },
    {
        _id: "mid-2",
        placement: "mid-right",
        title: "The Accessories",
        description: "Complete the look with western details.",
        image: { asset: { url: "/images/western_chic_patterned_shirt.png" } },
        ctaText: "Shop Details",
        ctaLink: "/shop"
    }
];

export const MOCK_CATEGORIES = [
    { _id: "cat-1", title: "Polos", slug: { current: "polos" }, image: { asset: { url: "/images/western_chic_polo_fitted.png" } }, description: "Fitted, sharp, premium texture." },
    { _id: "cat-2", title: "Pants", slug: { current: "pants" }, image: { asset: { url: "/images/western_chic_pants_stylish.png" } }, description: "Clean cut, western-inspired trousers." },
    { _id: "cat-3", title: "Sweatshirts", slug: { current: "sweatshirts" }, image: { asset: { url: "/images/western_chic_sweatshirt_premium.png" } }, description: "Minimal, structured premium fabrics." },
    { _id: "cat-4", title: "Designer Shirts", slug: { current: "designer-shirts" }, image: { asset: { url: "/images/western_chic_patterned_shirt.png" } }, description: "Bold patterns and premium textures." },
    { _id: "cat-5", title: "Varsity Jackets", slug: { current: "varsity-jackets" }, image: { asset: { url: "/images/western_chic_varsity_jacket.png" } }, description: "Clean classics in premium materials." },
    { _id: "cat-6", title: "Party Wears", slug: { current: "party-wears" }, image: { asset: { url: "/images/western_chic_party_wear_lace.png" } }, description: "Statement pieces for the after-hours." }
];

export const MOCK_ALL_PRODUCTS = MOCK_PRODUCTS;
export const MOCK_NEW_ARRIVALS = MOCK_PRODUCTS.slice(0, 4);
export const MOCK_BEST_SELLING = MOCK_PRODUCTS.slice(4, 8);
export const MOCK_TOP_RATED = MOCK_PRODUCTS.slice(2, 6);
