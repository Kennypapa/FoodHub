import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="h-[60px]  w-full shadow-md bg-[#030303] flex justify-between items-center px-20">
        <div className="flex justify-center items-center">
          {/* <div className="rounded-full w-[40px] h-[40px] relative mr-7 cursor-pointer" id="nav-toggler">
                         <div className="w-[30px] bg-white h-[1px]  absolute top-2 left-1"></div>
                         <div className="w-[30px] bg-white h-[1px]  absolute top-4 left-1"></div>
                         <div className="w-[30px] bg-white h-[1px]  absolute top-6 left-1"></div>
                    </div> */}
          <div>
            <p className="text-white text-3xl uppercase font-[Satisfy]">
              Foodhub
            </p>
          </div>
        </div>
        <div className="flex ">
            <div className="w-[370px] mx-auto flex flex-row justify-between items-center pt-10 px-10 pb-10">
              <Link to={"/cuisine/Italian"}>
                <div className="flex justify-center items-center flex-col  rounded-full w-[68px] h-[68px]">
                  <i className="fa-sharp fa-solid fa-pizza-slice text-white"></i>
                  <h4 className="text-white text-xs">Italian</h4>
                </div>
              </Link>
              <Link to={"/cuisine/American"}>
                <div className="flex justify-center items-center flex-col  rounded-full w-[68px] h-[68px]">
                  <i className="fa-solid fa-burger text-white"></i>
                  <h4 className="text-white text-xs">American</h4>
                </div>
              </Link>
              <Link to={"/cuisine/Thai"}>
                <div className="flex justify-center items-center fleax-col  rounded-full w-[68px] h-[68px]">
                  <i className="fa-solid fa-bowl-chopsticks-noodles text-white"></i>
                  <h4 className="text-white text-xs">Thai</h4>
                </div>
              </Link>
            </div>
          </div>
        <div className="flex justify-end items-center">
          <div className="w-[400px]">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#030303] focus:border-[#030303] block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-[#030303] rounded-lg border border-[[#030303]] hover:bg-[#030303] focus:ring-4 focus:outline-none focus:ring-[#030303]"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
