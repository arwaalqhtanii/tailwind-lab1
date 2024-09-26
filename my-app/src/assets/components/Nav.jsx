const Navbar = () => {
    return (
      <nav className="bg-yellow-500 text-black font-bold text-sm uppercase tracking-wider fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-center items-center">
          <ul className="flex space-x-6 py-2">
            <li className="hover:text-gray-800 cursor-pointer">All Categories</li>
            <li className="hover:text-gray-800 cursor-pointer">Today Deals</li>
            <li className="hover:text-gray-800 cursor-pointer">Electronics</li>
            <li className="hover:text-gray-800 cursor-pointer">Clothings</li>
            <li className="hover:text-gray-800 cursor-pointer">Computers</li>
            <li className="hover:text-gray-800 cursor-pointer">Furnitures</li>
            <li className="hover:text-gray-800 cursor-pointer">Mom & Baby</li>
            <li className="hover:text-gray-800 cursor-pointer">Books & More</li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  