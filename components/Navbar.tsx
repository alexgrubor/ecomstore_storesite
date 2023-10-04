import Container from "./ui/Container";
import getCategories from "@/actions/getCategories";
import Menu from "./Menu";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <Menu categories={categories} />
      </Container>
    </div>
  );
};
export default Navbar;
