import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const singleDrink = async (id) => {
    const resp = await fetch(url+id);
   const data = await resp.json();
   return data;
}

const page = async({params}) => {
    const data = await singleDrink(params.id); 
    const ingredients = [
      data.drinks[0].strIngredient1,
      data.drinks[0].strIngredient2,
      data.drinks[0].strIngredient3,
      data.drinks[0].strIngredient4,
      data.drinks[0].strIngredient5,
    ]
  return (
    <main className="container w-screen flex flex-col items-center p-8">
      <div className='flex flex-col mb-6'>
      <Link href={"/"} className='btn btn-sm btn-ghost mb-4'>Back Home</Link>
      <h1 className="text-4xl font-bold">Cocktail</h1>
      </div>
      <div className="flex flex-col items-center md:flex-row max-w-4xl">
        <Image src={data.drinks[0].strDrinkThumb} alt={data.drinks[0].strDrink} width={300} height={300} className="w-full  object-cover rounded-md md:h-96 md:w-96 mb-9" priority />
        <div className="flex items-start flex-col md:ml-6 space-y-2 md:h-96 md:justify-center md:space-y-6">
        <p><span className='bg-white text-black inline-block px-1 text-center rounded-md mr-2'>Name:  </span> <span className='font-bold'>{data.drinks[0].strDrink}</span></p>
        <p><span className='bg-white text-black inline-block px-1 text-center rounded-md mr-2'>Glass:  </span><span className='font-bold'>{data.drinks[0].strGlass}</span></p>
        <p><span className='bg-white text-black inline-block px-1 text-center rounded-md mr-2'>Info:  </span><span className='font-bold'>{data.drinks[0].strAlcoholic}</span></p>
        <p><span className='bg-white text-black inline-block px-1 text-center rounded-md mr-2'>Ingredients:  </span><span className='font-bold'> {ingredients.map((item, index) => {
                return item ? <span key={index}> {item},</span> : null
              })}</span></p>
        <p><span className='bg-white text-black inline-block px-1 text-center rounded-md mr-2'>Instructions:  </span><span className='font-bold'>{data.drinks[0].strInstructions}</span></p>
        </div>
      </div>
    </main>
  )
}

export default page