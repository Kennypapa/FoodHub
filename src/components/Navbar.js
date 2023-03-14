import { Link } from "react-router-dom";
import Search from './search';
const Navbar = () => {
  return (
    <>
      <div className="h-[60px]  w-full shadow-md bg-[#030303] flex justify-between items-center px-6">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <div>
              <p className="text-white text-3xl uppercase font-[Satisfy]">
                Foodhub
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-[370px] mx-auto flex flex-row justify-between items-center pt-10 px-10 pb-10">
            <Link to={"/home"}>
                <div className="flex justify-center items-center flex-col  rounded-full w-[68px] h-[68px]">
                  <i className="fa-solid fa-house text-white mb-1"></i>
                  <h4 className="text-white text-xs">Home</h4>
                </div>
              </Link>
              <Link to={"/cuisine/Italian"}>
                <div className="flex justify-center items-center flex-col  rounded-full w-[68px] h-[68px]">
                  <i className="fa-sharp fa-solid fa-pizza-slice text-white mb-1"></i>
                  <h4 className="text-white text-xs">Italian</h4>
                </div>
              </Link>
              <Link to={"/cuisine/American"}>
                <div className="flex justify-center items-center flex-col  rounded-full w-[68px] h-[68px]">
                  <i className="fa-solid fa-burger text-white mb-1"></i>
                  <h4 className="text-white text-xs">American</h4>
                </div>
              </Link>
              <Link to={"/cuisine/Thai"}>
                <div className="flex justify-center items-center flex-col  rounded-full w-[68px] h-[68px]">
                <i className="fa-solid fa-bowl-food text-white mb-1"></i>
                  <h4 className="text-white text-xs">Thai</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Search />
      </div>
    </>
  );
};

export default Navbar;
