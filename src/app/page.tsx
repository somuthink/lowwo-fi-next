import { GetStaticProps, InferGetStaticPropsType } from 'next'


import { getCards, netlyTest} from "@/api/notion"
import { Player } from "@/components/Player";
import { CardProps } from "@/interfaces/CardProps";


interface Props {
 res: CardProps[];
}






export default async function Home() {

  const cards = await getCards()

  const netly = netlyTest()

  console.log(cards)

  return (


    <main className="">

    <Player cards={cards} netlyTest={netly} />
      



    </main>
  );
}




