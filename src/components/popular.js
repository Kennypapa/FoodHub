import { useEffect } from "react";
const Popular = () => {
    useEffect(()=> {
        getPopular();   
    }, [])
    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        console.log(data);
    }

    return( 
        <div className="">

        </div>
    )
}

export default Popular