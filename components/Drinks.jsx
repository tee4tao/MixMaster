'use client'
import React, {useState} from 'react'
import Article from './Article'

const Drinks = ({data}) => {
    const [drinks, setDrinks] = useState(data.drinks)
    console.log(drinks);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">{drinks.map((drink)=>{
        return <Article key={drink.idDrink} {...drink}/>
    })}</div>
  )
}

export default Drinks