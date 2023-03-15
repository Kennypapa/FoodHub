import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
const Popular = () => {
  const [popular, setPopular] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };
  useEffect(() => {
    getPopular();
  }, []);
  return (
    <div className="pt-8">
      <section>
        <div className="flex justify-start items-center">
          <p className="text-xl text-[#030303] pl-8 mr-5">Popular Picks</p>
          <span className="bg-[#030303] text-white text-xs rounded-md h-[25px] px-2 flex justify-center items-center">
            For You
          </span>
        </div>
        <div className="w-[94%] mx-auto food_wrap">
          <Carousel
            autoPlay={true}
            infinite={true}
            transitionDuration={100}
            responsive={responsive}
          >
            {popular.map((recipe) => (
              <div
                className="bg-[#f6f6f6] rounded-lg  h-[330px] w-[280px] border mx-auto food_box !mb-5"
                key={recipe.id}
              >
                <Link to={"/recipe/" + recipe.id}>
                  <div className="w-full h-[230px] relative flex justify-center items-end ">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className=" absolute inset-0 object-cover h-full w-full"
                    />
                  </div>
                  <div className=" layout w-full z-40 flex justify-center items-center pl-2 pt-2">
                    <p className="text-sm">{recipe.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};
export default Popular;
