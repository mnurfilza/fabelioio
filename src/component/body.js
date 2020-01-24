import React, { useState } from 'react'
import Header from './header.js';


export default function Body() {
    const [data , setData] = useState([])

    const filterData = (newValue) => {
        console.log(newValue)
    }
    return (
        <div>
            <Header filter={filterData}/>
        </div>
    )
}
