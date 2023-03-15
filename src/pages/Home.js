import Popular from "../components/popular";
import Veggie from "../components/veggie";
import FirstBg from "../assets/img/FC_two_phones.webp";
const Home = () => {
  return (
    <>
      <div className="mb-20">
        <div>
          <div className="bg-white w-full  lg:flex block justify-between items-center">
            <div className="lg:w-1/2 w-full lg:h-[100vh] h-auto lg:pl-24 pl-8 lg:pt-40 pt-20">
              <div>
                <div className="mb-8">
                  <h1>
                    <p
                      className="typewrite text-black lg:text-6xl text-5xl  font-[Poppins] font-extrabold"
                      data-period="2000"
                      data-type='[ "Vegetables", "Chocolate Wafer", "Snacks" ]'
                    >
                      <span className="wrap"></span>
                    </p>
                  </h1>
                  <p className="text-black lg:text-6xl text-5xl font-[Poppins] font-extrabold">
                    on-demand.
                  </p>
                </div>

                <p className="font-[Poppins] text-xl text-black font-[600] mb-3">
                  Find out your Delicious meals and drinks
                </p>

                <div className="flex justify-start items-center">
                  <span>
                    <p className="font-[Poppins] text-base text-black font-[400] mb-1">
                      {" "}
                      Created By:
                    </p>
                  </span>
                  <div className="w-[30px] h-[30px] flex ml-2 justify-center items-center font-[600] bg-[#e60a2b] text-white">
                    K
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 lg:h-[100vh] h-auto lg:flex hidden justify-end items-center">
              <div className="w-[600px] relative -top-20">
                <img src={FirstBg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Veggie />
        <Popular />
      </div>
    </>
  );
};
export default Home;
