import React from 'react'
import Image from 'next/image'

const Article = ({idDrink, strAlcoholic, strDrink, strGlass, strDrinkThumb}) => {
  return (
    <article className="card card-compact w-full bg-base-100 shadow-xl ">
  <figure><Image height={300} width={300} src={strDrinkThumb} alt={strDrink} priority className='w-full object-cover' /></figure>
  <div className="card-body">
    <h2 className="card-title">{strDrink}</h2>
    <p>{strGlass}</p>
    <p>{strAlcoholic}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-sm btn-primary">Details</button>
    </div>
  </div>
</article>
  )
}

export default Article