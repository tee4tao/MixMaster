import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Article from '@/components/Article';
import SearchForm from '@/components/SearchForm';
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
const searchDrinks = async (search) => {
  const resp = await fetch(url+search);
  if (!resp.ok) {
        throw new Error(`Something went wrong, ${resp.status}`);
      }
 const data = await resp.json();
 return data;
}
const page = async({params}) => {
  const data = await searchDrinks(params.inputValue);
  const {drinks} = data
  console.log(drinks);
  if (!drinks) {
    return(
    <section className='w-screen flex flex-col items-center'>
    <div className='mt-24 font-bold text-2xl'>No Matching Cocktails Found...</div>
     <Link href={"/"} className='btn btn-sm btn-ghost mt-4 border-white'>Back Home</Link>
    </section>)
  }
  return (
    <main className='flex flex-col container w-screen items-center p-24'>
      <SearchForm/>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">{drinks.map((drink)=>{
      return <Article key={drink.idDrink} {...drink}/>
  })}</div>
  </main>
  )
}

export default page