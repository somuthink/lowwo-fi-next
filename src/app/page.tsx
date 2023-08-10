


import { getCards, getPlaylists  } from "@/api/notion"
import { Player } from "@/components/Player";





export default async function Home() {

  const [cards, playlists] = await Promise.all([getCards(), getPlaylists()]);
  
  console.log(cards , playlists)

  return (


    <main className="">

    <Player cards={cards} playlists ={playlists} />
    

    </main>
  );
}




