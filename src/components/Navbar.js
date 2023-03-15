import { Link } from "react-router-dom";
import Search from './search';
const Navbar = () => {
  return (
    <>
      <div className="h-[60px]  w-full shadow-md bg-[#030303] flex justify-between items-center px-6">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center">
            <div>
              <p className="text-white md:text-3xl sm:text-xl uppercase font-[Satisfy]">
                Foodhub
              </p>
            </div>
          </div>
          <div className="lg:flex justify-between items-center w-[90%] hidden">
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

            <Search />
          </div>
          {/*========Toggle-btn============*/}
          <div className="lg:hidden block">
          <i class="fa-solid fa-bars text-white"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
