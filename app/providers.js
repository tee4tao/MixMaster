/**********************************
 =================================
Didn't later make use of this useContext API, just leave it for reference purposes.
 ================================
 */


'use client'
import { createContext, useContext, useState, useEffect, useCallback } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  let [searchTerm, setSearchTerm] = useState('a');
  const [loading, setLoading] = useState(true)
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
  // const fetchDrinks = useCallback( async () => {
  //   try {
  //     const response = await fetch(url+searchTerm)
  //     const data = await response.json()
  //     // console.log(data);
  //     const { drinks } = data
  //     if (drinks) {
  //      setDrinks(drinks)
  //     } else {
  //       setDrinks([])
  //     }
  //     setLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //     setLoading(false)
  //   }
  // },[searchTerm])
  // useEffect(() => {
  //   fetchDrinks()
  // }, [searchTerm,fetchDrinks])
  return (
    <AppContext.Provider
      // value={{
      //   drinks, setDrinks, searchTerm, setSearchTerm, loading
      // }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};