import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopSticks} from 'react-icons/gi';

import React from 'react'

const  Category = ( ) => {
  return (
    <div>
        <div>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </div>
        <div>
            <FaPizzaSlice />
            <h4>American</h4>
        </div>
        <div>
            <FaPizzaSlice />
            <h4>Thai</h4>
        </div>
        <div>
            <FaPizzaSlice />
            <h4>Japanese</h4>
        </div>
    </div>
  )
}

export default Category