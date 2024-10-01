const Header = () => (
  <header className="text-gray-700 border-b border-gray-200 sticky inset-0 z-50 bg-white">
    <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
      <a
        href="/"
        className="font-medium text-gray-900 hover:text-blue-400 duration-300"
      >
        <span className="text-xl">Tommy-React</span>
      </a>
      <nav className="md:ml-auto text-base mt-4 md:mt-0 grid grid-flow-col gap-3">
        <a href="#home" className="hover:text-blue-400 duration-300">
          Home
        </a>
        <a href="#about" className=" hover:text-blue-400 duration-300">
          About
        </a>
        <a href="#skills" className="hover:text-blue-400 duration-300">
          Skills
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
