import { SlBasket } from "react-icons/sl";

const NavBar = ({ cartCount }) => {
  return (
    <div className= "bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="navbar container w-7xl mx-auto py-4">
      <div className="navbar-start">
        <h1 className="font-bold text-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8 font-medium text-gray-600">
            <li className="cursor-pointer hover:text-black">Products</li>
            <li className="cursor-pointer hover:text-black">Features</li>
            <li className="cursor-pointer hover:text-black">Pricing</li>
            <li className="cursor-pointer hover:text-black">Testimonials</li>
            <li className="cursor-pointer hover:text-black">FAQ</li>
        </ul>
      </div>

      <div className="navbar-end gap-6 flex items-center">
        <div className="relative cursor-pointer group">
          <SlBasket className="text-2xl text-gray-700 group-hover:text-[#4F39F6] transition-colors" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
              {cartCount}
            </span>
          )}
        </div>

        <a href="" className="font-medium text-gray-700 hover:text-black">Login</a>
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full font-semibold text-white px-6 border-none">
            Get Started
        </button>
      </div>
    </div>
    </div>
  );
};

export default NavBar;