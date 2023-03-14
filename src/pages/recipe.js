import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
//   const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch( `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
}


useEffect(()=> {
    fetchDetails();
}, [params.name])
return (
    <div className='flex w-[80%] mx-auto mt-20'>
        <div className='w-[400px] mr-20'>
            <h2 className='text-sm mb-5'>
                {details.title}
            </h2>
            <div className='w-[400px]'>
              <img src={details.image} className='w-full h-full object-cover' alt=''/>
            </div>
        </div>
        <div>
          <div className='flex'>
              <button  className='border-black border text-xs h-[36px] w-[98px] mr-6'>Instructions</button>
              <button className='border-black border text-xs h-[36px] w-[98px]'>Incredients</button>
          </div>

          <div>
            <h3 className='text-sm'  dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 className='text-sm' dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>

          {/* <ul>
             {details.extendedIngredients.map((ingredient) => 
               <li key={ingredient.id}>{ingredient.original}</li>
             )}
          </ul> */}
        </div>
    </div>
  )
}

export default Recipe;