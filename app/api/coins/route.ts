import { NextResponse } from "next/server";

async function getCoins() {
  const response = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0',{
  method : "GET",
  headers:{
    'X-RapidAPI-Key': '69ad859bd4mshe0f8a2a3060bce4p1886b9jsn18989b839fe1',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
  })
  const resJson = await response.json();
  return resJson
}

export async function GET (request:Request){
  const coins = await getCoins()
  return NextResponse.json(coins)
}