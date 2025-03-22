import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg py-4 px-8 flex justify-between items-center fixed w-full top-0 z-50 border-b border-gray-700">
      {/* Logo */}
      <div className="text-3xl font-extrabold text-blue-400">
        <Link to="/" className="focus:outline-none">Collab<span className="text-white">AI</span></Link>
      </div>
      
      
      <div className="flex gap-6 items-center" >
        <Link to="/login" className="text-gray-300 font-medium hover:text-blue-400 transition duration-300 focus:outline-none">Login</Link>
        <Link to="/signup" className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
