import { useState } from "react"

interface Coin {
  uuid: string,
  name: string,
  price:string,
  iconUrl:string,
}

interface Props{
  getSearchResults: (result:Coin[]) => void
}

const SearchCoins = ({getSearchResults}:Props) => {
  const [query,setQuery] = useState("")

  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault()

    const response = await fetch(`/api/coins/search?query=${query}`)

    const results = await response.json()

    getSearchResults(results)
  }

  return (
    <div className="mt-10 mb-10">
      <h1 className="text-white">Search Coins</h1>
      <form onSubmit={handleSubmit} className="">
        <input className="text-black border-2 border-white rounded-full px-3 py-2" type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button className="text-white py-2 px-4 bg-purple-500" type="submit" >Search</button>
      </form>
    </div>
  )
}

export default SearchCoins