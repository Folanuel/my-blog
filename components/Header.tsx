import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Fola from '../assets/fola.png'
import {FaInstagram, FaGithub} from 'react-icons/fa'
import {RxAvatar} from 'react-icons/rx'
import {BsChatSquareText} from 'react-icons/bs'



function Header() {
    return (
        <header className='backdrop-blur-sm bg-white/30 text-white flex items-center justify-between space-x-2 font-bold my-6 mx-5 md:mx-96 md:my-12 px-10 py-2 border border-lg border-white rounded-xl fixed top-0 z-[100]'>
            <div className='flex items-center space-x-2'>
                <Link href='/'>
                    <Image 
                    className='rounded-full border-2 border-green-400 hover:scale-125'
                    src={Fola}
                    width={45}
                    height={45}
                    alt='logo'
                    
                    />
                </Link>
            </div>

            <div className='space-x-4 flex pl-5'>
                <Link href='/' className='md:flex md:space-x-2'><BsChatSquareText size={28} className='bg-green-700 hover:scale-125 rounded-lg'/> <p>Posts</p></Link>
                
                <Link href='https://github.com/Folanuel' className='md:flex md:space-x-2'><FaGithub size={28} className='bg-green-700 hover:scale-125 rounded-lg' /> <p>GitHub</p></Link>
                
                <Link href='https://www.instagram.com/fola_codes/' className='md:flex md:space-x-2'><FaInstagram size={28} className='bg-green-700 hover:scale-125 rounded-lg' /> <p>Instagram</p></Link>
                
                <Link href='https://folanuel-dev.netlify.app/' className='md:flex md:space-x-2'><RxAvatar size={28} className='bg-green-700 hover:scale-125 rounded-lg' /> <p>Portfolio</p></Link>
                
            </div>
        </header>
    )
}

export default Header