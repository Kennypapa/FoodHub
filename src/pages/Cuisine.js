import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    const check = localStorage.getItem("cuisine");
    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      );
      const recipes = await data.json();
      localStorage.setItem("cuisine", JSON.stringify(recipes.results));
      setCuisine(recipes.results);
    }
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <div className="grid grid-cols-3 w-[70%] mx-auto mt-5">
      {cuisine.map((item) => {
        return (
          <Link to={'/recipe/' + item.id}>
            <div
              className="bg-[#f6f6f6] rounded-lg  h-[330px] w-[280px] border mx-auto  food_box !mb-5 mb-5"
              key={item.id}
            >
              <div className="w-full h-[230px] relative flex justify-center items-end ">
                <img
                  src={item.image}
                  alt={item.title}
                  className=" absolute inset-0 object-cover h-full w-full"
                />
              </div>
              <div className=" layout w-full z-40 flex justify-center items-center pl-2 pt-2">
                <p className="text-sm">{item.title}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Cuisine;
