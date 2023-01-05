import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home = () => {
   return (
      <>
        <div className="h-[100vh]">
          <div className="layout absolute h-[100vh] w-full inset-0 layout hidden"></div>
          <OwlCarousel item='3' autoplay className='owl-theme' items='3' margin={3} loop nav dots>
              <div className="w-[300px] h-[400px] bg-yellow-300">

              </div>
              <div className="w-[300px] h-[400px] bg-yellow-300">

              </div>
              <div className="w-[300px] h-[400px] bg-yellow-300">

              </div>
              <div className="w-[300px] h-[400px] bg-yellow-300">

              </div>
          </OwlCarousel>
        </div>
      </>
   )
}

export default Home;