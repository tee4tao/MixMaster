'use client'
import React, {useEffect, useState} from 'react'
import Article from './Article'
import { useGlobalContext } from '@/app/providers'

const Drinks = ({data}) => {
    // const [drinks, setDrinks] = useState(data.drinks)
    const {drinks, setDrinks} = useGlobalContext();
    // setDrinks(data.drinks);
    // console.log(drinks);
    useEffect(()=>{
        setDrinks(data.drinks);
    },[data])
  return (
    <section className='w-full'>
      <div className='bg-white mb-8 h-12 flex items-center justify-center shadow-2xl max-w-xl mx-auto rounded'>
      <input type="text" className=' bg-gray-200 w-4/5 h-1/2 text-black' />
      <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">{drinks.map((drink)=>{
        return <Article key={drink.idDrink} {...drink}/>
    })}</div>
    </section>
  )
}

export default Drinks