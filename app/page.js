import Drinks from "@/components/Drinks";
import Navbar from "@/components/Navbar";
import Image from "next/image";

// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
let searchTerm = ''
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`

const fetchDrinks = async () => {
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`Something went wrong, ${resp.status}`);
  }
  let data = await resp.json();
  return data;
};

const Home= async() => {
const data = await fetchDrinks();
  return (
    <main className="flex flex-col container w-screen items-center p-24">
      <Drinks data={data} searchTerm={searchTerm} />
    </main>
  );
}
export default Home;