/* export default function Home() {
  return (
   <div>
      <h1>Hello world</h1>
   </div>
  )
}
 */

import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const topAnime = await response.json()

  return (
    <div>
      {/* Anime Populer */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime}/>
      </section>

      {/* Anime Terbaru */}
      <section>
        <Header title="Anime Terbaru" linkTitle="Lihat Semua" linkHref="/terbaru" />
        <AnimeList api={topAnime}/>
      </section>
    </div>
  )
}

export default Page