import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import Authproviders from './Authproviders';

const Navbar = () => {
    const session = {};
  return (
    <nav className="flexBetween navbar">
        <div className="flex-1 flexStart gap-10">
            <Link href="/">
                <Image 
                    src="/logo.svg"
                    width={165}
                    height={43}
                    alt="Template Breakers"
                />
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
                {NavLinks.map((link) => (
                    <Link href={link.href} key= {link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>

        <div className="flexCenter gap-4">
            {session ? (
                <>
                    UserPhoto
                    <Link href="/create-project">
                        Share Work
                    </Link>
                </>
            ) : (
                <Authproviders />
            )}
        </div>
    </nav>
  )
}

export default Navbar