import Link from "next/link";
import Container from "./ui/Container";
import PrimaryNav from "./PrimaryNav";
import getCategories from "@/actions/getCategories";
import NavbarActions from "./NavbarActions";

const Navbar = async() => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">MY STORE</p>
          
          </Link>
          <PrimaryNav data={categories}/>
          <NavbarActions/>
        </div>
      </Container>
    </div>
  );
};
export default Navbar;