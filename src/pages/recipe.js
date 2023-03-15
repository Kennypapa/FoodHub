import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  //   const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <div className="lg:flex block lg:w-[80%] w-[96%] mx-auto mt-20">
      <div className="sm:w-[400px] w-full mr-20 mb-10">
        <h2 className="text-sm mb-5">{details.title}</h2>
        <div className="sm:w-[400px] w-full">
          <img
            src={details.image}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="mb-20">
        <div class="mb-4">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                className="border-black border text-xs h-[36px] w-[98px] mr-6 hover:bg-black hover:text-white " 
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                className="border-black border text-xs h-[36px] w-[98px] hover:bg-black hover:text-white"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Dashboard
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
        </div>

        <div>
          <h3
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: details.summary }}
          ></h3>
          <h3
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: details.instructions }}
          ></h3>
        </div>

        {/* <ul>
             {details.extendedIngredients.map((ingredient) => 
               <li key={ingredient.id}>{ingredient.original}</li>
             )}
          </ul> */}
      </div>
    </div>
  );
};

export default Recipe;
