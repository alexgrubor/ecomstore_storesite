import ProductList from "@/components/ProductList";
import getProducts from "@/actions/getProducts";
import getProduct from "@/actions/getProduct";
import Container from "@/components/ui/Container";
import Gallery from "@/components/gallery";
import Info from "@/components/Info";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}
const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  const fillteredSuggested = suggestedProducts.filter(
    (product) => product.id !== params.productId
  );
  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={fillteredSuggested} />
        </div>
      </Container>
    </div>
  );
};
export default ProductPage;
