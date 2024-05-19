'use client'
import React,{useEffect, useRef, useState} from 'react'
import Link from 'next/link'

const SearchForm = () => {
    let refContainer = useRef(null);
    let [inputValue, setInputValue] = useState('');
    function searchCocktail() {
        setInputValue(refContainer.current.value)
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue(refContainer.current.value)
      }
      useEffect(()=>{
        refContainer.current.focus()
      },[])
  return (
    <form className='bg-white mb-8 h-12 flex items-center justify-center shadow-2xl max-w-xl mx-auto rounded w-full' onSubmit={handleSubmit}>
    <input type="text" className=' bg-gray-200 w-4/5 h-1/2 text-black' ref={refContainer} /*onChange={(e) => setSearchTerm(e.target.value)}*/ onChange={searchCocktail} />
    <Link href={`/search/${inputValue}`} type='submit' className="btn btn-ghost btn-circle">
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
      </Link>
    </form>
  )
}

export default SearchForm