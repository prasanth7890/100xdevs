import Link from 'next/link';

interface props { 
    children: string,
    destination: string,
}

export default function Button({children, destination}: props) {
    return(
        <Link className="border-2 border-black rounded-lg p-4" href={destination}>{children}</Link>
    )
}