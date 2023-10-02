import Container from "@/components/ui/Container";
import Billboard from "@/components/ui/Billboard";
import getBillboard from "@/actions/getBillboard";
import ProductList from "@/components/ProductList";
import getProducts from "@/actions/getProducts";

export const revalidate = 0;

const Home = async () => {
  const billboard = await getBillboard("0b2f23c5-fba9-4feb-8ccd-e3c3477e77b3");
  const products = await getProducts({ isFeatured: true });
 
  
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
