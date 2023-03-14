import Popular from "../components/popular";
import Veggie from "../components/veggie";
import FirstBg from "../assets/img/FC_two_phones.webp";
const Home = () => {
  return (
    <>
      <div className="mb-20">
        <div>
          <div className="h-[100vh] bg-white w-full  flex">
            <div className="w-1/2 h-[100vh] pl-24 pt-36">
              <div>
                <div className="mb-8">
                  <h1>
                    <p
                      className="typewrite text-black text-6xl font-[Poppins] font-extrabold"
                      data-period="2000"
                      data-type='[ "Vegetables", "Chocolate Wafer", "Snacks" ]'
                    >
                      <span className="wrap"></span>
                    </p>
                  </h1>
                  <p className="text-black text-6xl font-[Poppins] font-extrabold">
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
            <div className="w-1/2 h-[100vh] flex justify-end items-center">
              <div className="w-[600px]">
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
