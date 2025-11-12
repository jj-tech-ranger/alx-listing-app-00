const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">ALX Listing</div>
          <div className="flex items-center gap-6">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg"
            />
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600">Sign In</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign Up</button>
          </div>
        </div>
        <nav className="mt-4 flex gap-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Rooms</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Mansion</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Countryside</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
