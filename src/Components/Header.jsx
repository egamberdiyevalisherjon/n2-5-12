import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link to={"/main/"}>Home</Link>
          <Link to={"/main/about"}>About</Link>
          <Link to={"/main/contact"}>Contact</Link>
          <Link to={"/sdk"}>not found</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
