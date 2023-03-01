import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function NavBar() {
  const state = useSelector((state) => state.cart);

  return (
    <nav className="bg-[#171C2A] text-white py-4">
      <div className="navBar">
        <Link to="/">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/" className="navHome" id="lws-home">
            Home
          </Link>
          <Link to="/cart" className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping" />
            <span id="lws-totalCart">{state.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
