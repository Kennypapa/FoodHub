// import { Link } from 'react-router-dom';
// import React from 'react'
const  Category = ( ) => {
  return (
    <div className='flex w-full'>
        <div className='w-[400px] border-2 border-t-0 border-[#be3bd1] mx-auto flex justify-between items-center pt-10 px-10 pb-10'>
            {/* <Link to={'/cuisine/Italian'}>
                <div className='flex justify-center items-center flex-col'>
                <i className="fa-sharp fa-solid fa-pizza-slice"></i>
                    <h4>Italian</h4>
                </div>
            </Link>
            <Link to={'/cuisine/Italian'}>
                <div  className='flex justify-center items-center flex-col'>
                   <i className="fa-solid fa-burger"></i>
                    <h4>American</h4>
                </div>
            </Link> */}
            <Link to={""}>
                {/* <div  className='flex justify-center items-center fleax-col'>
                    <i className="fa-solid fa-bowl-chopsticks-noodles"></i>
                    <h4>Thai</h4>
                </div> */}
            </Link>
        </div>
       
    </div>
  )
}

export default Category;