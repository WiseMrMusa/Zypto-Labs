import Link from "next/link"

export default function NavBar(){
    const nav = [
        {
            name: "Home",
            link: "/",
            id: 0
        },
        {
            name: "Token",
            link: "/token",
            id: 1
        },
        {
            name: "Governor",
            link: "/governor",
            id: 2
        },
        {
            name: "Proposals",
            link: "/proposals",
            id: 3
        },
        {
            name: "Business",
            link: "/business",
            id: 4
        },
    ]


    return(
        <nav className="hidden lg:flex lg:gap-10 items-center">
            {nav.map(e=> {
                return (
                    <Link 
                        href={e.link}
                        key={e.id}
                        className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
                        >
                        <span className="relative z-10">
                            {e.name}
                        </span>
                    </Link>
                )
            })}
        </nav>
    )
}