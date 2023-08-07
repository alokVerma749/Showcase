import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import useAuthorise from '../auth/hooks/useAuthorise'

const Header = () => {
    const user = useSelector((store) => store.user.user)
    useAuthorise();
    return (
        <header className='bg-teal-200 text-zinc-600 p-5 flex flex-row justify-between items-center sticky top-0 z-10  '>
            <div className="logo border border-red-500 w-52 text-center p-2">LOGO</div>
            <ul className='flex flex-row justify-around w-2/4'>
                <li className='font-normal hover:border-b-1 hover:border-b hover:animate-pulse hover:border-b-black text-base p-1 transition ease-in-out duration-700'><Link href={'/'}>Home</Link> </li>
                <li className='font-normal hover:border-b-1 hover:border-b hover:animate-pulse hover:border-b-black text-base p-1 transition ease-in-out duration-700'><Link href={'/about'}>About Us</Link> </li>
                {/* <li><Link href={'/projects'}>Projects</Link> </li> */}
                {/* <li><Link href={'/contact'}>Contact Us</Link> </li> */}
                {
                    user.isLoggedIn ? <li className='font-normal hover:border-b-1 hover:border-b hover:animate-pulse hover:border-b-black text-base p-1 transition ease-in-out duration-700'><Link href={'/profile'}>Profile</Link> </li> : <li className='font-normal hover:border-b-1 hover:border-b hover:animate-pulse hover:border-b-black text-base p-1 transition ease-in-out duration-700'><Link href={'/auth/signup'}>Sign up</Link> </li>
                }
            </ul>
        </header>
    )
}

export default Header