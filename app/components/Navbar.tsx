import Link from "next/link"

export default function Navbar(){
    return (
        <nav>
            <Link href="/"> Home </Link>
            <Link href="/chapter1"> chapter1 </Link>
            <Link href="/chapter1/about"> About </Link>
        </nav>
    )
    }

