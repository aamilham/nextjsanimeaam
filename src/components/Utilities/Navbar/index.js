import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-blue-500">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-5">
                <Link href="/" className="font-bold text-2xl text-white">
                    Aanime List
                </Link>
                <input placeholder="Cari Anime..." className=""/>
            </div>
        </header>
    )
}

export default Navbar