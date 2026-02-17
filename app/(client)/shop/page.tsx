import {
  MOCK_HEROES,
  MOCK_SHOWCASES,
  MOCK_PROMO_BANNERS,
  MOCK_MID_BANNERS,
  MOCK_NEW_ARRIVALS,
  MOCK_BEST_SELLING,
  MOCK_TOP_RATED,
  MOCK_CATEGORIES,
  MOCK_ALL_PRODUCTS,
} from "@/constants/mockShopData";
import ShopHero from "@/components/shop/ShopHero";
import ProductShowcaseRow from "@/components/shop/ProductShowcaseRow";
import PromotionalSection from "@/components/shop/PromotionalSection";
import FeaturedProducts from "@/components/shop/FeaturedProducts";
import MidPageBanners from "@/components/shop/MidPageBanners";
import FeaturedCategories from "@/components/shop/FeaturedCategories";
import AllProductsSection from "@/components/shop/AllProductsSection";

const ShopPage = async () => {
  /* Commenting out Sanity content temporarily per user request
  const [
    heroes,
    showcases,
    promoBanners,
    midPageBanners,
    newArrivals,
    bestSelling,
    topRated,
    categories,
    allProducts,
  ] = await Promise.all([
    client.fetch(SHOP_HERO_QUERY),
    client.fetch(PRODUCT_SHOWCASE_QUERY),
    client.fetch(PROMO_GRID_BANNERS_QUERY),
    client.fetch(MID_PAGE_BANNERS_QUERY),
    client.fetch(NEW_ARRIVALS_QUERY),
    client.fetch(BEST_SELLING_QUERY),
    client.fetch(TOP_RATED_QUERY),
    client.fetch(FEATURED_CATEGORIES_QUERY),
    client.fetch(ALL_PRODUCTS_QUERY),
  ]);
  */

  // Using mock data instead
  const heroes = MOCK_HEROES;
  const showcases = MOCK_SHOWCASES;
  const promoBanners = MOCK_PROMO_BANNERS;
  const midPageBanners = MOCK_MID_BANNERS;
  const newArrivals = MOCK_NEW_ARRIVALS;
  const bestSelling = MOCK_BEST_SELLING;
  const topRated = MOCK_TOP_RATED;
  const categories = MOCK_CATEGORIES;
  const allProducts = MOCK_ALL_PRODUCTS;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <ShopHero heroes={heroes as any} />

      {/* Product Showcase Sections (Seasonal/Offers) */}
      <ProductShowcaseRow showcases={showcases as any} />

      {/* Promotional Grid Section */}
      <PromotionalSection banners={promoBanners as any} />

      {/* Featured Products with Tabs */}
      <FeaturedProducts
        newArrivals={newArrivals as any}
        bestSelling={bestSelling as any}
        topRated={topRated as any}
      />

      {/* Mid-Page Banners */}
      <MidPageBanners banners={midPageBanners as any} />

      {/* All Products Section with Category Filter */}
      <AllProductsSection categories={categories as any} initialProducts={allProducts as any} />

      {/* Featured Categories */}
      <FeaturedCategories categories={categories as any} />
    </div>
  );
};

export default ShopPage;

