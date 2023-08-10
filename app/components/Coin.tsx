import Image from "next/image"

interface Coin {
  uuid:string,
  name:string,
  price:string,
  iconUrl:string
}

interface CoinProps {
  coins:Coin[]
}


const CoinComponent : React.FC<CoinProps> = ({coins}) => {
  return (
    <div className="mt-10">
      <ul className="grid grid-rows-3 grid-cols-3 gap-y-4">
        {Array.isArray(coins) && coins?.map((coin) => (
          <li key={coin.uuid}>
            <Image src={coin.iconUrl} alt="icon" width={70} height={70} />
            <p className="text-white" >{coin.name}</p>
            <p className="text-white" >{coin.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CoinComponent