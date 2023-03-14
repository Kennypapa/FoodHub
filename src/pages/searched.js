import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="grid grid-cols-3 w-[70%] mx-auto mt-5">
      {searchedRecipes.map((item) => {
        return (
          <Link to={'/recipe/' + item.id}>
            <div
                className="bg-[#f6f6f6] rounded-lg  h-[330px] w-[280px] border mx-auto  food_box !mb-5"
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

export default Searched;
