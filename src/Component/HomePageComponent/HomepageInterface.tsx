import { Link } from "react-router-dom";

const HomepageInterface = () => {
  return (
    <>
      <nav className="bg-blue-600 p-4 flex justify-between items-center">
        <img src="./assets/LoginPageAssets/1.png" alt="Logo" className="h-8" />
        <ul className="flex space-x-4">
          <li className="text-white font-semibold hover:bg-blue-500 p-2 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white font-semibold hover:bg-blue-500 p-2 rounded">
            <Link to="/register">Register</Link>
          </li>

          <li className="text-white font-semibold hover:bg-blue-500 p-2 rounded">
            <Link to="/login">Login</Link>
          </li>

        </ul>
      </nav>
      
      <div className="h-screen w-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
        <label className="text-3xl">Welcome Everyone</label>
      </div>
      <Link to="/register">
        <p className="text-center hover:underline font-small text-gray-500"></p>
      </Link>
    </>
  );
};

export default HomepageInterface;
