import { getCards, getPlaylists } from "@/api/notion";
import { Player } from "@/components/Player";

export default async function Home() {
  const [cards, playlists] = await Promise.all([getCards(), getPlaylists()]);

  return (
    <main className="overflow-hidden">
      <Player cards={cards} playlists={playlists} />
    </main>
  );
}
