import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        {linkHref && linkTitle ?
        <Link href={linkHref} className="md:text-xl text-sm underline hover:text-blue-400 transition-all ">{linkTitle}</Link>
        : null
        }

      </div>
    )
}
export default Header