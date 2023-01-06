import { useEffect, useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Popular = () => {
    const [popular, setPopular] = useState([])
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    useEffect(() => {
        getPopular();
    }, [])
    const getPopular = async () =>
    {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        setPopular(data.recipes)
        console.log(data);
    }
    return (
        <div className="pt-8">
            <section>
                <div className="flex justify-start items-center">
                  <p className="text-3xl text-[#030303] pl-8 mr-5">Top Featured Products</p>
                   <span className="bg-[#030303] text-white text-xs rounded-md h-[25px] px-2 flex justify-center items-center">For You</span>
                </div>
                <Carousel autoPlay={true} infinite={true} transitionDuration={100} responsive={responsive}>
                    {
                        popular.map((recipe)=> (
                            <div className="bg-[#f6f6f6] rounded-lg h-[290px] w-[90%] mx-auto p-2" key={key.id}>
                                <div className="w-full h-[275px] rounded-lg relative flex justify-center items-end ">
                                    <img src={recipe.image} alt={recipe.title} className='rounded-lg absolute inset-0 object-cover h-[275px] w-full' />
                                    <div className="h-[275px] layout w-full   relative z-40 flex justify-center items-center">
                                    <p className="text-white">{recipe.title}</p>
                                    </div>
                                </div>
                            </div> 
                        ))
                    }
                
                </Carousel>
           </section>
        </div>
    )
}
export default Popular;