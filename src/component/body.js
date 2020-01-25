import React, { useState, useEffect } from 'react'
import Header from './header.js';


export default function Body() {
    const [data , setData] = useState([])

    useEffect(() => {
        fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
        .then(res =>{
            return res.json()
        })
        .then(response =>{
            setData(response.products)
        })
        }, [])


    const filterData = (newValue) => {
        console.log(newValue)
    }

    console.log(data)
    return (
        <div>
            <Header filterData={filterData}/>
        </div>
    )
}
