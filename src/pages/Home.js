import FirstBg from '../assets/img/FC_two_phones.webp';
import Popular from "../components/popular";
import Veggie from "../components/veggie";

const Home = () => {
    return (
        <>
            <div className=" layout">
                 <div className="h-[100vh] bg-white w-full first-bg flex ">
                    <div className="w-1/2 h-[100vh] pl-32 pt-20">
                        <div>
                            <div className=' mb-40'>
                                <p className='text-white text-5xl uppercase font-[Satisfy]'>Foodhub</p>
                            </div>
                            <p className='font-[Poppins] text-xl text-white font-[600] mb-3'>Delicious meals and drinks delivered to your doorstep!</p>
                            <p className='font-[Poppins] text-base text-white font-[400] mb-1'> Created By:</p>
                            <div className='w-[30px] h-[30px] flex justify-center items-center font-[600] bg-[#e60a2b] text-white'>
                                K
                            </div>
                       </div>
                    </div>
                    <div className="w-1/2 h-[100vh] flex justify-end items-center">
                        <div className='w-[600px]'>
                         <img src={FirstBg} alt="" />
                       </div>
                    </div>
                 </div>
                <Veggie />
                <Popular />
            </div>  
        </>
    )
}
export default Home;