import React from 'react';
import { useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'; 
const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();
  const getCuisine = async (name) => {
    const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  }
  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type)
  },[params.type]);

  return (
    <div className='grid grid-cols-4 w-[90%] mx-auto mt-5'>
        {cuisine.map((item) => {
          return(
            <div
                className="bg-[#f6f6f6] rounded-lg h-[240px] w-[380px] mr-5 drop-shadow-md mb-16 "
                key={item.id}
              >
                <div className="w-full h-full rounded-lg relative flex justify-center items-end ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg absolute inset-0 object-cover h-[275px] w-full"
                  />
                  <div className="h-[275px] layout w-full   relative z-40 flex justify-center items-center">
                    <p className="text-white">{item.title}</p>
                  </div>
                </div>
              </div>
          )
        })}
    </div>
  )
}
export default Cuisine