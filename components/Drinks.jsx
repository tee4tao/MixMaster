'use client'
import React, {useEffect, useState, useRef,} from 'react'
import Article from './Article'
import Link from 'next/link'
import SearchForm from './SearchForm'

const Drinks = ({data}) => {
  const {drinks} = data
  return (
    <section className='w-full'>
      <SearchForm/>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">{drinks.map((drink)=>{
        return <Article key={drink.idDrink} {...drink}/>
    })}</div>
    </section>
  )
}

export default Drinks