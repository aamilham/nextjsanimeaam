/* export default function Home() {
  return (
   <div>
      <h1>Hello world</h1>
   </div>
  )
}
 */

import AnimeList from "@/components/AnimeList"
import Link from "next/link"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const anime = await response.json()

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Paling Populer</h1>
        <Link href="/populer" className="md:text-xl text-sm underline hover:text-blue-400 transition-all ">Selengkapnya</Link>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {anime.data.map(data => {
        return (
          <div key={data.mal_id} className="shadow-xl">
            <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id}/>
          </div>
          );
      })}
      </div>
    </div>
  )
}

export default Home